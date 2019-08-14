import NumbersAnimation from './anima-numbers.js';

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3>
                     <span data-number>${animal.total}</span>`
    return div
  }

  const gridNumbers = document.querySelector(target);

  function fillAnimals(animal) {
    const animalDiv = createAnimal(animal);
    gridNumbers.appendChild(animalDiv)
  }

  function animateNumbers() {
    const numbersAnimation = new NumbersAnimation('[data-number]', '.numbers', 'active');
    // console.log(NumbersAnimation.incrementNumbers(document.querySelector('.numeral')))
    numbersAnimation.init();
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();

      animalsJson.forEach(animal => fillAnimals(animal));
      animateNumbers();

    } catch (error) {
      const errorMessage = 'Problemas na configuração do fetch'
      console.log(errorMessage)
    }
  }
  return createAnimals();
}