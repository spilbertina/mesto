import { INITIAL_CARDS, VALIDATE_CONFIG } from './constans.js'
import { Card } from './Card.js'

//const template = document.querySelector('.template');

const cardsSection = document.querySelector('.cards');
const popups = Array.from(document.querySelectorAll('.popup'));
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const popupProfile = document.querySelector('.popup_profile');
const popupProfileOpen = document.querySelector('.profile__edit');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupProfileNameInput = popupProfile.querySelector('.popup__form-input[name=name]');
const popupProfileJobInput = popupProfile.querySelector('.popup__form-input[name=job]');
const popupProfileFormSubmit = popupProfileForm.querySelector('[type=submit]');
const popupProfileInputs = Array.from(popupProfileForm.querySelectorAll(VALIDATE_CONFIG.inputSelector));

const popupCard = document.querySelector('.popup_card');
const popupCardOpen = document.querySelector('.profile__button');
const popupCardForm = popupCard.querySelector('.popup__form');
const popupCardFormSubmit = popupCardForm.querySelector('[type=submit]');
const popupCardFormInputs = Array.from(popupCardForm.querySelectorAll(VALIDATE_CONFIG.inputSelector));
const popupCardTitle = popupCardForm.querySelector('.popup__form-input[name=title]');
const popupCardLink = popupCardForm.querySelector('.popup__form-input[name=link]');

const popupImage = document.querySelector('.popup_image');
const popupImageFigureImage = popupImage.querySelector('.popup__figure-img');
const popupImageFigureText = popupImage.querySelector('.popup__figure-text');

//-----Функции открытия и закрыия popup
function handleClosePopupByEscape(event) {
    if (event.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_show');
        handleClosePopup(popupOpen)
    }
}

function handleOpenPopup(element) {
    element.classList.toggle('popup_show');
    document.addEventListener('keyup', handleClosePopupByEscape);
}

function handleClosePopup(element) {
    element.classList.toggle('popup_show');
    document.removeEventListener('keyup', handleClosePopupByEscape)
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

    const card = createCard({
        name: popupCardTitle.value,
        link: popupCardLink.value,
    });
    handleClosePopup(popupCard);

    cardsSection.prepend(card);
    popupCardForm.reset();
}

function handleElementRemove(event) {
    event.target.closest('.element').remove();
}

// function createCard(cardSettings) {
//     const card = template
//         .content
//         .cloneNode(true);

//     const elementTitle = card.querySelector('.element__title');
//     elementTitle.textContent = cardSettings.name;

//     const elementImage = card.querySelector('.element__image');
//     elementImage.setAttribute('src', cardSettings.link);
//     elementImage.setAttribute('alt', `Фотография места с названием '${cardSettings.name}'.`);
//     elementImage.addEventListener('click', handleShowImg);

//     const buttonDeleteCard = card.querySelector('.element__trash')
//     buttonDeleteCard.addEventListener('click', handleElementRemove);

//     const like = card.querySelector('.element__like');
//     like.addEventListener('click', handleElementLikeActive);

//     return card;
// }

// function handleShowImg(event) {
//     popupImageFigureImage.setAttribute('src', event.target.currentSrc);
//     popupImageFigureImage.setAttribute('alt', event.target.alt);
//     popupImageFigureText.textContent = event.target.parentElement.textContent;

//     handleOpenPopup(popupImage);
// }

function handleElementLikeActive(event) {
    event.target.classList.toggle('element__like_active');
}

// вызываю функции
popupCardOpen.addEventListener('click', () => {
    handleOpenPopup(popupCard);
    checkFormValidityBeforeOpen(popupCardForm, popupCardFormSubmit, popupCardFormInputs);
});

popupProfileOpen.addEventListener('click', () => {
    popupProfileNameInput.value = profileName.textContent;
    popupProfileJobInput.value = profileJob.textContent;

    checkFormValidityBeforeOpen(popupProfileForm, popupProfileFormSubmit, popupProfileInputs);
    handleOpenPopup(popupProfile);
});

popupProfileForm.addEventListener('submit', handlePopupProfileFormSubmit);
popupCardForm.addEventListener('submit', handlePopupCardFormSubmit);

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

//----------Функция для создания новых карточек
INITIAL_CARDS.forEach((cardSettings) => {
    //const card = createCard(cardSettings);

    const card =  new Card('.template', cardSettings.name, cardSettings.link);

    cardsSection.append(card.getElement());
});
