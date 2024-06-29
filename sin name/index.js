let bienvenida ='Hola mundo';
let bienvenida2; //let o var
const bienvenidos = "hola";
console.log(typeof bienvenida); //sirve para decir que tipo es si es numero o texto
console.log(bienvenida2);
console.log(bienvenidos);
 
var nombre = "hola mundo";
var numero = 25;
var verdadero = true;
var nulo = null;

console.log(typeof nombre);
console.log(typeof numero);
console.log(typeof verdadero);
console.log(typeof nulo); //sale objets porque es un vacio de objeto o ausencia de objetos pero es null igual

var _nombre=undefined;
console.log(_nombre);

var señales = {
    nombre:nombre,
    numero: numero
};
console.log(señales);
console.log(señales.numero);
console.log(señales['numero']);
señales.nombre = "Santiago_V";

let Todo = ['a','b','c'];
console.log(Todo);
console.log(Todo[2]);
Todo[3] = 'd';
Todo[10] = 'k';
console.log(Todo);
console.log(Todo[5])
console.log(typeof Todo);
console.log(Todo.length);//Tira en la consola  que longitud tiene el texto


function suma(
){
    console.log(arguments);
    return a+2-b;
    
} 
let resultado = suma(  a=5,b=3 );
console.log(resultado);
console.log(typeof suma);


function pep2(){
const Html = document.getElementById('pepe');

if (Element.classList.contains('hola')) {
 Element.classList.remove('hola');
 Element.classList.add('hola2');                                                                                
}
    else {
    Element.classList.add('hola'); 
         }
    } 

 
    /*
    function cambiarClase() {
    const elemento = document.getElementById('mi-elemento');

    // Verifica si el elemento tiene la clase 'mi-clase'
    if (elemento.classList.contains('mi-clase')) {
        // Si tiene la clase, la elimina
        elemento.classList.remove('mi-clase');
        elemento.classList.add('otra-clase');
    } else {
        // Si no tiene la clase, la agrega
        elemento.classList.add('mi-clase');
    }
}
*/