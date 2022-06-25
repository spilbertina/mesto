export class Trash {
    constructor(card, clickDeleteHendler) {
        this._card = card;
        this._clickDeleteHendler = clickDeleteHendler;
        this._buttonDeleteCard = this._card._element.querySelector('.element__trash');

        this._buttonDeleteCard.addEventListener('click', () => this._handleElementRemove());

    }

    removeDeleteButton() {
        if (this._card._userInfo.id != this._card._ownerId) {
            this._buttonDeleteCard.remove();
        }
    }

    _handleElementRemove() {
        this._clickDeleteHendler();
    }
}
