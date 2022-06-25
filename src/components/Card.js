import { Like } from "./Like.js";
import { Trash } from "./Trash.js";

export class Card {
    constructor(
        templateSelector,
        userInfo,
        { ownerId, cardId, name, link, likes },
        clickImageHandler,
        clickLikeHandler,
        deleteConfirmPopup
    ) {
        this._text = name;
        this._link = link;
        this._id = cardId;
        this._ownerId = ownerId;
        this._userInfo = userInfo.getUserInfo();
        this._popupOpenHandler = clickImageHandler;
        this._element = document.querySelector(templateSelector)
            .content
            .cloneNode(true);
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementImage = this._element.querySelector('.element__image');
        this._elementLike = this._element.querySelector('.element__number');

        this._confirmPopup = deleteConfirmPopup;

        this._like = new Like(this, likes, clickLikeHandler);
        this._trash = new Trash(this);
    }

    getElement() {
        this._elementTitle.textContent = this._text;
        this._element.querySelector('.element').setAttribute('id', this._id)
        this._elementImage.setAttribute('src', this._link);
        this._elementImage.setAttribute('alt', `Фотография места с названием '${this._text}'.`);
        this._elementImage.addEventListener('click', () => this._handleShowImg(this._link, this._text));

        this._like.updateLike();
        this._trash.removeDeleteButton();
        return this._element;
    }

    _handleShowImg(link, text) {
        this._popupOpenHandler(link, text);
    }
}