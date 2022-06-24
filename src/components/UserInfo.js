export class UserInfo{
    constructor({nameSelector, jobSelector, avatarSelector}){
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
        //this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo(){
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent,
            //avatar: this._avatarElement.getAttribute('src')
        }
    }

    setUserInfo({name, job, link}){
        this._nameElement.textContent = name;
        this._jobElement.textContent = job; 
        //this._avatarElement.setAttribute('src', link);    
    }
}