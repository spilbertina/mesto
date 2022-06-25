import { RequestWithData } from "./RequestWithData.js";

export class Delete extends RequestWithData {
    constructor(baseUrl, login, token) {
        super('DELETE', baseUrl, login, token);
    }

    query(path, callBack) {
        this._query(this._settings, path, callBack);
    }
}