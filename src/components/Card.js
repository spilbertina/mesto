import { Like } from "./Like.js";

export class Card {
    constructor(templateSelector, userInfo, { ownerId, cardId, name, link, likes }, clickImageHandler, clickLikeHandler) {
        this._text = name;
        this._link = link;
        this._popupOpenHandler = clickImageHandler;
        this._templateSelector = templateSelector;
        this._element = document.querySelector(this._templateSelector)
            .content
            .cloneNode(true);
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementImage = this._element.querySelector('.element__image');
        this._elementLike = this._element.querySelector('.element__number');
        this._buttonDeleteCard = this._element.querySelector('.element__trash');
        this._like = new Like(userInfo.getUserInfo(), cardId, this._element, likes, clickLikeHandler);
    }

    _handleShowImg(link, text) {
        this._popupOpenHandler(link, text);
    }

    _handleElementRemove(event) {
        event.target.closest('.element').remove();
    }

    getElement() {
        this._elementTitle.textContent = this._text;
        this._elementImage.setAttribute('src', this._link);
        this._elementImage.setAttribute('alt', `Фотография места с названием '${this._text}'.`);

        this._elementImage.addEventListener('click', () => this._handleShowImg(this._link, this._text));
        this._buttonDeleteCard.addEventListener('click', this._handleElementRemove);

        this._like.updateLike();
        return this._element;
    }
}