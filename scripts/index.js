const popups = document.querySelectorAll('.popup');

const popupProfile = document.querySelector('.popup_profile');
const popupProfileOpen = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('.popup__form-input[name=name]');
const jobInput = popupProfile.querySelector('.popup__form-input[name=job]');

const popupCard = document.querySelector('.popup_card');
const popupCardOpen = document.querySelector('.profile__button');
const popupCardForm = popupCard.querySelector('.popup__form');

const popupImage = document.querySelector('.popup_image');

//-----Функции открытия и закрыия popup
function openPopup(element) {
    element.querySelectorAll('input')
        .forEach(input => input.value = '');
    element.classList.toggle('popup_show');
}

function closePopup(element) {
    element.classList.toggle('popup_show');
}

//----------Функция для отправки формы popupProfile
function popupProfileFormSubmitHandler(evt) {
    //отмена стандартного поведения кнопки submit
    evt.preventDefault();
    //обновляет текст в заголовке страницы. новое значение берётся из input модального окна
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup(popupProfile);
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
    // https://developer.mozilla.org/ru/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfall
    const template = document
        .querySelector('.template')
        .content
        .firstElementChild
        .cloneNode(true);

    const elementTitle = template.querySelector('.element__title');
    const elementImage = template.querySelector('.element__image');

    elementTitle.innerText = card.name;
    elementImage.setAttribute('src', card.link);
    elementImage.setAttribute('alt', `Фотография места с названием '${card.name}'.`);

    return template;
}

function createCard(card) {
    const cardsSection = document.querySelector('.cards');

    const element = renderTemplate(card);
    cardsSection.prepend(element);

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

    openPopup(popupImage);
}

function elementLikeActiveHandler(event) {
    event.target.classList.toggle('element__like_active');
}

// вызываю функции

popupCardOpen.addEventListener('click', () => openPopup(popupCard));
popupProfileOpen.addEventListener('click', () => openPopup(popupProfile));

popupProfileForm.addEventListener('submit', popupProfileFormSubmitHandler);
popupCardForm.addEventListener('submit', popupCardFormSubmitHandler);

// вешаем обработчики на попапы
popups.forEach(popup => {
    const popupClose = popup.querySelector('.popup__close');
    popupClose.addEventListener('click', () => closePopup(popup));

    popup.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            closePopup(popup);
        }
    });
});

//----------Функция для создания новых карточек
INITIAL_CARDS.forEach(createCard);
