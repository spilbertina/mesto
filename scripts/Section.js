export class Section{
    constructor(settings, selector){
        this._selector = selector;
        this._items = settings.items;
        this._renderer = settings.renderer;
    }

    addItem(item){
        this._items.push(item);
    }

    renderContent(){
        
    }
}