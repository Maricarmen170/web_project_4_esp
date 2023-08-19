import Popup from "./Popup.js";
export default class PopupDeleteImage extends Popup{
    constructor({popupSelector, handleFormSubmit, buttonSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._buttonSubmit = buttonSubmit;
    }

    close(){
        super.close();
        this.renderLoading(false);

    }

    setSubmitAction(action){
        this._handleFormSubmit = action;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._buttonSubmit.textContent = "Borrando..."
        }
        else {
            this._buttonSubmit.textContent = "Sí"
        }
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupElement.querySelector("#popup__trash_button").addEventListener("click", (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._handleFormSubmit();
        })
    }
}