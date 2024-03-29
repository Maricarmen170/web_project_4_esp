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

    _fetch(url, method, body) {
        return fetch(url, {
            method,
            headers: this._headers,
            body: body ? JSON.stringify(body) : undefined,
        }).then(res => this._handleResponse(res));
    }


    getUserInfo() {
        return this._fetch(`${this._baseUrl}/users/me`, 'GET');
    }


    getCardList() {
        return this._fetch(`${this._baseUrl}/cards`, 'GET');
    }


    handleEditProfile({ name, about }) {
        return this._fetch(`${this._baseUrl}/users/me`, 'PATCH', {
            name,
            about,
        });
    }


    addCard({ title,src }) {
        return this._fetch(`${this._baseUrl}/cards`, 'POST', {
            name: title,
            link :src,
        });
    }


    removeCard(cardId) {
        return this._fetch(`${this._baseUrl}/cards/${cardId}`, 'DELETE');
    }


    addLike(cardId) {
        return this._fetch(`${this._baseUrl}/cards/likes/${cardId}`, 'PUT');
    }



    removeLike(cardId) {
        return this._fetch(`${this._baseUrl}/cards/likes/${cardId}`, 'DELETE');
    }

    
    editUserAvatar(avatar) {
        return this._fetch(`${this._baseUrl}/users/me/avatar`, 'PATCH', {
            avatar,
        });
    }
}