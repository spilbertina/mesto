import { INITIAL_CARDS, VALIDATE_CONFIG } from './constans.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'

const cardsSection = document.querySelector('.cards');
const popups = Array.from(document.querySelectorAll('.popup'));
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const popupProfile = document.querySelector('.popup_profile');
const popupProfileOpen = document.querySelector('.profile__edit');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupProfileNameInput = popupProfile.querySelector('.popup__form-input[name=name]');
const popupProfileJobInput = popupProfile.querySelector('.popup__form-input[name=job]');

const popupCard = document.querySelector('.popup_card');
const popupCardOpen = document.querySelector('.profile__button');
const popupCardForm = popupCard.querySelector('.popup__form');
const popupCardTitle = popupCardForm.querySelector('.popup__form-input[name=title]');
const popupCardLink = popupCardForm.querySelector('.popup__form-input[name=link]');

const popupImage = document.querySelector('.popup_image');
const popupImageFigureImage = popupImage.querySelector('.popup__figure-img');
const popupImageFigureText = popupImage.querySelector('.popup__figure-text');

const validatorNewCard = new FormValidator(VALIDATE_CONFIG, popupCardForm);
const validatorPrifile = new FormValidator(VALIDATE_CONFIG, popupProfileForm);
//-----Функции открытия и закрыия popup
function handleClosePopupByEscape(event) {
    if (event.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_show');
        handleClosePopup(popupOpen)
    }
}

function handleOpenPopup(element) {
    element.classList.add('popup_show');
    document.addEventListener('keyup', handleClosePopupByEscape);
}

function handleClosePopup(element) {
    element.classList.remove('popup_show');
    document.removeEventListener('keyup', handleClosePopupByEscape);
}

//----------Функция для отправки формы popupProfile
function handlePopupProfileFormSubmit(event) {
    //отмена стандартного поведения кнопки submit
    event.preventDefault();
    //обновляет текст в заголовке страницы. новое значение берётся из input модального окна
    profileName.textContent = popupProfileNameInput.value;
    profileJob.textContent = popupProfileJobInput.value;

    handleClosePopup(popupProfile);
}

//----------Функция для создания новой карточки
function handlePopupCardFormSubmit(event) {
    event.preventDefault();

    const cardSettings = {
        name: popupCardTitle.value,
        link: popupCardLink.value
    }

    const card = createCard(cardSettings);
    cardsSection.prepend(card.getElement());

    handleClosePopup(popupCard);
    popupCardForm.reset();
}

function handleCreateNewCard() {
    validatorNewCard.checkFormValidityBeforeOpen();
    handleOpenPopup(popupCard);
}

function handleEditProfile() {
    popupProfileNameInput.value = profileName.textContent;
    popupProfileJobInput.value = profileJob.textContent;

    validatorPrifile.checkFormValidityBeforeOpen();
    handleOpenPopup(popupProfile);
}

function createCard(settings) {
    return new Card('.template', settings, hanblePopupImageOpen);
}

function hanblePopupImageOpen(card) {
    popupImageFigureImage.setAttribute('src', card.link);
    popupImageFigureImage.setAttribute('alt', card.text);
    popupImageFigureText.textContent = card.text;
    handleOpenPopup(popupImage);
}

popupCardOpen.addEventListener('click', handleCreateNewCard);
popupProfileOpen.addEventListener('click', handleEditProfile);
popupProfileForm.addEventListener('submit', handlePopupProfileFormSubmit);
popupCardForm.addEventListener('submit', handlePopupCardFormSubmit);

//----------Функция для создания новых карточек
INITIAL_CARDS.forEach((cardSettings) => {
    const card = createCard(cardSettings);
    cardsSection.append(card.getElement());
});

// вешаем обработчики на попапы
popups.forEach(popup => {
    const popupClose = popup.querySelector('.popup__close');
    popupClose.addEventListener('click', () => handleClosePopup(popup));
    popup.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            handleClosePopup(popup);
        }
    });
});

validatorNewCard.enableValidation();
validatorPrifile.enableValidation();
