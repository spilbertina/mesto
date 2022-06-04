const popupImage = document.querySelector('.popup_image');
const popupImageFigureImage = popupImage.querySelector('.popup__figure-img');
const popupImageFigureText = popupImage.querySelector('.popup__figure-text');

export class Card {
    constructor(templateSelector, text, link) {
        this.templateSelector = templateSelector;
        this.text = text;
        this.link = link;
        this._isLike = false;
    }

    _handleShowImg(event) {
        popupImageFigureImage.setAttribute('src', event.link);
        popupImageFigureImage.setAttribute('alt', event.text);
        popupImageFigureText.textContent = event.text;
        this.test(popupImage);
    }

    _handleElementLikeActive(event) {
        event.target.classList.toggle('element__like_active');
    }

    test(event) {
        event.classList.toggle('popup_show');
        //document.addEventListener('keyup', handleClosePopupByEscape);

    }

    getElement() {
        const card =
            document.querySelector(this.templateSelector)
                .content
                .cloneNode(true);

        const elementTitle = card.querySelector('.element__title');
        elementTitle.textContent = this.text;

        const elementImage = card.querySelector('.element__image');
        elementImage.setAttribute('src', this.link);
        elementImage.setAttribute('alt', `Фотография места с названием '${this.text}'.`);
        elementImage.addEventListener('click', () => this._handleShowImg(this));

        //  const buttonDeleteCard = card.querySelector('.element__trash')
        //  buttonDeleteCard.addEventListener('click', handleElementRemove);

        const like = card.querySelector('.element__like');
        like.addEventListener('click', this._handleElementLikeActive);

        return card;
    }
}