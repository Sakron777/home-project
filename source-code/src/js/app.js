import * as flsFunctions from "./modules/functions.js";
import * as flsPopup from "./modules/popup.js";
import * as flsForm from "./modules/form.js";




flsFunctions.isWebp();
flsPopup.popupOne();
flsForm.formOne();




import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

  });



