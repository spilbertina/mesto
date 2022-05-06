const formsList = Array.from(document.forms);
formsList.forEach((form) => {
    form.addEventListener('input', () => {
        validateForm(form)    
    });
});

function updateErrorMessageText(form, element) {
    const errorElement = form.querySelector(`.${element.id}-error`);
    errorElement.textContent = element.validationMessage;
}

function validateForm(form) {
    const inputs = Array.from(form.querySelectorAll('input'));
    const submit = form.querySelector('[type=submit]');

    inputs.every(i => i.validity.valid)
        ? submit.removeAttribute('disabled')
        : submit.setAttribute('disabled', true)

    inputs.forEach((input) => {
        updateErrorMessageText(form, input);
    })
}