export default class NumbersAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementNumbers(number) {
    const total = +number.innerText;
    const increment = Math.round(total / 100);
    let counter = 0
    const timer = setInterval(() => {
      counter += increment;
      number.innerText = counter;
      if (counter > total) {
        number.innerText = total;
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }

  numbersAnimate() {
    this.numbers.forEach((number) => this.constructor.incrementNumbers(number));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.numbersAnimate();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, {attributes: true});
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}