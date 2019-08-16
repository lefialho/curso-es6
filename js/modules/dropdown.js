import outSideClick from './outside-click.js'

export default class DropDown {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';

    if(events === undefined) 
      this.events = ['touchstart', 'click'];
    else 
      this.events = events;

    this.activeDropDown = this.activeDropDown.bind(this);    
  }

  activeDropDown(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
    // console.log(event);
  }

  addDropDownEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropDown)
      });
    });
  }

  init() {
    if(this.dropdownMenus.length) {
      this.addDropDownEvent();
    }
    return this
  }
}