// declaracion de funciones en JS

function add(a,b){
    return a + b;
}

function calcularCosto(total, tax = 0.13, tip = 0.15){
    return total + (total * tax) + (total * tip);
}
console.log(calcularCosto(100));

function calcularCosto1(){
    let total = arguments[0];
    let tax = arguments[1];
    let tip = arguments[2];
    let comision = arguments[3];

    console.log(comision);
    return total + (total * tax) + (total * tip);
}
console.log(calcularCosto1(100, 0.13, 0.15));

// asignando a una variable
// const square = function(x){
//     return x * x;
// }

// Arrow Function

const getSum = (a,b) => { 
    return a + b;
};

const square = x => x*x;

square(4);

console.log([4,6,8,3,6].sort((a,b) => b - a));

// no es aconsejable utilizar function fecha con this.
const person = {
    points: 23,
    score: () => this.points++
}
person.score();

console.log(person.points);




