import {POP_UP} from "../constans/constans";


export const openPopup = () => {
  POP_UP.classList.add('popup_is-opened');
};

export const closePopup=()=>{
  POP_UP.classList.remove("popup_is-opened");
}