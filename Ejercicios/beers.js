/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y su precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
  { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
  { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
  { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'Apaaa' },
  { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
  { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
  { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
  { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
];

// 1.
function getBeersWithPrice() {
  let beersWithPrice = [];
  beers.forEach(beer => {
    let { name } = beer;
    if (beer.name == 'Purple Iris') {
      beersWithPrice.push({ name, price: 320 })
    } else if (beer.abv < 5) {
      beersWithPrice.push({ name, price: 300 })
    } else if (beer.abv >= 5) {
      beersWithPrice.push({ name, price: 350 })
    }
  })
  return beersWithPrice;
}
console.log('Mostrando precios de las cervezas');
console.log(getBeersWithPrice());

// 2.
function insertFile_nameProperty() {
  let updatedBeers = []
  beers.forEach(beer => {
    let arr = beer.label.split('/');
    let file_name = arr[arr.length - 1];
    updatedBeers.push({ ...beer, file_name });
  })
  return updatedBeers;
}
console.log('\nInsertando propiedad "file_name" al array');
console.log(insertFile_nameProperty());

// 3.
function getBeersOrderedByTipe() {
  let beersOrderedByTipe = beers.sort((a, b) => a.type.localeCompare(b.type));
  return beersOrderedByTipe
}
console.log('\nOrdenando cervezas por tipo');
console.log(getBeersOrderedByTipe());
