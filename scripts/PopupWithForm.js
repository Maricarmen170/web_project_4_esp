import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit){
        super(popupSelector);
        this._inputList = this._popupElement.querySelectorAll(".popup__text");
        this._formElement = this._popupElement.querySelector(".popup");
        this._buttonSubmit = this._popupElement.querySelector(".popup__button");
        this._handleFormSubmit = handleFormSubmit
    }

    close(){
        super.close();
        this._popupElement.reset()
    }

    _getInputValues(){
        this._formInputValues = {};
        this._inputList.forEach((input) => {
            this._formInputValues[input.name] = input.value;
        });
        return this._formInputValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
}