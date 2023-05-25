import "./styles/index.css";
import {Card} from "../scripts/card.js";
import {
    profileName,
    profileOcupation,
    buttonEdit,
    buttonAdd
} from "../scripts/utils.js";
import FormValidator from "../scripts/formValidator.js";
const initialCards = [
    {
        name: "Valle de Yosemite",
        src: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        src: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        src: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        src: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
        name: "Parque Nacional de la Vanoise",
        src: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        src: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
];

import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";


const inputName = document.querySelector('#name')
const inputAbout = document.querySelector('#about')
const inputTitle = document.querySelector('#title');
const inputSrc = document.querySelector('#link');


const modalCard = new PopupWithImage(".modal__popup-img");
modalCard.setEventListeners()

const createCard = (data) => {
    const elementCard = new Card({data,
        handleCardClick: ({name, src}) => {
            modalCard.open({name, src})
        } });
        return elementCard._generateCard();
}

const elementsGrid = new Section({
    items: initialCards,
    renderer : (cardItem) => {
        const elementCard = createCard(cardItem)
        elementsGrid.appendItem(elementCard);
    },
}, '.elements')
elementsGrid.renderer();

const addNewCard = () => {
    const elementCard = createCard({
        name: inputTitle.value,
        src: inputSrc.value
    });
    elementsGrid.prependItem(elementCard)
    createPopupAdd.close();
}

const createPopupAdd = new PopupWithForm("#popup-place", addNewCard);
createPopupAdd.setEventListeners();

buttonAdd.addEventListener("click", () => {
    createPopupAdd.open()
})

function handleProfileFormSubmit(evt) {
    profileName.textContent = inputName.value;
    profileOcupation.textContent =inputAbout.value;
    editPopup.close();
    console.log("aqui")
}

const editPopup = new PopupWithForm("#popup-profile", handleProfileFormSubmit);
editPopup.setEventListeners();

buttonEdit.addEventListener("click", () => {
    editPopup.open();
})

const userProfile = new UserInfo({
    userName: profileName,
    userJob: profileOcupation,
})
userProfile.setUserInfo({username:"Maricarmen", userjob:"Developer"})

const settingElement = {
    inputSelector: ".popup__text",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    inputErrorClass: "popup__text_type_error",
    errorClass: "popup__input-error_active",
};

(function init() {
    const formList = Array.from(
        document.querySelectorAll(".popup")
    );

    formList.forEach((formElement) => {
        const validatorForm = new FormValidator(settingElement, formElement);
        validatorForm.enableValidation();
    });
})();
