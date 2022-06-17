export class Section{
    constructor(settings, selector){
        this._section = document.querySelector(selector);
        this._items = settings.items;
        this._renderer = settings.renderer;
    }

    addItem(element){
        this._section.prepend(element);
    }

    renderContent(){
        this._items.forEach(element => {
            this._renderer(element);
        });
    }
}