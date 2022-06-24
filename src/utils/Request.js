export class Request {
    constructor(method, baseUrl, login, token) {
        this._baseUrl = baseUrl;
        this._login = login;

        this._settings = {
            method: method,
            headers: { 
                authorization: token 
            }
        };
    }

    _makeUrl(path) {
        return `${this._baseUrl}/${this._login}/${path}`;
    }

    _query(settings, path, callBack){
        fetch(this._makeUrl(path), settings).then(res => {
            if (res.ok) {
                res.json().then(x => { callBack(x) });
            }
            //return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
}
