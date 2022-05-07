function enableValidation(config) {
    const formsList = document.querySelectorAll(config.formSelector);
    const forms = Array.from(formsList);
    forms.forEach((form) => {
        setEventListeners(config, form);
    });
}

function toggleButtonState(config, form, elements) {
    const submit = form.querySelector(config.submitButtonSelector);
    elements.some(i => i.validity.valid != true)
        ? submit.setAttribute('disabled', true)
        : submit.removeAttribute('disabled');
}

function checkInputValidity(form, element) {
    element.validity.valid
        ? hideErrorMessage(form, element)
        : showErrorMessage(form, element)
}

function checkFormValidityBeforeOpen(config, form, elements){
    hideAllErrorMessages(form, elements);
    toggleButtonState(config, form, elements);
}

function showErrorMessage(form, element) {
    const errorElement = form.querySelector(`.${element.id}-error`);
    errorElement.textContent = element.validationMessage;
}

function hideErrorMessage(form, element) {
    const errorElement = form.querySelector(`.${element.id}-error`);
    errorElement.textContent = '';
}

function hideAllErrorMessages(form, elements){
    elements.forEach((element)=>{
        hideErrorMessage(form, element);
    });
}

function setEventListeners(config, form) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    inputs.forEach((element) => {
        element.addEventListener('input', () => {
            checkInputValidity(form, element);
            toggleButtonState(config, form, inputs);
        });
    });
}

enableValidation(VALIDATE_CONFIG);