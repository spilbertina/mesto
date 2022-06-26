export class Like {
    constructor(card, likes, clickHandler) {
        this._card = card;
        this._likes = likes;
        this._handler = clickHandler.bind(this);
        this._likeElement = card._element.querySelector('.element__like');
        this._likeCounterElement = card._element.querySelector('.element__number');
        this._likeElement.addEventListener('click', this._likeHendler.bind(this));
        this._likeCounterElement.textContent = likes.length;
    }

    setLike(likes) {
        this._likes = likes;
        this.updateLike();
    }

    isLike() {
        return this._isHasMyLike();
    }

    getCardId(){
        return this._card._id;
    }

    updateLike() {
        this._isHasMyLike()
            ? this._likeElement.classList.add('element__like_active')
            : this._likeElement.classList.remove('element__like_active');
        this._likeCounterElement.textContent = this._likes.length
    }

    _likeHendler(likes) {
        this._likeElement.textContent = likes.length;
        this._handler(this);
    }

    _isHasMyLike() {
        return this._likes.some(x => x._id == this._card._userInfo._id);
    }
}