import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import Collapse from './modules/collapse.js';
import Tab from './modules/tab.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDown from './modules/dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import Hours from './modules/hours.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnimation from './modules/scroll-animation.js';
import HideMenu from './modules/menu-fixed.js';
import fetchAnimals from './modules/fetch-animals.js';
import SlideNav from './/modules/slide.js';

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

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const hideMenu = new HideMenu('[data-menu="smooth"]');
hideMenu.init();

const scrollAnimation = new ScrollAnimation('[data-anime^="scroll"]');
scrollAnimation.init();

const dropdown = new DropDown('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', '[data-menu="item"]', '[data-bgblack]', 'active');
menuMobile.init();

const hours = new Hours('[data-weekend]', 'open');
hours.init();

fetchAnimals('animalsapi.json', '.numbers-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-price');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls')

// import $ from 'jquery';
// import _ from 'lodash';

// $('nav').hide();

// const diference = _.difference(['Banana', 'Uva'], ['Banana', 'Morango']);
// console.log(diference);