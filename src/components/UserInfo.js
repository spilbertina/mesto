export class UserInfo {
    constructor({ id, nameSelector, jobSelector }) {
        this._id = id;
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return {
            id: this._id,
            name: this._nameElement.textContent,
            job: this._jobElement.textContent,
        }
    }

    setUserInfo({ id, name, job }) {
        this._id = id;
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
    }
}