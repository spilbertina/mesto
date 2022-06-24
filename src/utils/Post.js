import { Request } from "./Request.js";

export class Post extends Request {
    constructor(baseUrl, login, token) {
        super('POST', baseUrl, login, token);
        this._settings.headers['Content-Type'] = 'application/json';
    }

    query(path, data, callBack) {
        this._settings.body = JSON.stringify(data);
        this._query(this._settings, path, callBack);
    }
}