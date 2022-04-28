const cards = document.querySelector('.cards');

const popupProfile = document.querySelector('.popup_profile');
const popupProfileOpen = document.querySelector('.profile__edit');
const popupProfileClose = popupProfile.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('.popup__form-input[name=name]');
const jobInput = popupProfile.querySelector('.popup__form-input[name=job]');

const popupCard = document.querySelector('.popup_card');
const popupCardOpen = document.querySelector('.profile__button');
const popupCardClose = popupCard.querySelector('.popup__close');
const popupCardForm = popupCard.querySelector('.popup__form');


const popupImage = document.querySelector('.popup_image');
const popupImageClose = popupImage.querySelector('.popup__close');

//-------Закрытие и открытие попапа popupProfile по области на странице и кнопкам. Отправка формы
popupProfile.addEventListener('click', (event) => {
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
popupCard.addEventListener('click', (event) => {
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
popupImage.addEventListener('click', (event) => {
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
    const title = popupCardForm
        .querySelector('.popup__form-input[name=title]')
        .value;

    const link = popupCardForm
        .querySelector('.popup__form-input[name=link]')
        .value

    createCard({
        name: title,
        link: link, 
    });
    popupCard.classList.toggle('popup_show');
}

function elementRemove(event) {
    event.target.parentElement.remove();
}

function renderTemplate(card) {
    const template = document
        .querySelector('.template')
        .content
        .cloneNode(true);
    
    const elementTitle = template.querySelector('.element__title');
    const elementImage = template.querySelector('.element__image');

    elementTitle.innerText = card.name;
    elementImage.setAttribute('src', card.link);
    elementImage.setAttribute('alt', `Фотография места с названием '${card.name}'.`);

    return template.children[0];
}

function createCard(card) {
    const cardsSection = document.querySelector('.cards');
 
    const element = renderTemplate(card);
    cardsSection.insertAdjacentElement('afterbegin', element);

    const deleteButton = element.querySelector('.element__trash')
    deleteButton.addEventListener('click', elementRemove);
    
    const img = element.querySelector('.element__image');
    img.addEventListener('click', showImg);

    const like = element.querySelector('.element__like');
    like.addEventListener('click', elementLikeActiveHandler);
}

function showImg(event) {
    const img = popupImage
        .querySelector('.popup__figure-img');
    
    img.setAttribute('src', event.target.currentSrc);
    img.setAttribute('alt', event.target.alt);

    popupImage
        .querySelector('.popup__figure-text')
        .innerText = event.target.parentElement.innerText;
        
    popupImage.classList.toggle('popup_show');
}

function elementLikeActiveHandler(event) {
    event.target.classList.toggle('element__like_active');
}

//----------Функция для создания новых карточек
INITIAL_CARDS.forEach(createCard);

