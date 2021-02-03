
const CSL =(elem)=>{
  console.log(elem)
}



import Api from "./js/modules/Api";
import "./index.css";
import Card from './js/components/Card.js';
import CardList from './js/components/CardList.js';

import {CARD_LIST, FORM, FORM_BUTTON, POP_UP, POP_UP_CLOSE, TEMPLATE, URL_API} from './js/constans/constans'
import {closePopup, openPopup} from "./js/utils/utils";
import Validation from "./js/components/Validation";
const api = new Api(URL_API);
const CardsList = new CardList(CARD_LIST)
const validationForm = new Validation(FORM, FORM_BUTTON);

// рендерим
const renderCards = (arr) => {
  const cards = arr.map((data) => {
    return new Card(data, TEMPLATE, openPopup).createCard();
  });
  CardsList.render(cards);
}

const getApi = () => {
  api.getRes()
    .then((res) => {
        renderCards(res.product)
      }
    )
    .catch((err) => {
      console.log(`Ошибка ${err} `);
    });
};

getApi();


POP_UP_CLOSE.addEventListener('click', ()=>{
  closePopup();
});

validationForm.setEventListenersValidation();

FORM_BUTTON.addEventListener('click', () => {
  validationForm.resetError();
  validationForm.setSubmitButtonState(false);
});



