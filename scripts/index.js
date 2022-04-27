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

popupProfile.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
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

//---------
popupCard.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
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

//--------- 
popupImage.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        popupImage.classList.toggle('popup_show');
    }
});

popupImageClose.addEventListener('click', () => {
    popupImage.classList.toggle('popup_show');
});

function popupProfileFormSubmitHandler (evt) {
    //отмена стандартного поведения кнопки submit
    evt.preventDefault(); 
    //обновляет текст в заголовке страницы. новое значение берётся из input модального окна
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupProfile.classList.toggle('popup_show');
}

function popupCardFormSubmitHandler (evt) {
    evt.preventDefault(); 
    
    popupCard.classList.toggle('popup_show');
}

function render() {
    const HTML = CARDS
        .map((card) => element(card))
        .join('');
    cards.insertAdjacentHTML('afterbegin', HTML); 
};

render();

let popupImageOpenAll = document.querySelectorAll('.element__image');
popupImageOpenAll.forEach((item) => {
    item.addEventListener('click', (event) => {
        popupImage.classList.toggle('popup_show');
        popupImage
            .querySelector('.popup__figure-img')
            .setAttribute('src', event.target.currentSrc);
    })
});

let treshButtonCardAll = document.querySelectorAll('.element__trash');
treshButtonCardAll.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    });
});
