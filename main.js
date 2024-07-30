'use strict'

//Arrow function
const sumar = (a, b) => {
    return a + b;
}
console.log(1 + 2)

const aleatorio = () => Math.random() * 100;
console.log(aleatorio())

const persona = new Person('Juan');
persona.greet(); 

const printNumbers = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
printNumbers()

setTimeout(() => {
    console.log('El rap es rápido');
}, 4000);

//Operador ternario

function puedeConducir(edad) {
    return edad >= 18 ? 'Puedes conducir' : 'No puedes conducir'
}   
console.log(puedeConducir(17));
console.log(puedeConducir(29));


let num1 = 5;
let num2 = 20;
let resultado = num1 > num2 ? 'num1 es mayor' : 'num2 es mayor'

console.log(resultado)

function determinarSigno(numero) {
    return numero > 0 ? 'positivo' : (numero < 0 ? 'negativo' : 'cero');
}
console.log(determinarSigno(8));
console.log(determinarSigno(0));
console.log(determinarSigno(-5));

function encontrarMaximo (a, b, c) {
    return (a > b) ? (a > c ? a : c) : (b > c ? b : c)
}
console.log(encontrarMaximo(1, 2, 3))

function parOImpar(numero) {
    return (numero % 2 === 0) ? 'par' : 'impar';
}
console.log(parOImpar(2))
console.log(parOImpar(9))

//Callbacks

function procesar(num, callback){
    return callback(num);
}
console.log(procesar(5, (num) => num * num));

function suma(a, b, callback) {
    callback(a + b);
}
suma(4, 6, (resultado) => console.log(resultado));

function aSaludar(nombre, callback) {
    callback(nombre);
}
setTimeout(() => {
    aSaludar('Paola', (nombre) => {
        console.log('Hola, ' + nombre);
    });
}, 2000);

function procesarElementos(artistas, callback) {
    for (let i = 0; i < artistas.length; i++) {
        callback(artistas[i]);
    }
}
const artistas = ['SFDK', 'Ayax', 'Hard GZ']

function imprimirArtistas(artistas) {
    console.log(artistas);
}
procesarElementos(artistas, imprimirArtistas)

function procesarCadena(cadena, callback) {
    const cadenaMayus = cadena.toUpperCase();
    callback(cadenaMayus);
}
let cadena = 'Yo tampoco sé vivir, estoy improvisando'
function impirmirCadena(cadena) {
    console.log(cadena);
}
procesarCadena(cadena, impirmirCadena)

//Rest & Spread operators

const artistas1 = ['Sharif', 'Mxrgxn', 'Recycled']
const artistas2 = [...artistas1, 'FernandoCosta', 'KaseO', 'ToteKing']
console.log(artistas2)

function suma(...valores){
let resultado = 0
valores.forEach(function(valor){
    resultado = resultado + valor;
})
return resultado;
}
console.log(suma(1, 2, 3, 4, 5))

const objeto1 = {
    instrumentos: 'piano, guitarra, bateria',
    escenarios: 'CaldesDeMontbui, Luarca, RibesDeFreser'
}
const objeto2 = {
    ...objeto1
}
objeto2.escenarios = 'Aiguafreda'
console.log(objeto1);
console.log(objeto2);

const raperosUruguayos = ['DosTresCinco', 'Zeballos', 'DiegoArquero', 'GamaStoner'];
const [primero, segundo, ...resto] = raperosUruguayos;
console.log(primero);
console.log(segundo);
console.log(resto);

function crearRecetas(a, b, c) {
    return (a + ', ' + b + ' y ' + c)
}
const ingredientes = ['pistacho', 'fresas', 'nata']

console.log(crearRecetas(...ingredientes))

const caminosASantiago = {
    nombres : ['Portugues', 'delNorte', 'Primitivo'],
    caracteristicas : ['costa', 'montaña', 'ciudad'],
    etapas: ['+10km', '+20km', '+30km', '+40km']
}
const clima = {
    estacion : ['Invierno', 'Primavera', 'Verano', 'Otono'],
    caracteristicas : ['lluvioso', 'soleado', 'nublado'],
    temperaturas : ['0º','+10º', '+20º', '+30º']
}

const viaje = {...caminosASantiago, ...clima}
console.log(viaje)

// ARRAY TRANSFORMATION

