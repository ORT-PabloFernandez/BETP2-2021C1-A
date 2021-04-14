/**
 * Dada un conjunto de medias debe encontrar la cantidad de pares por color. 
 * Se proporciona un array el cual contiene el codigo de color de las medias
 * Determinar el numero maximo de pares del mismo color que se puede formar
 *
 */

/**
 * 
 * @param {Array} colorSocks 
 * @return {Number} 
 */
const sockMerchant = function(colorSocks){
    // [10,10,10,10,20,20,20,30,50]
    // la estrategia es correr el indice
    // si ordenamos va los pares juntos
    let par=0;
    colorSocks.sort();
    for (let i = 0; i < colorSocks.length-1; i++) {
        if(colorSocks[i] === colorSocks[i+1]){
            par++;
            i++;
        }
    }
    
    return par;
}

// TESTS
console.log(sockMerchant([1,2,1,2,1,3,2]) === 2);
console.log(sockMerchant([10,20,20,10,10,30,50,10,20]) === 3);