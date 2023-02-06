let buttonEdit = document.querySelector('.profile__edit')
let formElement = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__close-icon')
let buttonSubmit = document.querySelector('.popup__button')
let inputName = document.querySelector('#name')
let inputAbout = document.querySelector('#about')
let profileName = document.querySelector('.profile__name')
let profileOcupation = document.querySelector('.profile__ocupation')

function openPopup () {
    formElement.classList.add('popup__opened')
}

function closePopup () {
    formElement.classList.remove('popup__opened')
}

buttonEdit.addEventListener('click',openPopup);
buttonClose.addEventListener('click',closePopup);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileOcupation.textContent =inputAbout.value;
}
buttonSubmit.addEventListener('click',handleProfileFormSubmit)

formElement.addEventListener('submit',handleProfileFormSubmit())




































/*let buttonEdit = document.querySelector(".profile__edit");
let buttonClose = document.querySelector(".popup__close-icon");
let formElement = document.querySelector(".popup");

let inputName = document.querySelector("#name");
let inputAbout = document.querySelector("#about");
let profileName = document.querySelector(".profile__name");
let profileOcupation = document.querySelector(".profile__ocupation");
let buttonSubmit = document.querySelector(".popup__button");

function openPopup () {
    formElement.classList.add("popup");
}
function closePopup () {
    formElement.classList.remove()
}
buttonEdit.addEventListener ("click",openPopup);
buttonClose.addEventListener ("click",closePopup);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileOcupation.textContent = inputAbout.value;
}
buttonSubmit.addEventListener("click",handleProfileFormSubmit);*/