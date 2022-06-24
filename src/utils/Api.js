import { Get } from "./Get.js";
import { Patch } from "./Patch.js";
import { Post } from "./Post.js";

export class Api {
    constructor(baseUrl, login, token) {
        this._baseUrl = baseUrl;
        this._login = login;
        this._token = token;

        this._get = new Get(this._baseUrl, this._login, this._token);
        this._patch = new Patch(this._baseUrl, this._login, this._token);
        this._post = new Post(this._baseUrl, this._login, this._token);
    }

    getInitialCards(callBack) {
        this._get.query('cards', callBack);
    }

    getUserInfo(callBack) {
        this._get.query('users/me', callBack);
    }

    updateUserInfo(data, callBack) {
        this._patch.query('users/me', data, callBack);
    }

    testPost(data, callBack){
        this._post.query('cards', data, callBack);
    }
}

