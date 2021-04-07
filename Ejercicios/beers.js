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

  //EJER1
  const PRECIO_ALTO = 350;
  const PRECIO_BAJO = 300;
  const PRECIO_OFERTA = 320;
  const NOMBRE_OFERTA = 'Purple Iris';
  
  
function getPrecio() {
     // beers.filter(x => x.abv >= 5.0)
     // .map(k => {Nombre: k.name, abv: k.abv, label: k.label, type: k.type, Precio: PRECIO_ALTO});
     let list = beers.filter(x => x.abv < 5.0 && x.name != NOMBRE_OFERTA)
                     .map(k => ({Precio: PRECIO_BAJO, ...k}));

     let list2 = beers.filter(x => x.abv >= 5.0 && x.name != NOMBRE_OFERTA)
                      .map(k => ({Precio: PRECIO_ALTO, ...k}));

     let beerOferta = beers.filter(n => n.name == NOMBRE_OFERTA)
                            .map((beer => ({Precio: PRECIO_OFERTA, ...beer})));

     list.push(...list2, beerOferta)

  return list
          // beers.fill({...beers.filter(x => x.abv >= 5.0), Precio: PRECIO_ALTO})
               
};

  console.log(getPrecio());

//EJER2

function aggFileName() {

    return beers.map(beer => ({ ...beer, file_name: (beer.label.split('https://s3.amazonaws.com/brewerydbapi/beer/')[1].split(', type')[0])}));
}

  console.log(aggFileName());






//EJER 3
//mostrar Tipo
    function ordenTipo(typeB) {
        return beers.find(k => k.type == typeB)
    }

    console.log(ordenTipo('IPA'));
    
    //Ordenar alfabeticamente por tipo

    function compare( a, b ) {
      if ( a.type < b.type ){
        return -1;
      }
      if ( a.type > b.type ){
        return 1;
      }
      return 0;
    }
      
   console.log(beers.sort( compare ));