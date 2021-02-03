export {
  CARDS_DATA, TEMPLATE, CARD_LIST, URL_API, POP_UP, POP_UP_CLOSE, ERROR_MESAGE, FORM, FORM_BUTTON
};

const TEMPLATE = document.querySelector('.template').content;
const CARD_LIST = document.querySelector('.card-items');
const POP_UP = document.querySelector('.popup')
const POP_UP_CLOSE = document.querySelector(".popup__close");
const URL_API = NODE_ENV === 'production' ? require('./product.json') : '/src/js/constans/product.json';
const FORM = document.querySelector('.popup__form');
const FORM_BUTTON = document.querySelector('#popup-button');
const ERROR_MESAGE = {
  errorEmpty: 'Это обязательное поле',
  errorEmail: 'необходим e-mail в формате: email@gmail.com',
  errorPhone: 'необходим e-mail в формате: email@gmail.com',

};

const CARDS_DATA = [{
    "product":
      [
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "9900"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "9900"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "9900"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "9900"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "9900"
        },
        {
          "name": "Парикмахерское кресло «Норм» гидравлическое",
          "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
          "price": "9900"
        }
      ]
  }]
;
