export default function fetchBitcoin(url, target) {
  fetch(url)
  .then(response => response.json())
  .then(bitcoin => {
    const btcPrice = document.querySelector(target);
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