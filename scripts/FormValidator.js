export class FormValidator {
    constructor(settings, form) {
        this.settings = settings;
        this.form = form;
    }

    enableValidation() {
        const submit = this.form.querySelector('[type=submit]');
        const inputs = Array.from(this.form.querySelectorAll(this.settings.inputSelector));

        this._setEventListeners(this.form, submit, inputs);
    }

    checkFormValidityBeforeOpen(form, submit, elements) {
        this._hideAllErrorMessages(form, elements);
        this._toggleButtonState(submit, elements);
    }

    _toggleButtonState(submit, elements) {
        elements.some(i => i.validity.valid != true)
            ? submit.setAttribute('disabled', true)
            : submit.removeAttribute('disabled');
    }

    _checkInputValidity(form, element) {
        element.validity.valid
            ? this._hideErrorMessage(form, element)
            : this._showErrorMessage(form, element)
    }

    _showErrorMessage(form, element) {
        const errorElement = form.querySelector(`.${element.id}-error`);
        errorElement.textContent = element.validationMessage;
    }

    _hideErrorMessage(form, element) {
        const errorElement = form.querySelector(`.${element.id}-error`);
        errorElement.textContent = '';
    }

    _hideAllErrorMessages(form, elements) {
        elements.forEach((element) => {
            this._hideErrorMessage(form, element);
        });
    }

    _setEventListeners(form, submit, inputs) {
        inputs.forEach((element) => {
            element.addEventListener('input', () => {
                this._checkInputValidity(form, element);
                this._toggleButtonState(submit, inputs);
            });
        });
    }
}