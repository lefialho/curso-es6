import {
  active
} from './config.js';

export default function initCollapse() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeCollapse() {
    console.log(this);
    accordionList.forEach((item) => {
      if (!this.classList.contains(active)) {
        item.classList.remove(active);
        item.nextElementSibling.classList.remove(active);
      }
    });

    this.classList.toggle(active);
    this.nextElementSibling.classList.toggle(active);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeCollapse)
    });
  }
}