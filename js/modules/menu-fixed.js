import debounce from './debounce.js';

export default class HideMenu {
  constructor(menu) {
    this.menu = document.querySelector(menu);
    this.prevScrollpos = window.pageYOffset;

    this.hideMenu = debounce(this.hideMenu.bind(this), 50);
    this.smallMenu = debounce(this.smallMenu.bind(this), 50);
  }

  hideMenu() {
    this.currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > this.currentScrollPos) {
      this.menu.classList.remove('hide');
    } else {
      this.menu.classList.add('hide');
    }
    return this.prevScrollpos = this.currentScrollPos;
  }

  smallMenu() {
    this.currentScrollPos = window.pageYOffset;
    if (this.currentScrollPos > this.menu.getBoundingClientRect().top) {
      this.menu.classList.add('small');
    } else {
      this.menu.classList.remove('small');
    }
  }

  addHideMenuEvent() {
    window.addEventListener('scroll', this.hideMenu);
  }

  addSmallMenuEvent() {
    window.addEventListener('scroll', this.smallMenu);
  }

  init() {
    if(this.menu) {
      this.addSmallMenuEvent();
      this.addHideMenuEvent();
      return this;
    }
  }
}

// const menu = document.querySelector('[data-menu="smooth"]')
// console.log(menu)

// let prevScrollpos = window.pageYOffset;

// function hideMenu() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     menu.classList.remove('hide');
//   } else {
//     menu.classList.add('hide');
//   }
//   prevScrollpos = currentScrollPos;
// }

// window.addEventListener('scroll', hideMenu)
