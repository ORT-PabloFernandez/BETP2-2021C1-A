/**
 *  Una cárcel tiene varios prisioneros y varios caramelos para distribuirles.
    Su carcelero decide que la forma más justa de dividir las golosinas es sentar a los prisioneros alrededor de una mesa circular en 
    sillas numeradas secuencialmente.
    Se sacará un número de silla de un sombrero. Comenzando con el prisionero en esa silla, se entregará un caramelo a cada prisionero 
    secuencialmente alrededor de la mesa hasta que todos hayan sido distribuidos.
    Sin embargo, el carcelero está jugando una "pequeña" broma. El último dulce se parece a todos los demás, pero tiene veneno.
    Determine el número de silla ocupado por el prisionero que recibirá ese caramelo.
    Desarrolle la funcion saveThePrisoner que devuelva el numero de prisionero que recibe la ultima golosina.
 */

/**
 * 
 * @param {Number} n numero total de prisioneros
 * @param {Number} m numero total de golosinas
 * @param {Number} s el numero de silla por donde se empieza
 * @return el numero de prisionero que recibe la ultima golosina
 */
 const saveThePrisioner = function(n,m,s){

    let prisT = n;
    let goloT = m;
    let indice = s;
    let ultPris = -1;
 
    while(goloT>0){
 
       while(goloT>0 && indice<=prisT){
          if(goloT==1){ultPris = indice};
          goloT--;
          indice++;
       }
       indice = 1;
    }
    return ultPris;
 }
 
 // TEST
 console.log(saveThePrisioner(5,2,1) === 2);
 console.log(saveThePrisioner(7,19,2) === 6);
 console.log(saveThePrisioner(3,7,3) === 3);
 
