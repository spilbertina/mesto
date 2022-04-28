let cards = document.querySelector('.cards');

let popupProfile = document.querySelector('.popup_profile');
let popupProfileOpen = document.querySelector('.profile__edit');
let popupProfileClose = popupProfile.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popupProfileForm = popupProfile.querySelector('.popup__form');
let nameInput = popupProfile.querySelector('.popup__form-input[name=name]');
let jobInput = popupProfile.querySelector('.popup__form-input[name=job]');

let popupCard = document.querySelector('.popup_card');
let popupCardOpen = document.querySelector('.profile__button');
let popupCardClose = popupCard.querySelector('.popup__close');
let popupCardForm = popupCard.querySelector('.popup__form');


let popupImage = document.querySelector('.popup_image');
let popupImageClose = popupImage.querySelector('.popup__close');

//-------Закрытие и открытие попапа popupProfile по области на странице и кнопкам. Отправка формы
popupProfile.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        popupProfile.classList.toggle('popup_show');
    }
});

popupProfileOpen.addEventListener('click', () => {
    popupProfile.classList.toggle('popup_show');
});

popupProfileClose.addEventListener('click', () => {
    popupProfile.classList.toggle('popup_show');
});

popupProfileForm.addEventListener('submit', popupProfileFormSubmitHandler);

//---------Закрытие и открытие попапа popupCard по области на странице и кнопкам. Отправка формы
popupCard.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        popupCard.classList.toggle('popup_show');
    }
});

popupCardOpen.addEventListener('click', () => {
    popupCard.classList.toggle('popup_show');
});

popupCardClose.addEventListener('click', () => {
    popupCard.classList.toggle('popup_show');
});

popupCardForm.addEventListener('submit', popupCardFormSubmitHandler);

//---------Закрытие и открытие попапа popupImage по области на странице и кнопкам
popupImage.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        popupImage.classList.toggle('popup_show');
    }
});

popupImageClose.addEventListener('click', () => {
    popupImage.classList.toggle('popup_show');
});

//----------Функция для отправки формы popupProfile
function popupProfileFormSubmitHandler(evt) {
    //отмена стандартного поведения кнопки submit
    evt.preventDefault();
    //обновляет текст в заголовке страницы. новое значение берётся из input модального окна
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupProfile.classList.toggle('popup_show');
}

//----------Функция для создания новой карточки
function popupCardFormSubmitHandler(evt) {
    evt.preventDefault();
    const TITLE = popupCardForm
        .querySelector('.popup__form-input[name=title]')
        .value;

    const LINK = popupCardForm
        .querySelector('.popup__form-input[name=link]')
        .value

    createCard({
        name: TITLE,
        link: LINK, 
    });
    popupCard.classList.toggle('popup_show');
}

function elementRemove(event) {
    event.target.parentElement.remove();
}

function renderTemplate(card) {
    const TEMPLATE = document
        .querySelector('.template')
        .content
        .cloneNode(true);
    
    let elementTitle = TEMPLATE.querySelector('.element__title');
    let elementImage = TEMPLATE.querySelector('.element__image');

    elementTitle.innerText = card.name;
    elementImage.setAttribute('src', card.link);
    elementImage.setAttribute('alt', `Фотография места с названием '${card.name}'.`);

    return TEMPLATE.children[0];
}

function createCard(card) {
    let cardsSection = document.querySelector('.cards');
 
    const element = renderTemplate(card);
    cardsSection.insertAdjacentElement('afterbegin', element);

    let deleteButton = element.querySelector('.element__trash')
    deleteButton.addEventListener('click', elementRemove);
    
    let img = element.querySelector('.element__image');
    img.addEventListener('click', showImg);

    let like = element.querySelector('.element__like');
    like.addEventListener('click', elementLikeActiveHandler);
}

function showImg(event) {
    popupImage
        .querySelector('.popup__figure-img')
        .setAttribute('src', event.target.currentSrc);
    popupImage.classList.toggle('popup_show');
}

function elementLikeActiveHandler(event) {
    event.target.classList.toggle('element__like_active');
}

//----------Функция для создания новых карточек
CARDS.forEach(createCard);