import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._title = this._popupElement.querySelector(".modal__popup-img-title");
        this._image = this._popupElement.querySelector(".modal__popup-img-background")
    }
    open({name, src}){
        super.open()
        this._title.textContent = name;
        this._image.src = src ;
        this._image.setAttribute("alt", name)
    }
}