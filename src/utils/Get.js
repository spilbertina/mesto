import { Request } from "./Request.js";

export class Get extends Request {
    constructor(baseUrl, login, token) {
        super('GET', baseUrl, login, token);
    }

    query(path, callBack) {
        this._query(this._settings, path, callBack);
    }
}