export default class MenuMobile {
  constructor(menuMobileButton, menuList, menuItem, bgBlack, active) {
    this.menuMobileButton = document.querySelector(menuMobileButton);
    this.menuList = document.querySelector(menuList);
    this.menuItem = document.querySelectorAll(menuItem);
    this.bgBlack = document.querySelector(bgBlack);
    this.activeClass = active;

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.menuMobileButton.classList.toggle(this.activeClass);
    this.menuList.classList.toggle(this.activeClass);
    this.bgBlack.classList.toggle(this.activeClass);
  }

  closeMenu() {
    this.bgBlack.classList.remove(this.activeClass);
    this.menuMobileButton.classList.remove(this.activeClass);
    this.menuList.classList.remove(this.activeClass);
  }

  addMenuMobileEvents() {
    this.menuMobileButton.addEventListener('click', this.openMenu)
    this.bgBlack.addEventListener('click', this.closeMenu)
    this.menuItem.forEach((item) => {
      item.addEventListener('click', this.closeMenu)
    })
  }

  init() {
    if (this.menuMobileButton && this.menuList && this.menuItem.length) {
      this.addMenuMobileEvents();
    }
    return this
  }
}