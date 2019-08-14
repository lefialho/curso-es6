export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;
    this.activeClass = 'active';

    this.scrollAnimation = this.scrollAnimation.bind(this);
  }

  scrollAnimation() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.halfWindow) < 0;

      if (isSectionVisible)
        section.classList.add(this.activeClass);
      else if (section.classList.contains(this.activeClass))
        section.classList.remove(this.activeClass);
    });
  }

  init() {
    this.scrollAnimation();
    window.addEventListener('scroll', this.scrollAnimation);
  }
}