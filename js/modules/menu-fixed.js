export default class HideMenu {
  constructor(menu) {
    this.menu = document.querySelector(menu);
    this.prevScrollpos = window.pageYOffset;

    this.hideMenu = this.hideMenu.bind(this);
    this.smallMenu = this.smallMenu.bind(this);
  }

  hideMenu() {
    console.log()
    this.currentScrollPos = window.pageYOffset;

    if (this.prevScrollpos > this.currentScrollPos) {
      this.menu.classList.remove('hide');
    } else {
      this.menu.classList.add('hide');
      // console.log(this.menu.style.top = -this.menu.clientHeight)
    }
    return this.prevScrollpos = this.currentScrollPos;
  }

  smallMenu() {
    this.currentScrollPos = window.pageYOffset;
    if (this.currentScrollPos > 0) {
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
