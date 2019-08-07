export default class Collapse {
  constructor(list) {
    this.collapseList = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  collapse(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addCollapseEvent() {
    this.collapseList.forEach((item) => {
      item.addEventListener('click', () => this.collapse(item));
    });
  }

  init() {
    if (this.collapseList.length) {
      this.collapse(this.collapseList[0]);
      this.addCollapseEvent();
    }
    return this;
  }
}