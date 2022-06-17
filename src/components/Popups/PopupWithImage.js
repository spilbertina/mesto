import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selectorName) {
        super(selectorName);
        this._image = this._popup.querySelector('.popup__figure-img');
        this._imageName = this._popup.querySelector('.popup__figure-text');
    }

    open(imageSrc, imageName){
        this._image.setAttribute('src', imageSrc);
        this._image.setAttribute('alt', imageName);
        this._imageName.textContent = imageName;
        super.open();
    }
}