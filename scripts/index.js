import {FormValidator} from "./FormValidator.js"
import {Card} from "./cards.js"

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



function renderInitialCards () {
  for (const data of initialCards) {
    const elementsGrid = document.querySelector('.elements');

    const cardElement = new Card(data).generateCard();
    elementsGrid.append(cardElement);
  }
}
renderInitialCards();


//mensaje de error a los inputs
const settingElement = {
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_type_error",
  errorClass: "popup__input-error_active",
};

(function init() {
  const formList = Array.from(
    document.querySelectorAll(".popup__container")
  );

  formList.forEach((formElement) => {
    const validatorForm = new FormValidator(settingElement, formElement);
    validatorForm.enableValidation();
  });
})();










