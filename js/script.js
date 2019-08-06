import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import Collapse from './modules/collapse.js';
import Tab from './modules/tab.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
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

const collapse = new Collapse('[data-anime="collapse"] dt');
collapse.init()

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tab = new Tab('[data-tab="menu"] li', '[data-tab="content"] section');
tab.init();

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