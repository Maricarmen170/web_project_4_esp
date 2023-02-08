const buttonEdit = document.querySelector('.profile__edit')
const formElement = document.querySelector('.popup')
const buttonClose = document.querySelector('.popup__close-icon')
const buttonSubmit = document.querySelector('.popup__button')
const inputName = document.querySelector('#name')
const inputAbout = document.querySelector('#about')
const profileName = document.querySelector('.profile__name')
const profileOcupation = document.querySelector('.profile__ocupation')

function openPopup () {
  formElement.classList.add('popup__opened')
}

function closePopup () {
  formElement.classList.remove('popup__opened')
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

formElement.addEventListener('submit',handleProfileFormSubmit())