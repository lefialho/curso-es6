import NumbersAnimation from './anima-numbers.js';

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`
    return div
  }
  
  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();
      const gridNumbers = document.querySelector('.numbers-grid');

      animalsJson.forEach((animal) => {
        const animalDiv = createAnimal(animal);
        gridNumbers.appendChild(animalDiv)
      });
      const numbersAnimation = new NumbersAnimation('[data-number]', '.numbers', 'active');
      // console.log(NumbersAnimation.incrementNumbers(document.querySelector('.numeral')))
      numbersAnimation.init();
      
    } catch (error) {
      const errorMessage = 'Problemas na configuração do fetch'
      console.log(errorMessage)
    }
  }
  fetchAnimals('./animalsapi.json');
}