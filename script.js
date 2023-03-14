import { initialCards } from "./constants.js"
const buttonEdit = document.querySelector('.profile__edit')
const formElement = document.querySelector('.popup')
const buttonClose = document.querySelector('#close-icon-popup')
const buttonSubmit = document.querySelector('.popup__button')
const inputName = document.querySelector('#name')
const inputAbout = document.querySelector('#about')
const profileName = document.querySelector('.profile__name')
const profileOcupation = document.querySelector('.profile__ocupation')
const buttonAdd = document.querySelector('.profile__add-button')
const formAdd = document.querySelector('.profile__popup-add')
const buttonX = document.querySelector('#close-icon-cards')
const inputTitle = document.querySelector('#title')
const inputSrc = document.querySelector('#src')

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
buttonEdit.addEventListener('click',openPopup);
buttonClose.addEventListener('click',closePopup);
buttonSubmit.addEventListener('click',savePopup);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOcupation.textContent =inputAbout.value;
}
buttonSubmit.addEventListener('click',handleProfileFormSubmit)

formElement.addEventListener('submit',handleProfileFormSubmit)


function openPopupAdd(){
  formAdd.classList.add('profile__popup-opened')
  document.addEventListener("keyup", handleEscUp);
}
function closePopupAdd(){
  formAdd.classList.remove('profile__popup-opened')
  document.removeEventListener("keyup", handleEscUp);
}
buttonAdd.addEventListener('click',openPopupAdd);
buttonX.addEventListener('click',closePopupAdd);

//renderizar las primeras tarjetas
const elementsGrid = document.querySelector('.elements');
const cardTemplateContent = document.querySelector ('#elements-template').content;

//function expandElement (
  const modalPopupCard = document.querySelector('.modal__popup-img')
  const modalPopupImage = document.querySelector('#cardPopup')
  const modalPopupClose = document.querySelector('#closeImgBtn')
  const modalPopupTitle = document.querySelector('#popupImgTitle')

  function openModalCard(){
    modalPopupCard.classList.add('modal__popup-img-opened');
    document.addEventListener("keyup", handleEscUp);
  }
  function closeModalCard(){
    modalPopupCard.classList.remove('modal__popup-img-opened')
    document.removeEventListener("keyup", handleEscUp);
  }
  modalPopupClose.addEventListener('click',closeModalCard)

  function openModalTitle(){
    modalPopupTitle.classList.add('modal__popup-img-title-opened')
  }

function createCardElement (link, name) {
  const cardElement = cardTemplateContent.cloneNode(true)
  const element = cardElement.querySelector('.element')
  const elementImage = cardElement.querySelector('.element__image')
  const elementText = cardElement.querySelector('.element__footer-text')
  const trashCan = cardElement.querySelector('.icon-remove')
  elementImage.src = link;
  elementImage.alt = name;

  trashCan.addEventListener('click',function(){
    element.remove()
  })
  elementImage.addEventListener('click',function(){
    openModalCard()
    modalPopupImage.src = link;
  })
  elementImage.addEventListener('click',function(){
    openModalTitle()
    modalPopupTitle.alt = name;
  })
  elementText.textContent = name;
  return cardElement;
}

function renderInitialCards () {
  for (let card of initialCards) {
    console.log(card)
    const cardElement = createCardElement(card.src, card.name)
    elementsGrid.append(cardElement);
  }
}
renderInitialCards();
function addNewCard(evt) {
evt.preventDefault()
const cardElement = createCardElement(inputSrc.value,inputTitle.value)
elementsGrid.prepend(cardElement);
togglePopup()
}
formAdd.addEventListener('submit',addNewCard)

//Ejecucion de codigo al presionar una tecla
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
formAdd.addEventListener('click',closeModalOnClick)
formElement.addEventListener('click',closeModalOnClick)
modalPopupCard.addEventListener('click',closeModalOnClick)








