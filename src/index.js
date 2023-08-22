import "./styles/index.css";
import { Card } from "./scripts/card.js";
import {
  profileName,
  profileOcupation,
  buttonEdit,
  buttonAdd,
  profileAvatar,
  buttonEditAvatar,
  buttonDelete,
} from "./scripts/utils.js";
import FormValidator from "./scripts/formValidator.js";
import Section from "./scripts/Section.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
import Api from "./scripts/api.js";
import PopupDeleteImage from "./scripts/PopupDeleteImage.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_05",
  headers: {
    authorization: "fd85f7f0-dad9-471b-bab7-ebeb9d644109",
    "Content-Type": "application/json",
  },
});

/*instancia información del usuario "UserInfo"*/
const userProfile = new UserInfo({
   userName: profileName,
  userJob: profileOcupation,
  userAvatar: profileAvatar,
});

/*cargar la informacion del usuario desde el servidor*/
api.getUserInfo().then((res) => {
  userProfile.setUserInfo({
    username: res.name,
    userjob: res.about,
    useravatar: res.avatar,
    userId: res._id,
  });
});

const elementsGrid = new Section(
  {
    items: [],
    renderer: (cardItem) => {
      const elementCard = createCard(cardItem);
      elementsGrid.appendItem(elementCard);
    },
  },
  ".elements"
);
/*Cargar las tarjetas desde el servidor*/
api.getCardList().then((res) => {
  elementsGrid.setArray(res);
  elementsGrid.renderer();
});

const editPopup = new PopupWithForm("#popup-profile", handleProfileFormSubmit);
editPopup.setEventListeners();

const modalCard = new PopupWithImage(".modal__popup-img");
modalCard.setEventListeners();

const createCard = (data) => {
  const elementCard = new Card({
    data,
    modalCard,
    userId: userProfile._userId,
    handleSubmitLike: (isLiked) => {
      if (!isLiked) {
        api.addLike(data._id).then((res) => {
          elementCard.updateLikes(res.likes);
          elementCard.addheart();
        });
      } else {
        api.removeLike(data._id).then((res) => {
          elementCard.updateLikes(res.likes);
          elementCard.removeheart();
        });
      }
    },
    handleDeleteCard: ({ id }) => {
      deleteCardPopup.open();
      deleteCardPopup.setSubmitAction(() => {
        api.removeCard(id).then(() => {
          deleteCardPopup.close();
          elementCard._handleDeleteBtn();
        });
      });
    },
  });
  return elementCard._generateCard();
};
/*Borrar una tarjeta*/
const deleteCardPopup = new PopupDeleteImage({
  popupSelector: "#popup__trash",
  buttonSubmit: buttonDelete,
});

deleteCardPopup.setEventListeners();
/*Añadir una nueva tarjeta*/
const addNewCard = (data) => {
  api.addCard(data).then((res) => {
    const elementCard = createCard(res);
    elementsGrid.prependItem(elementCard);
    createPopupAdd.close();
  });
};

const createPopupAdd = new PopupWithForm("#popup-place", addNewCard);
createPopupAdd.setEventListeners();

buttonAdd.addEventListener("click", () => {
  createPopupAdd.open();
});

/*Editar foto de perfil*/
const editProfileAvatar = new PopupWithForm(
  "#profile__img-edit",
  handleEditAvatar
);
editProfileAvatar.setEventListeners();
buttonEditAvatar.addEventListener("click", () => {
  editProfileAvatar.open();
});

function handleEditAvatar(data) {
  api.editUserAvatar(data.src).then((res) => {
    userProfile.changeAvatar(res.avatar);
    editProfileAvatar.close();
  });
}

/*Editar el perfil*/
function handleProfileFormSubmit(data) {
  api.handleEditProfile(data).then((res) => {
    userProfile.setUserInfo({
      username: res.name,
      userjob: res.about,
      useravatar: res.avatar,
    });
    editPopup.close();
  });
}

buttonEdit.addEventListener("click", () => {
  editPopup.open();
});

const settingElement = {
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_type_error",
  errorClass: "popup__input-error_active",
};

(function init() {
  const formList = Array.from(document.querySelectorAll(".popup"));

  formList.forEach((formElement) => {
    const validatorForm = new FormValidator(settingElement, formElement);
    validatorForm.enableValidation();
  });
})();
