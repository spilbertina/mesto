let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit ');
let popupClose = popup.querySelector('.popup__close');
let formElement = popup.querySelector('.popup__form-button');
let nameInput = popup.querySelector('.popup__form-name');
let jobInput = popup.querySelector('.popup__form-job');
console.log(popup);

function popupToggleX() {
    popup.classList.toggle('popup__display-none');
}

popup.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        popupToggleX();
    }
    console.log('click!');
});

popupOpen.addEventListener('click', popupToggleX);

popupClose.addEventListener('click', popupToggleX);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    console.log(nameInput[0].value);
    console.log(jobInput[0].value);
    nameInput.className
}

popupClose.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        popupToggleX();
    }
    console.log('click!');
});