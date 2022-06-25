import { _ } from "core-js";

export class Like {
    constructor(ownerId, cardId, element, likes, clickHandler) {
        this._cardId = cardId;
        this._ownerId = ownerId;
        this._likes = likes;
        this._handler = clickHandler.bind(this);
        this._likeElement = element.querySelector('.element__like');
        this._likeCounterElement = element.querySelector('.element__number');
        this._likeElement.addEventListener('click', this._likeHendler.bind(this));

        this._likeCounterElement.textContent = likes.length;
    }

    setLike(likes) {
        this._likes = likes;
        this.updateLike();
    }

    isLike(){
        return this._isHasMyLike();
    }

    updateLike() {
        // this._isHasMyLike(this._likes)
        //     ? this._likeElement.classList.add('element__like_active')
        //     : this._likeElement.classList.remove('element__like_active');
        this._likeElement.classList.toggle('element__like_active')
        this._likeCounterElement.textContent = this._likes.length;
    }

    _likeHendler(likes) {
        this._likeElement.textContent = likes.length;
        this._handler(this);
    }

    _isHasMyLike() {
        return this._likes != undefined
            ? this._likes.some(x => x._id == this._ownerId)
            : false;
    }
}