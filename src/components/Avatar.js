export class Avatar {
    constructor(avatarSelector) {
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getAvatar(){
        return this._avatarElement.getAttribute('src')
    }

    setAvatar(link){
        this._avatarElement.setAttribute('src', link);    
    }
}