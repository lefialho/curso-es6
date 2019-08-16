import debounce from './debounce.js';

export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;
    this.activeClass = 'active';

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow)
      };
    });
    // console.log(this.distance)
  }
  
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset)
        section.element.classList.add(this.activeClass);
      else if (section.element.classList.contains(this.activeClass))
        section.element.classList.remove(this.activeClass);
      // console.log(section.element)
      // console.log('debounce');
    })
    // console.log(window.pageYOffset)
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      // this.scrollAnimation();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }

   // scrollAnimation() {
  //   this.sections.forEach((section) => {
  //     const sectionTop = section.getBoundingClientRect().top;
  //     const isSectionVisible = (sectionTop - this.halfWindow) < 0;
  //     if (isSectionVisible)
  //       section.classList.add(this.activeClass);
  //     else if (section.classList.contains(this.activeClass))
  //       section.classList.remove(this.activeClass);
  //   });
  // }
}