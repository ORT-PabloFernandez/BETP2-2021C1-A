const inventors = require('../data/inventors');

//console.log(inventors.getInventors());

// imprimir en formato tabular
function printInventor(inventors){
    console.log('Nombre      Apellido     Año');
    console.log('----------------------------------');    
    inventors.forEach(inventor => console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(12,' ')}${inventor.year}`));
}

printInventor(inventors.getInventors());

// 1.- Filtrar los inventores nacidos antes del 1800
printInventor(
    inventors.getInventors()
    .filter(inventor => inventor.year > 1800)
);

// 2.- Convertir los apellidos en mayusculas
printInventor(
    inventors.getInventors()
    .map(inventor =>
        ({first:inventor.first, last:inventor.last.toUpperCase(), year:inventor.year})
    ));

// 3.- Dentro de los inventores existe alguno naciado en 1858

inventors.getInventors().some(inventor => inventor.year === 1858);

inventors.getInventors().find(inventor => inventor.last === "Kepler");

inventors.getInventors().findIndex(inventor => inventor.last === "Kepler");

//inventors.getInventors().every()

console.log();
printInventor(inventors.getInventors().sort((a,b) => a.year - b.year ));

// Ejercicio componer un arrar de inventores que tenga una propiedad que sea Nombre y Apellido junto, NombreCompleto
// Tip usar un .map

