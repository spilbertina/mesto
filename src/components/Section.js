export class Section{
    constructor(selector, renderer){
        this._section = document.querySelector(selector);
        this._renderer = renderer;
    }

    addItem(element){
        this._section.prepend(element);
    }

    renderContent(items){
        items.forEach(item => {
            this._renderer(item);
        });
    }
}