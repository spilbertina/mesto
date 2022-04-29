const template = document.querySelector('.template');

const cardsSection = document.querySelector('.cards');
const popups = document.querySelectorAll('.popup');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const popupProfile = document.querySelector('.popup_profile');
const popupProfileOpen = document.querySelector('.profile__edit');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('.popup__form-input[name=name]');
const jobInput = popupProfile.querySelector('.popup__form-input[name=job]');

const popupCard = document.querySelector('.popup_card');
const popupCardOpen = document.querySelector('.profile__button');
const popupCardForm = popupCard.querySelector('.popup__form');
const cardTitle = popupCardForm.querySelector('.popup__form-input[name=title]');
const cardLink = popupCardForm.querySelector('.popup__form-input[name=link]');

const popupImage = document.querySelector('.popup_image');

//-----Функции открытия и закрыия popup
function handleOpenPopup(element) {
    element.querySelectorAll('input')
        .forEach(input => input.value = '');
    element.classList.toggle('popup_show');
}

function handleClosePopup(element) {
    element.classList.toggle('popup_show');
}

//----------Функция для отправки формы popupProfile
function handlePopupProfileFormSubmit(evt) {
    //отмена стандартного поведения кнопки submit
    evt.preventDefault();
    //обновляет текст в заголовке страницы. новое значение берётся из input модального окна
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    handleClosePopup(popupProfile);
}

//----------Функция для создания новой карточки
function handlePopupCardFormSubmit(evt) {
    evt.preventDefault();

    const card = createCard({
        name: cardTitle.value,
        link: cardLink.value,
    });
    handleClosePopup(popupCard);
    cardsSection.prepend(card);
}

function handleElementRemove(event) {
    event.target.parentElement.remove();
}

function createCard(cardSettings) {
    const card = template
        .content
        .cloneNode(true);

    const elementTitle = card.querySelector('.element__title');
    elementTitle.textContent = cardSettings.name;

    const elementImage = card.querySelector('.element__image');
    elementImage.setAttribute('src', cardSettings.link);
    elementImage.setAttribute('alt', `Фотография места с названием '${cardSettings.name}'.`);

    const deleteButton = card.querySelector('.element__trash')
    deleteButton.addEventListener('click', handleElementRemove);

    const img = card.querySelector('.element__image');
    img.addEventListener('click', handleShowImg);

    const like = card.querySelector('.element__like');
    like.addEventListener('click', handlerElementLikeActive);

    return card;
}

function handleShowImg(event) {
    const img = popupImage
        .querySelector('.popup__figure-img');

    img.setAttribute('src', event.target.currentSrc);
    img.setAttribute('alt', event.target.alt);

    popupImage
        .querySelector('.popup__figure-text')
        .textContent = event.target.parentElement.textContent;

    handleOpenPopup(popupImage);
}

function handlerElementLikeActive(event) {
    event.target.classList.toggle('element__like_active');
}

// вызываю функции
popupCardOpen.addEventListener('click', () => handleOpenPopup(popupCard));
popupProfileOpen.addEventListener('click', () => handleOpenPopup(popupProfile));

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
INITIAL_CARDS.forEach((cardSettings)=> {
    const card = createCard(cardSettings);
    cardsSection.append(card);
});
