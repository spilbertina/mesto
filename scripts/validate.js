const settings = enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-button',
    errorClass: 'popup__form-error_visible'
});

function enableValidation(settings) {
    const formsList = document.querySelectorAll(settings.formSelector);
    const forms = Array.from(formsList);
    forms.forEach((form) => {
        form.addEventListener('input', () => {
            validateForm(form)
        });
    });

    return settings;
}

function updateErrorMessageText(form, element) {
    const errorElement = form.querySelector(`.${element.id}-error`);
    errorElement.textContent = element.validationMessage;

    element.validity.valid
        ? element.classList.remove(settings.errorClass)
        : element.classList.add(settings.errorClass);
}

function validateForm(form) {
    const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
    const submit = form.querySelector(settings.submitButtonSelector);

    inputs.every(i => i.validity.valid)
        ? submit.removeAttribute('disabled')
        : submit.setAttribute('disabled', true);

    inputs.forEach((input) => {
        updateErrorMessageText(form, input);
    });
}
