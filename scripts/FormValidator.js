export class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
        this._inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._submit = this._form.querySelector(this._settings.submitButtonSelector);
    }

    enableValidation() {
        this._setEventListeners(this._form, this._submit, this._inputs);
    }

    checkFormValidityBeforeOpen() {
        this._hideAllErrorMessages(this._form, this._inputs);
        this._toggleButtonState(this._submit, this._inputs);
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