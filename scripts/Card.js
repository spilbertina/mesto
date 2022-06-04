export class Card {
    constructor(templateSelector, settings, handler) {
        this.templateSelector = templateSelector;
        this.text = settings.name;
        this.link = settings.link;
        this._isLike = false;
        this._popupOpenHandler = handler;
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
        this._element =
            document.querySelector(this.templateSelector)
                .content
                .cloneNode(true);

        const elementTitle = this._element.querySelector('.element__title');
        elementTitle.textContent = this.text;

        const elementImage = this._element.querySelector('.element__image');
        elementImage.setAttribute('src', this.link);
        elementImage.setAttribute('alt', `Фотография места с названием '${this.text}'.`);
        
        elementImage.addEventListener('click', () => this._handleShowImg(this));

        const buttonDeleteCard = this._element.querySelector('.element__trash')
        buttonDeleteCard.addEventListener('click', this._handleElementRemove);

        const like = this._element.querySelector('.element__like');
        like.addEventListener('click', this._handleElementLikeActive);

        return this._element;
    }
}