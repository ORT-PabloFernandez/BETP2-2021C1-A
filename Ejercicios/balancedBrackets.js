/**
 * Dado un string s que contiene solo los caracteres 
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 * 
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * 
 */

/**
 * 
 * @param {string} c1
 * @param {string} c2
 * @return {boolean}
 */
 const evaluarChar = function(c1,c2){
    const parA = '(';
    const corA = '[';
    const lavA = '{';
    const parB = ')';
    const corB = ']';
    const lavB = '}';

    let retorno = -1;

    switch (c1) {
        case parA:
            if(c2===parB){
                retorno = 1;
            } else if(c2===corA || c2 === lavA){
                retorno = 0;
            };
        case corA:
            if(c2===corB){
                retorno = 1;
            } else if(c2===parA || c2 === lavA){
                retorno = 0;
            };
        case lavA:
            if(c2===lavB){
                retorno = 1;
            } else if(c2===parA || c2 === corA){
                retorno = 0;
            };            
        default: 
            retorno = -1;
    }
    return retorno;
 };


/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
const isValid = function(s){
    
    const esValido = 0;
    const esValYPar = 1;
    const esInvalido = -1;
    let continua = true;
    let retorno = true;
    let cadenAux = s.split();
    let indice = 0;
    let charAux = -1;
    let charB = -1;
    let compara = -1;

    while(cadenAux.length > 1 && retorno == true){
        charAux = cadenAux.shift();

        while(continua){
            charB = cadenAux[indice];
            compara = evaluarChar(charAux,charB);
            if(compara === esValYPar){
                cadenAux.splice(indice,1);
                continua = false;
            } else if (compara === esValido){
                continua = true;
            } else if (compara === esInvalido){
                continua = false;
                retorno = false;
            };

        };
    };
    return retorno;
};

// TESTS
console.log(isValid('()') === true);
console.log(isValid('()[]{}')=== true);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{}{}(){[()]}') === true);
