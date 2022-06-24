export class Card {
    constructor(templateSelector, { name, link, likes }, clickImageHandler) {
        this._text = name;
        this._link = link;
        this._likes = likes;
        this._popupOpenHandler = clickImageHandler;
        this._templateSelector = templateSelector;

        this._element = document.querySelector(this._templateSelector)
            .content
            .cloneNode(true);
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementImage = this._element.querySelector('.element__image');
        this._elementLike = this._element.querySelector('.element__number');
        this._buttonDeleteCard = this._element.querySelector('.element__trash');
        this._like = this._element.querySelector('.element__like');
    }

    _handleShowImg(link, text) {
        this._popupOpenHandler(link, text);
    }

    _handleElementLikeActive(event) {
        event.target.classList.toggle('element__like_active');
    }

    _handleElementRemove(event) {
        event.target.closest('.element').remove();
    }

    getElement() {
        this._elementTitle.textContent = this._text;
        this._elementImage.setAttribute('src', this._link);
        this._elementImage.setAttribute('alt', `Фотография места с названием '${this._text}'.`);
        this._elementLike.textContent = this._likes;

        this._elementImage.addEventListener('click', () => this._handleShowImg(this._link, this._text));
        this._buttonDeleteCard.addEventListener('click', this._handleElementRemove);
        this._like.addEventListener('click', this._handleElementLikeActive);

        return this._element;
    }
}