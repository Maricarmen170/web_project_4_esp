export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open(){
        this._popupElement.classList.add('popup__opened');
        document.addEventListener("keydown", this._handleEscClose);

    }

    close(){
        this._popupElement.classList.remove('popup__opened');
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(evt){
        if(evt.key === "Escape"){
            this.close();
        }
    }

    _closeOnClick(evt){
        return (
            evt.target.classList.contains('popup__opened') ||
            evt.target.classList.contains('modal__popup-img-close')
        )
    }
    
    _handleCloseButton(evt){
        const button =evt.target.classList.contains('popup__profile-close-icon') ||
        evt.target.classList.contains('popup__close-icon')
        if (button)this.close()
    }
    setEventListeners() {
        this._popupElement.addEventListener("click", (evt) => {
            if (this._closeOnClick(evt)){
                this.close();
            }
        });

        this._popupElement.addEventListener("click", (evt) => {
            this._handleCloseButton(evt)
        });
    }
}