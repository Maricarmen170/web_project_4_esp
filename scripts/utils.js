import {Card} from "./cards.js"

/*EDIT PROFILE*/
const formElement = document.querySelector('#popup-profile')
const buttonEdit = document.querySelector('.profile__edit')
const buttonClose = document.querySelector('#close-icon-popup')
const buttonSubmit = document.querySelector('#submit-profile')
const profileName = document.querySelector('.profile__name')
const profileOcupation = document.querySelector('.profile__ocupation')
const inputName = document.querySelector('#name')
const inputAbout = document.querySelector('#about')

function openPopup(){
    formElement.classList.add('popup__opened')
    document.addEventListener("keyup", handleEscUp);
}
function closePopup(){
    formElement.classList.remove('popup__opened')
    document.removeEventListener("keyup", handleEscUp);
}
function savePopup () {
    formElement.classList.remove('popup__opened')
}
/*buttonEdit.addEventListener('click',openPopup);
buttonClose.addEventListener('click',closePopup);
buttonSubmit.addEventListener('click',savePopup);*/

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileOcupation.textContent =inputAbout.value;
}
/*buttonSubmit.addEventListener('click',handleProfileFormSubmit)

formElement.addEventListener('submit',handleProfileFormSubmit)*/

/*ADD POPUP PLACE */
const formAdd = document.querySelector('#popup-place')
const buttonAdd = document.querySelector('.profile__add-button')
const buttonX = document.querySelector('#close-icon-cards')
const buttonCreateCard = document.querySelector('#submit-place')

function openPopupAdd(){
    formAdd.classList.add('popup__opened')
    document.addEventListener("keyup", handleEscUp);
}
function closePopupAdd(){
    formAdd.classList.remove('popup__opened')
    document.removeEventListener("keyup", handleEscUp);
}
/*buttonAdd.addEventListener('click',openPopupAdd);
buttonX.addEventListener('click',closePopupAdd);*/

function addNewCard(evt) {
    const elementsGrid = document.querySelector('.elements');
    evt.preventDefault()
    const inputTitle = document.querySelector('#title');
    const inputSrc = document.querySelector('#link');
    const data = { name: inputSrc.value, src: inputTitle.value };
    const cardElement = new Card(data).generateCard();
    elementsGrid.prepend(cardElement);
    openPopupAdd();
    closePopupAdd();
    resetForm();
}
function resetForm() {
    const inputTitle = document.querySelector('#title');
    const inputSrc = document.querySelector('#link');
    inputTitle.value = " ";
    inputSrc.value = " ";
}
/*buttonCreateCard.addEventListener('click',addNewCard);
formAdd.addEventListener('submit',addNewCard);*/

/*MODAL*/
const modalPopupCard = document.querySelector('.modal__popup-img')
const modalPopupClose = document.querySelector('#closeImgBtn')
const modalPopupTitle = document.querySelector('#popupImgTitle')

export function openModalCard(){
    modalPopupCard.classList.add('modal__popup-img-opened');
    document.addEventListener("keyup", handleEscUp);
}
function closeModalCard(){
    modalPopupCard.classList.remove('modal__popup-img-opened')
    document.removeEventListener("keyup", handleEscUp);
}
/*modalPopupClose.addEventListener('click',closeModalCard)*/

export function openModalTitle(){
    modalPopupTitle.classList.add('modal__popup-img-title-opened')
}

/*EJECUCION DE CODIGO AL PRESIONAR UNA TECLA */

const isEscEvent = (evt) => {
    if (evt.key === "Escape") {
        closePopup();
        closePopupAdd();
        closeModalCard();
    }
};
const handleEscUp = (evt) => {
    evt.preventDefault();
    isEscEvent(evt);
};

const closeModalOnClick = (evt) => {
    evt.preventDefault()
    if (evt.target.classList.contains('popup__opened')) {
        closePopup();
    }
    if (evt.target.classList.contains('profile__popup-opened')) {
        closePopupAdd();
    }
    if (evt.target.classList.contains('modal__popup-img-background') || evt.target.classList.contains('modal__popup-img')) {
        closeModalCard();
    }
}

buttonEdit.addEventListener('click',openPopup);
buttonClose.addEventListener('click',closePopup);
buttonSubmit.addEventListener('click',savePopup);

buttonSubmit.addEventListener('click',handleProfileFormSubmit);

formElement.addEventListener('submit',handleProfileFormSubmit);

buttonAdd.addEventListener('click',openPopupAdd);
buttonX.addEventListener('click',closePopupAdd);

buttonCreateCard.addEventListener('click',addNewCard);
formAdd.addEventListener('submit',addNewCard);

modalPopupClose.addEventListener('click',closeModalCard);

formAdd.addEventListener('click',closeModalOnClick)
formElement.addEventListener('click',closeModalOnClick)
modalPopupCard.addEventListener('click',closeModalOnClick)