// prueba

// siempre que pueda debo declarar con const 
// si es otro caso debo declarar con let
// solo usar var en legacy 

// let un scope a nivel bloque {} en cambio var no le afecta los bloques siempre es una variable a nivel function
// let no permite declarar dos veces la misma variable, en cambio var si

// Declaración de variables
// javascript es un lenguaje dinamico, debilmente tipado

// NUMBER
let var1 = 1;
let var2 = -0;

console.log("1 / 0 = " + var1 / var2);
console.log("Raiz cuadrada de (-1)", Math.sqrt(-1));
console.log(typeof var1);

// STRING //
let saludo = "Hola 's mundo";
let saludo2 = 'Hola mundo de "nuevo"';
let saludo3 = 'h';

let pizza = '🍕';

console.log(saludo + " quiero una " + pizza);

console.log(`${saludo} quiero una ${pizza}`);

// Null: respresenta la ausencia de algun valor
let nulo = 45;
nulo = null;

// Undefined: propiedad o variable no asignada
// declarar una variable y no asignarla no es buena idea
let nodefinido;
console.log(nodefinido);
nodefinido = 34;
console.log(nodefinido);

// Numero 
let someNumber = 10;
let someString = 'Ten';
let someBoolean = false;

console.log(`Suma de numero y string = ${someNumber+someString} y es del tipo ${typeof(someNumber + someString)}`);
console.log(`Suma de numero y boolean = ${someNumber+someBoolean} y es del tipo ${typeof(someNumber + someBoolean)}`);

// Parse de numeros
let cadenaNumero = '32';
let cadenaFload = '34.5';
console.log(parseInt(cadenaNumero) + 1);
console.log(parseFloat(cadenaFload) + 5.6);

console.log(cadenaFload.toString());

// Tipos de datos en javacript
// Number, String, Boolean, Symbol, Null, Undefined, Object

// JSON: JavaScriptObjectNotation
let actor = {
    name: 'Jose Perez',
    age: 46
};

console.log(actor);
// acceso a las propiedades usando la notacion de corchetes []
console.log(`Nombre de actor: ${actor["name"]}`);

// acceso a las propiedades usando la notación punto .
console.log(`Edad de actor: ${actor.age}`);







