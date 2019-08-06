export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  accordion(item) {
    if (!item.classList.contains(this.activeClass)) {
      this.accordionList.forEach(item => {
        item.classList.remove(this.activeClass);
        item.nextElementSibling.classList.remove(this.activeClass);
      });
    }

    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.accordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.accordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}