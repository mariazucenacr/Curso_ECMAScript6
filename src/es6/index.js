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
