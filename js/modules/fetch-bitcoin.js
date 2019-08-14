export default function initFetchBitcoin() {
  console.log('uou!')
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcPrice = document.querySelector('.btc-price');
    btcPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    // console.log(bitcoin.BRL.sell)
  }).catch(error => {
    error = 'Problemas na configuração do fetch';
    console.log(Error(error));
  })
}



// async function fetchAnimals(url) {
//   const animalsResponse = await fetch(url);
//   const animalsJson = await animalsResponse.json();

//  console.log(animalsJson.BRL.sell);
// }

// fetchAnimals('https://blockchain.info/ticker')