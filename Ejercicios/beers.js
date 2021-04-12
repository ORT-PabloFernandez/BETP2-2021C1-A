/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
  ];

  // Punto 1
  const MIN_ABV_PRICE = 300;
  const MAX_ABV_PRICE = 350;
  const BEER_SALE_PRICE = 320;
  const BEER_SALE_NAME = 'Purple Iris';

  function addPriceToBeers(arrayBeers) {
    const newArrayBeersWithPrice = arrayBeers.map(beer => {
      beer.name === BEER_SALE_NAME ? beer.price = BEER_SALE_PRICE : beer.abv >= 5.0 ? beer.price = MAX_ABV_PRICE : beer.price = MIN_ABV_PRICE
    })
    return newArrayBeersWithPrice;
  }

  addPriceToBeers(beers);

  
  // Punto 2
  function insertFileNamePropertyOnBeers(arrayBeers) {
    arrayBeers.forEach(beer => {
      beer.fileName = beer.label.split('/').pop();
    })
  }

  insertFileNamePropertyOnBeers(beers);


  // Punto 3
function orderBeersByType(arrayBeers) {
  return arrayBeers.sort((a,b) => a.type.localeCompare(b.type));
}

//orderBeersByType(beers);
//console.log(beers);
  
console.log(orderBeersByType(beers));