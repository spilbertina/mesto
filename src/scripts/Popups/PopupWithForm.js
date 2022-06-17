import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(selectorName, submitHandler) {
        super(selectorName);
        this._form = this._popup.querySelector('.popup__form');
        this._submitHandler = submitHandler;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            const inputValues = this._getInputValues();
            this._submitHandler(inputValues);
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    open() {
        super.open();
    }

    _getInputValues() {
        const inputs = Array.from(this._form.querySelectorAll('.popup__form-input'));
        return inputs.reduce((object, input) => ({
            ...object,
            [input.name]: input.value
        }), {});
    }
}
