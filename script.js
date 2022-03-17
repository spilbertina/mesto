let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit');
let popupClose = popup.querySelector('.popup__close');

function popupToggleX() {
    popup.classList.toggle('popup__open');
}

popupOpen.addEventListener('click', popupToggleX);

popupClose.addEventListener('click', popupToggleX);