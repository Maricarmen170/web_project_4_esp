import { openModalCard } from "./utils.js"
import {openModalTitle} from "./utils.js"

const modalPopupImage = document.querySelector('#cardPopup')
const modalPopupTitle = document.querySelector('#popupImgTitle')

export class Card {
    constructor(data) {
        this._name = data.name;
        this._src = data.src;
    }
    _getTemplateCard() {
        const cardElement = document
        .querySelector('#elements-template')
        .content
        .querySelector('.element')
        .cloneNode(true);
        return cardElement
    }
    generateCard() {
        this.element = this._getTemplateCard();

        this.cardImage = this.element.querySelector(".element__image");
        this.cardTitle = this.element.querySelector(".element__footer-text");
        this._setEventListeners();
        this.cardTitle.textContent = this._name;
        this.cardImage.src = this._src;

        return this.element
    }
    _setEventListeners() {
        this.element.querySelector(".icon-like").addEventListener("click", () => {
            this._handleLikeBtn();
        })
        this.element.querySelector(".icon-remove").addEventListener("click", () => {
            this._handleDeleteBtn();
        })
        this.element.querySelector(".element__image").addEventListener("click", () => {
            this._handleOpenExpandedImage();
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

    _handleOpenExpandedImage() {
        modalPopupTitle.textContent = this._name;
        modalPopupImage.src = this._src;

        openModalCard();
        openModalTitle();
    }
}