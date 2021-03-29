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

    let parAux = -1;
    let contador = 0;
    
    while(colorSocks.length > 1){
    
        let parBusc = -1;
        let hayPar = false;
        let indice = 0;
        parAux = colorSocks.shift();
    
        while(!hayPar && indice <= colorSocks.length){
    
            parBusc = colorSocks[indice];
            hayPar = parAux === parBusc;
    
            if(hayPar){
                colorSocks.splice(indice,1);
                contador++
            };        
            indice++;
        };
    };
    return contador;
    };
    
    // TESTS
    console.log(sockMerchant([1,2,1,2,1,3,2]) === 2);
    console.log(sockMerchant([10,20,20,10,10,30,50,10,20]) === 3);
