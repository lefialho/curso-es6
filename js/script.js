import SmoothScroll from './modules/smooth-scroll.js';
import initCollapse from './modules/collapse.js';
import initTabNav from './modules/tab.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import initAccordion from './modules/accordion.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHours from './modules/hours.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initScrollAnimation from './modules/scroll-animation.js';

const options = {
  behavior: 'smooth',
  block: 'start'
}
const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]', options);
smoothScroll.init();


initCollapse();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDown();
initMenuMobile();
initHours();
initFetchAnimals();
initFetchBitcoin();
initScrollAnimation();

// import $ from 'jquery';
// import _ from 'lodash';

// $('nav').hide();

// const diference = _.difference(['Banana', 'Uva'], ['Banana', 'Morango']);
// console.log(diference);