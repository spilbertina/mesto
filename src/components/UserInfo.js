export class UserInfo {
    constructor({ id, nameSelector, jobSelector, avatarSelector }) {
        this._id = id;
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            id: this._id,
            name: this._nameElement.textContent,
            job: this._jobElement.textContent,
            avatar: this._avatarElement.getAttribute('src')
        }
    }

    setUserInfo({ id, name, job, avatar }) {
        this._id = id;
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
        this._avatarElement.setAttribute('src', avatar);  
    }
}