// Desestrucurar Objetos

const persona = {
    nombre: 'Pablo',
    apellido: 'Fernandez',
    pais: 'Argentina',
    ciudad: 'Buenos Aires',
    twitter:'@pablof'
};

// const nombre = persona.nombre;
// const apellido = persona.apellido;

let {nombre, apellido, pais, ciudad} = persona;

console.log(`Hola ${nombre} ${apellido}`);

const usuario = {
    nombre: 'Juan',
    apellido: 'Peres',
    links: {
        social: {
            twitter: 'https://twitter.com/juanp',
            facebook: 'https://facebook.com/juan.peres'
        },
        web: {
            blog: 'https://juanperez.com'
        }
    }
};

const {twitter:tweet, facebook: fb} = usuario.links.social;
console.log(tweet);

// arrays
const details = ['Juan Perez', 123, 'juanp.com'];
const [name, id, website]= details;

console.log(name, id, website);

const curso = ['Pablo', 'Federico', 'Matias', 'Anna', 'Julian'];

const [profesor, asistente, ...alumnos ] = curso;
console.log(profesor, asistente, alumnos);

// Swapping de variables
let a = 5;
let b = 6;

let aux = a;
a = b;
b = aux;

[a,b] = [b,a];

// Ejemplo en funciones
function convertirMonedas(importe){
    const tipoCambio = {
        USD: importe * 0.160,
        MEX: importe * 0.10,
        EU: importe * 0.20
    }
    return tipoCambio;
}

const {EU, USD, MEX} = convertirMonedas(1500);
console.log(EU, USD, MEX);

// Destructing en parametros de una funcion

function calcTotal({total, propina=0.10, impuesto=0.13}){
    return total + (propina*total) + (impuesto * total);
}

function calcTotal(total, propina=0.10, impuesto){
    return total + (propina*total) + (impuesto * total);
}

const valores = {total: 200, propina:0.10, impuesto: 0.13};

console.log(calcTotal(valores.total, valores.propina, valores.impuesto));

console.log(calcTotal({propina: 0.15, total:200}));



