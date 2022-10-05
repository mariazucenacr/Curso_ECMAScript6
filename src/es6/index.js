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