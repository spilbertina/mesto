export class Popup {
    constructor(selectorName) {
        this._popup = document.querySelector(selectorName);
        this._popupClose = this._popup.querySelector('.popup__close');
        this._bindedEscCloseHandler = this._handleEscClose.bind(this);
        this._bindOversideClickHandler = this._handleOversideClick.bind(this);
    }

    open() {
        this._popup.classList.add('popup_show');
        document.addEventListener('keyup', this._bindedEscCloseHandler);
    }

    close() {
        this._popup.classList.remove('popup_show');
        document.removeEventListener('keyup', this._bindedEscCloseHandler);
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._bindOversideClickHandler);
        this._popupClose.addEventListener('click', this.close.bind(this));
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _handleOversideClick(event) {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }
}
