
import {ERROR_MESAGE} from '../constans/constans.js';

export default class Validation {
  constructor(form, btn) {
    this.form = form;
    this.button = btn;
    this.isFieldValid = this.isFieldValid.bind(this);
  }

  _checkInputValidity(input) {
    input.setCustomValidity('');
    if (input.validity.valueMissing) {
      input.setCustomValidity(ERROR_MESAGE.errorEmpty);
      return false;
    }
    if (input.validity.typeMismatch && input.type === "userPhone") {
      input.setCustomValidity(ERROR_MESAGE.errorPhone);
      return false;
    }
    if (input.validity.typeMismatch && input.type === "userEmail") {
      input.setCustomValidity(ERROR_MESAGE.errorEmail);
      return false;
    }
   
    return input.checkValidity();
  }

  isFieldValid(event) {
    event.preventDefault();
    const input = event.target;
    const currentForm = event.currentTarget;

    const errorElem = input.parentNode.querySelector(`#${input.id}-error`);
    const valid = this._checkInputValidity(input);
    errorElem.textContent = input.validationMessage;
    const isFormValid = currentForm.checkValidity();
    this.setSubmitButtonState(isFormValid);
  
    return valid;
  }



  resetError() {
    const [...errors] = this.form.querySelectorAll('span.error');
    errors.forEach((error) => {
      error.textContent = '';
    });
  }

  setSubmitButtonState(state) {

    if (state) {
      this.button.classList.remove('button_disabled');
    } else {
      this.button.classList.add('button_disabled');
     
    }
  }
 
 
  setEventListenersValidation(){
    this.form.addEventListener('input', this.isFieldValid);
  }
}