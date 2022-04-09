let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit ');
let popupClose = popup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__form-input[name=name]');
let jobInput = popup.querySelector('.popup__form-input[name=job]');


popup.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        popupModalWindow();
    }
});
popupOpen.addEventListener('click', popupModalWindow);
popupClose.addEventListener('click', popupModalWindow);
formElement.addEventListener('submit', formSubmitHandler); 


function popupModalWindow() {
    popup.classList.toggle('popup_show');
}

function formSubmitHandler (evt) {
    //отмена стандартного поведения кнопки submit
    evt.preventDefault(); 
    //обновляет текст в заголовке страницы. новое значение берётся из input модального окна
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupModalWindow();
}
