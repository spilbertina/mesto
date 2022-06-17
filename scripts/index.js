import { INITIAL_CARDS, VALIDATE_CONFIG } from './constans.js'
import { UserInfo } from './UserInfo.js';
import { Section } from './Section.js';
import { PopupWithForm } from './Popups/PopupWithForm.js'
import { PopupWithImage } from './Popups/PopupWithImage.js';
import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js'

const cardsSection = document.querySelector('.cards');

const popupProfile = document.querySelector('.popup_profile');
const popupProfileOpen = document.querySelector('.profile__edit');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupProfileNameInput = popupProfile.querySelector('.popup__form-input[name=name]');
const popupProfileJobInput = popupProfile.querySelector('.popup__form-input[name=job]');

const popupCard = document.querySelector('.popup_card');
const popupCardOpen = document.querySelector('.profile__button');
const popupCardForm = popupCard.querySelector('.popup__form');

const validatorNewCard = new FormValidator(VALIDATE_CONFIG, popupCardForm);
const validatorPrifile = new FormValidator(VALIDATE_CONFIG, popupProfileForm);

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    jobSelector: '.profile__job'
});

const section = new Section(
    {
        items: INITIAL_CARDS,
        renderer: (cardSettings) => {
            const card = createCard(cardSettings);
            cardsSection.append(card.getElement());
        }
    },
    '.cards');

const profilePopup = new PopupWithForm('.popup_profile', handlePopupProfileFormSubmit);
const newCardPopup = new PopupWithForm('.popup_card', handlePopupCardFormSubmit);
const imagePopup = new PopupWithImage('.popup_image');


//----------Функция для отправки формы popupProfile
function handlePopupProfileFormSubmit(info) {
    userInfo.setUserInfo(info);
}

//----------Функция для создания новой карточки
function handlePopupCardFormSubmit(info) {
    const cardSettings = {
        name: info.title,
        link: info.link
    }

    const card = createCard(cardSettings);
    section.addItem(card.getElement());
}

function handleCreateNewCard() {
    validatorNewCard.checkFormValidityBeforeOpen();
    newCardPopup.open();
}

function handleEditProfile() {
    const { name, job } = userInfo.getUserInfo();

    popupProfileNameInput.value = name;
    popupProfileJobInput.value = job;

    validatorPrifile.checkFormValidityBeforeOpen();
    profilePopup.open();
}

function createCard(settings) {
    return new Card('.template', settings, hanblePopupImageOpen);
}

function hanblePopupImageOpen(link, text) {
    imagePopup.open(link, text);
}

profilePopup.setEventListeners();
newCardPopup.setEventListeners();
imagePopup.setEventListeners();

popupCardOpen.addEventListener('click', handleCreateNewCard);
popupProfileOpen.addEventListener('click', handleEditProfile);


section.renderContent();
validatorNewCard.enableValidation();
validatorPrifile.enableValidation();
