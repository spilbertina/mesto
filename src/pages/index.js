import { INITIAL_CARDS, VALIDATE_CONFIG } from '../utils/constans.js'
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/Popups/PopupWithForm.js'
import { PopupWithImage } from '../components/Popups/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { Api } from '../utils/Api.js';

import '../pages/index.css'; // добавьте импорт главного файла стилей 

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

const api = new Api(
    'https://mesto.nomoreparties.co/v1/',
    'cohort-43',
    'ee068133-e055-42c6-88de-c45211ca2bd0');

api.getInitialCards(cards => {
    cards.forEach(i => {
        const card = createCard(i);
        section.addItem(card.getElement());
    });
});

api.getUserInfo(res => {
    userInfo.setUserInfo({
        name: res.name,
        job: res.about,
        link: res.avatar
    });
});

const section = new Section(
    {
        items: [],
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
    const data = {
        name: info.name,
        about: info.job
    }

    api.updateUserInfo(data, user => {
        userInfo.setUserInfo({
            name: user.name,
            job: user.about
        })
    });
}

//----------Функция для создания новой карточки
function handlePopupCardFormSubmit(info) {
    const cardSettings = {
        name: info.title,
        link: info.link
    }

    const card = createCard(cardSettings);
    section.addItem(card.getElement());


    api.testPost(cardSettings, x=>console.log(x));
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

validatorNewCard.enableValidation();
validatorPrifile.enableValidation();
