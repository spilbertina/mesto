function enableValidation(config) {
    const formsList = document.querySelectorAll(config.formSelector);
    const forms = Array.from(formsList);
    forms.forEach((form) => {
        const submit = form.querySelector('[type=submit]');
        const inputs = Array.from(form.querySelectorAll(config.inputSelector));

        setEventListeners(form, submit, inputs);
    });
}

function toggleButtonState(submit, elements) {
    elements.some(i => i.validity.valid != true)
        ? submit.setAttribute('disabled', true)
        : submit.removeAttribute('disabled');
}

function checkInputValidity(form, element) {
    element.validity.valid
        ? hideErrorMessage(form, element)
        : showErrorMessage(form, element)
}

function checkFormValidityBeforeOpen(form, submit, elements){
    hideAllErrorMessages(form, elements);
    toggleButtonState(submit, elements);
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

function setEventListeners(form, submit, inputs) {
    inputs.forEach((element) => {
        element.addEventListener('input', () => {
            checkInputValidity(form, element);
            toggleButtonState(submit, inputs);
        });
    });
}

enableValidation(VALIDATE_CONFIG);
