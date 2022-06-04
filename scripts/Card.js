export class Card{
    constructor(templateSelector, text, link){
        this.templateSelector = templateSelector;
        this.text = text;
        this.link = link;
    }

    getElement(){
        const card = 
            document.querySelector(this.templateSelector)
            .content
            .cloneNode(true);

        const elementTitle = card.querySelector('.element__title');
        elementTitle.textContent = this.text;

        const elementImage = card.querySelector('.element__image');
        elementImage.setAttribute('src', this.link);
        elementImage.setAttribute('alt', `Фотография места с названием '${this.text}'.`);
     //   elementImage.addEventListener('click', handleShowImg);

      //  const buttonDeleteCard = card.querySelector('.element__trash')
      //  buttonDeleteCard.addEventListener('click', handleElementRemove);

      //  const like = card.querySelector('.element__like');
      //  like.addEventListener('click', handleElementLikeActive);

        return card;
    }
}