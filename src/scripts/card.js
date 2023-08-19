export class Card {
    constructor({data, modalCard, handleSubmitLike,handleDeleteCard, userId}){
        this._name = data.name;
        this._src = data.link;
        this._modalCard = modalCard;
        this._likes = data.likes;
        this._owner = data.owner;
        this._id = data._id;
        this._handleSubmitLike = handleSubmitLike;
        this._handleDeleteCard = handleDeleteCard;
        this._userId = userId;
        this._numberLikes = this._likes.length

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
        this.cardNumber = this.element.querySelector(".icon-like_number");
        this._setEventListeners();
        this.cardTitle.textContent = this._name;
        this.cardImage.src = this._src;
        this.cardNumber.textContent = this._numberLikes ? this._numberLikes : "0"
        return this.element
    }
    _handleCardClick({name,src}) {
        this._modalCard.open({name,src})
    };
    _setEventListeners() {
        this.element.querySelector(".icon-like").addEventListener("click", () => {
            this._handleLikeBtn();
        })
        
        this.element.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick({name: this._name, src: this._src});
        })
        this.element.querySelector("#likeButton").addEventListener("click", () => {
            const isLiked = this._likes.some(
                (like) => like._id === this._userId
            );
            console.log(isLiked)
            this._handleSubmitLike(isLiked)
        })
        this.element.querySelector("#trashButton").addEventListener("click",() => {
            this._handleDeleteCard({id:this._id});
        })
        if(this._owner._id !== this._userId){
            this.element.querySelector("#trashButton").remove()
        }
    }

    _handleLikeBtn () {
        this.element
        .querySelector(".icon-like")
        .classList.toggle("icon-like_active");
    }
    
    _handleDeleteBtn () {
        this.element.remove();
    }

    updateLikes (likes) {
        this._likes = likes;
        this.cardNumber.textContent = this._likes.length;
        return this._likes;
    }

    //handleSubmitLike
    addheart () {
        //pintarlo de negro
        this.element.querySelector("#likeButton").classList.add("icon-like_active");
        //this.cardNumber.textContent = this._likes.length;
    }
    removeheart(){
        //pintarlo de blanco
        this.element.querySelector("#likeButton").classList.remove("icon-like_active");
        //this.cardNumber.textContent = this._likes.length;
    }
}