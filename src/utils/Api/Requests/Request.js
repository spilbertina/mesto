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

    _checkResponse(res, path, callBack) {
        if (res.ok) {
            res.json().then(x => { callBack(x) })
        }
        else {
            console.log(`${this._settings.method} запрос по адресу ${this._makeUrl(path)} завершился ошибкой: ${res.status}`);
        }
    }

    _query(path, callBack) {
        fetch(this._makeUrl(path), this._settings)
            .then(res =>
                this._checkResponse(res, path, callBack)
            )
    }
}
