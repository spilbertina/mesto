import { RequestWithData } from "./RequestWithData.js";

export class Put extends RequestWithData {
    constructor(baseUrl, login, token) {
        super('PUT', baseUrl, login, token);
    }

    query(path, callBack) {
        this._query(this._settings, path, callBack);
    }
}