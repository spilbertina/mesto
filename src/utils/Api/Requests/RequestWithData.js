import { Request } from "./Request.js";

export class RequestWithData extends Request {
    constructor(method, baseUrl, login, token) {
        super(method, baseUrl, login, token);
        this._settings.headers['Content-Type'] = 'application/json';
    }

    query(path, data, callBack) {
        this._settings.body = JSON.stringify(data);
        this._query(this._settings, path, callBack);
    }
}