let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit ');
let popupClose = popup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__form-name');
let jobInput = popup.querySelector('.popup__form-job');


popup.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        popupToggleX();
    }
});

popupOpen.addEventListener('click', popupToggleX);

popupClose.addEventListener('click', popupToggleX);

formElement.addEventListener('submit', formSubmitHandler); 


function popupToggleX() {
    popup.classList.toggle('popup__display-none');
}

function formSubmitHandler (evt) {
//отмена стандартного поведения кнопки submit
    evt.preventDefault(); 
//обновляет текст в заголовке страницы. новое значение берётся из input модального окна
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupToggleX();
}
