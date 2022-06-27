import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(selectorName, submitHandler) {
        super(selectorName);
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__form-input'));
        this._submitButton = this._form.querySelector('button');
        this._originButtonText = this._submitButton.textContent.trim();
        this._submitHandler = submitHandler;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitButton.textContent = this._originButtonText + '...';
            const inputValues = this._getInputValues();
            this._submitHandler(inputValues);
        });
    }

    setSuccess(){
        this._submitButton.textContent = this._originButtonText;
    }

    close() {
        this._form.reset();
        super.close();
    }

    _getInputValues() {
        return this._inputs.reduce((object, input) => ({
            ...object,
            [input.name]: input.value
        }), {});
    }
}
