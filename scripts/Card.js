export class Card {
    constructor(templateSelector, settings, handler) {
        this.text = settings.name;
        this.link = settings.link;
        this._popupOpenHandler = handler;
        this._templateSelector = templateSelector;

        this._element = document.querySelector(this._templateSelector)
            .content
            .cloneNode(true);
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementImage = this._element.querySelector('.element__image');
        this._buttonDeleteCard = this._element.querySelector('.element__trash');
        this._like = this._element.querySelector('.element__like');
    }

    _handleShowImg(event) {
        this._popupOpenHandler(event);
    }

    _handleElementLikeActive(event) {
        event.target.classList.toggle('element__like_active');
    }

    _handleElementRemove(event) {
        event.target.closest('.element').remove();
    }

    getElement() {
        this._elementTitle.textContent = this.text;
        this._elementImage.setAttribute('src', this.link);
        this._elementImage.setAttribute('alt', `Фотография места с названием '${this.text}'.`);
        
        this._elementImage.addEventListener('click', () => this._handleShowImg(this));
        this._buttonDeleteCard.addEventListener('click', this._handleElementRemove);
        this._like.addEventListener('click', this._handleElementLikeActive);

        return this._element;
    }
}