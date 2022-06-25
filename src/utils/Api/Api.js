import { Get } from "./Requests/Get.js";
import { Patch } from "./Requests/Patch.js";
import { Post } from "./Requests/Post.js";
import { Put } from './Requests/Put.js'
import { Delete } from './Requests/Delete.js'

export class Api {
    constructor(baseUrl, login, token) {
        this._baseUrl = baseUrl;
        this._login = login;
        this._token = token;

        this._get = new Get(this._baseUrl, this._login, this._token);
        this._patch = new Patch(this._baseUrl, this._login, this._token);
        this._post = new Post(this._baseUrl, this._login, this._token);
        this._put = new Put(this._baseUrl, this._login, this._token);
        this._delete = new Delete(this._baseUrl, this._login, this._token)
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

    addCard(data, callBack){
        this._post.query('cards', data, callBack);
    }

    updateAvatar(data, callBack){
        this._patch.query('users/me/avatar', data, callBack);
    }

    setLike(cardId, callBack){
        this._put.query(`cards/${cardId}/likes`, callBack);
    }

    deleteLike(cardId, callBack){
        this._delete.query(`cards/${cardId}/likes`, callBack);
    }

    deleteCard(cardId, callBack){
        this._delete.query(`cards/${cardId}`, callBack);
    }
}
