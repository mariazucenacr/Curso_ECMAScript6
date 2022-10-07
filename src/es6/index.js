//Caracteristicas añadidas en ECMAScript6
//*Default Params
//-Antes de ES6
function newFunction(name,age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
};

//-Con ES6
function newFunction2(name = 'Oscar',age = 32, country = 'MX'){
    console.log(name,age,country);
};
    //se puede llamar a esta función de dos formas distintas
    //1 sin parametros en la función, toma los que estan por defecto
    newFunction2();
    //2 con parametros
    newFunction2('Ricardo',23,'CO');

//*Templates Literals

let hello = "Hello";
let world = "World";
//Antes de ES6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//Con ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//*La multilenea
//-Antes de ES6
let lorem = "quiero escribir una frase epica que quiero separar /n"
+" otra frase epica que necesitamos.";
//-Con ES6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica.
`;

console.log(lorem);
console.log(lorem2);

//*Desestructuracion
let person ={
    'name' : 'oscar',
    'age' : 32,
    'country' : 'MX'
} 
console.log(person.name, person.age);

//--Vamos a desestructurarlo
let {name,age} = person; //de esta forma yo puedo extraer del objeto person lo que necesito
console.log(name,age);

//*Spread Operator
//ciertos elementos en arreglos los cuales quiero unir en un solo elemento
let team1 =['Oscar','Julian','Ricardo'];
let team2 =['Valeria', 'Yesica','Camila'];
//voy a crear un tercer elemento, el cual sera para estructurar esos dos team
let education = ['David', ...team1, ...team2];
console.log(education);

//*LET Y CONST
//Let solo esta disponible en el scope
//1
{
    var globalVar ='Global Var';
}
//2
{
    let globalLet ='Global Let';
}

console.log(globalVar); //si es accesible
console.log(globalLet); //no es accesible porque debe ser llamada dentro de su bloque

//2.1 aqui lo ponemos correctamente
{
    let globalLet ='Global Let';
    console.log(globalLet);
}

//Const establece una variable no cambia su valor, con var si puede cambiar
const a = 'b';
a= 'a';
console.log(a);

//*-PARAMETROS EN OBJETOS
let name = 'Azucena';
let age = 26;
//Antes de ES6
obj = { name: name, age: age};
//Ahora en ES6
obj2={name,age};//de esta forma llama directo de las variables

//*Arrow Functions(estas funciones vienen a solventar un problema en particular,
//o a trabajar con dos elementos en una sintaxis más reducida)
const names = [
    {name: 'azucena',age: 26},
    {name:'jin', age:22}
];
//Antes de ES6 se utilizaban funciones anonimas para mostrar  lo que se queria del array
let listOfNames = names.map(function(item){
    console.log(item.name);
});
//Ahora con ES6, en donde en vez de hacer una funcion anonima vamos
//a establecer directamente el elemento que necesitamos
let listOfNames2 = names.map(item => console.log(item.name));
//otra forma
const listOfNames3 = (name,age) => { /*...aqui lo que va hacer la funcion*/ };
//otra forma con solo un elemento
const listOfNames4 = name => { /*...aqui lo que va hacer la funcion*/ };
//otra donde enviamos una funcion, donde no es necesario el return
const square = num => num * num;

//*-PROMESAS (Hay un curso en platzi exclusivo de eso)
//generamos la promesa
const helloPromise = () =>{
    //va a resolver o va a ser rechazada
    return new Promise((resolve,reject) => {
        if (true){ ///si es true ejecuta resolve si es false entonces reject
            resolve('Hey!');
        }else{
            reject('Ups!!!');
        }
    });
}
//vamos a ejecutarla
helloPromise()
.then(response => console.log(response))
//podemos anidar una gran cantidad de elementos then
.then(()=> console.log('hola'))
.catch(error => console.log(error));

//*-CLASS
class calculator {
    //asignamos un constructor
    constructor () { //aqui vamos asignar las variables que estaran en el scope global
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){//método al cual yo le paso los dos elementos
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    //A nuestra clase podemos añadirle muchos más métodos
    //y también inicializarlos segun sea el caso
}

//Como lo utilizamos
//generamos una constante donde igualamos a la clase creada
const calc = new calculator ();
console.log(calc.sum(2,2)); //y aqui llamamos al metodo que dispongo
//de esta forma hemos trabajado con objetos y la herencia

//*-MODULES (MODULOS) trabajando con Export e Import
//Para ello vamos a crear un nuevo archivo llamado module.js para
//trabajar con export e import y entender más sobre modulos
//Aqui lo llamaremos con import al modulo creado en module.js
import {hello} from './module.js';
hello ();

