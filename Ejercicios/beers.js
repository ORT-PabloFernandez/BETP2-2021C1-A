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
  
   //primero
   const PROMO = 'Purple Iris';
   const PRECIO_BAJO = 300;
   const PRECIO_ALTO = 350;
   const PRECIO_PROMO = 320;
 
   function precioPorCriterio() {
     console.log("1. PRECIO POR GRADUACION ALCOHOLICA");
     let lista = beers.filter(beer => beer.abv < 5 && beer.name != PROMO).map(beer => ({
         ...beer,
         Precio: PRECIO_BAJO
       }))
       let lista1 = beers.filter(beer => beer.abv >= 5 && beer.name != PROMO).map(beer => ({
         ...beer,
         Precio: PRECIO_ALTO
       }))
     let lista2 = beers.filter(beer => beer.name == PROMO).map(beer => ({
       ...beer,
       Precio: PRECIO_PROMO
     }))
       let listaFinal = lista.concat(...lista1, ...lista2);
     return listaFinal;
   }
   console.log(precioPorCriterio());
 
   //segundo
 function insertarFileName() {
   console.log("2. INSERTAR FILE_NAME");
 let insert = beers.map(beer => ({...beer, 
   file_name: beer.label.split('/')[6]}))  
 return insert;
 }
 console.log(insertarFileName());
 
 
   //tercero
   function compare(a, b) {
     if ( a.type < b.type ){
       return -1;
     }
     if ( a.type > b.type ){
       return 1;
     }
     return 0;
   }
   console.log("3. ORDENADAS POR TIPO");
   console.log(beers.sort(compare));