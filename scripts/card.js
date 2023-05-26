export class Card {
    constructor({data, modalCard}){
        this._name = data.name;
        this._src = data.src;
        this._modalCard = modalCard;
    }
    _getTemplateCard() {
        const cardElement = document
        .querySelector('#elements-template')
        .content
        .querySelector('.element')
        .cloneNode(true);
        return cardElement
    }
    _generateCard() {
        this.element = this._getTemplateCard();

        this.cardImage = this.element.querySelector(".element__image");
        this.cardTitle = this.element.querySelector(".element__footer-text");
        this._setEventListeners();
        this.cardTitle.textContent = this._name;
        this.cardImage.src = this._src;

        return this.element
    }
    _handleCardClick({name,src}) {
        this.modalCard.open({name,src})
    };
    _setEventListeners() {
        this.element.querySelector(".icon-like").addEventListener("click", () => {
            this._handleLikeBtn();
        })
        this.element.querySelector(".icon-remove").addEventListener("click", () => {
            this._handleDeleteBtn();
        })
        this.element.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick({name: this._name, src: this._src});
        })
    }

    _handleLikeBtn () {
        this.element
        .querySelector(".icon-like")
        .classList.toggle("icon-like_active");
    }
    
    _handleDeleteBtn () {
        this.element.remove();
    }

}