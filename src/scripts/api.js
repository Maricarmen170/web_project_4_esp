export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _handleResponse(res) {
        if (!res.ok) {
            throw new Error(`Error:${res.status}`);
        }
        return res.json();
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    getCardList() {
        return fetch(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    handleEditProfile({name, about}) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about,
            }),
        }).then((res)=> {
            return this._handleResponse(res);
        });
    }

    addCard({title,src}) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: title,
                link: src,
            }),
        }).then((res)=> {
            return this._handleResponse(res);
        });
    }

    removeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`,{
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: this._headers,
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    editUserAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar,
            }),
        }).then((res)=> {
            return this._handleResponse(res);
        });
    }
}