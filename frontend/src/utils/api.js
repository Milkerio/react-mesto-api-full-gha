import {apiSettings} from './utils.js';
class Api{
    constructor(options){
        this._url = options.url;
        this._headers = options.headers;
    }

    /* проверка на ошибки */
    _checkError(res) {
        if(res.ok){
            return res.json();
        }
        return Promise.reject(res.status);
    }
    /* получаем карточки */ 
    getInitialCards(){
        return fetch(`${this._url}/cards`, {
            credentials: "include",
            headers: this._headers,
        })
        .then(res => this._checkError(res))
    }
    /* добавляем новую карточку */
    addNewCard(data){
        return fetch(`${this._url}/cards`, {
            credentials: "include",
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(res => this._checkError(res))
    }
    /* удаление карточки */ 
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
          credentials: "include",
          method: 'DELETE',
          headers: this._headers,
        })
        .then(res => this._checkError(res))
    }
    getUserInfo(){
        return fetch(`${this._url}/users/me`, {
            credentials: "include",
            headers: this._headers,
        })
        .then(res => this._checkError(res))
    }
    setUserInfo(data){
        return fetch(`${this._url}/users/me`, {
            credentials: "include",
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(res => this._checkError(res))
    }
    setUserAvatar(data){
        return fetch(`${this._url}/users/me/avatar`, {
            credentials: "include",
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        .then(res => this._checkError(res))
    }
    changeLikeCardStatus(cardId, isLiked){
        if(isLiked){
            return fetch(`${this._url}/cards/${cardId}/likes`, {
                credentials: "include",
                method: 'DELETE',
                headers: this._headers,
            })
            .then(res => this._checkError(res))
        }
        else{
            return fetch(`${this._url}/cards/${cardId}/likes`, {
                credentials: "include",
                method: 'PUT',
                headers: this._headers,
            })
            .then(res => this._checkError(res))
        }
    }
}
export const api = new Api(apiSettings);