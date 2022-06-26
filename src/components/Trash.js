export class Trash {
    constructor(card) {
        this._card = card;
        this._confirmPopup = this._card._confirmPopup;
        this._buttonDeleteCard = this._card._element.querySelector('.element__trash');
        this._buttonDeleteCard.addEventListener('click', () => this._openPopup());
    }

    removeDeleteButton() {
        if (this._card._userInfo._id != this._card._ownerId) {
            this._buttonDeleteCard.remove();
        }
    }

    _openPopup() {
        this._confirmPopup._form.id.value = this._card._id;
        this._confirmPopup.open();
    }
}
