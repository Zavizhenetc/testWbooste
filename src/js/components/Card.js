export default class Card {
  constructor(data, template, openPopup) {
    this.template = template;
    this.title = data.name;
    this.price = data.price;
    this.img = data.img
    this.openPopup = openPopup
  }
  createCard() {
    this.container = this.template.cloneNode(true);
    this.btn = this.template.querySelector('.button');
    this.container.querySelector('.card-item__img').setAttribute ('src', this.img);
    this.container.querySelector('.card-item__title').textContent = this.title;
    this.container.querySelector('.card-item__price').textContent = `${this.price} руб.`;
    this.setEventListeners()
    return this.container;
  }
  open=()=> {
    this.openPopup();
  }


  setEventListeners (){
    this.container.querySelector('.button').addEventListener('click', this.open);
  }

}


