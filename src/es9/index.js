//*Operador de REPOSO(Rest)
const obj ={
    name : 'Azucena',
    age: 26,
    country: 'Perú'
};

///utilizaremos el operador de reposo para separar elementos
//para eso crearemos una constante
let {name, ...all} = obj; //de esta forma podremos ver todos 
                          //los elementos de este objeto
console.log(name,all);
//esto se realiza para no desestructurar todos los elementos
//del objeto por ejemplo quiero la edad entonces seria asi
let {country, ...all} = obj; 
console.log(all);//y asi aparece lo que necesito

//*Utilizando las propiedades de PROPAGACIÓN
//Donde vamos a unir uno,dos,tres o más elementos de objetos
//a un nuevo objeto
const obj_0 = {
    nombre: 'Azucena',
    age: 26
};

const obj_1 ={
    //nosotros queremos la propiedad de propagación
    //para anidar estos dos objetos entonces
    //simplemente añadimos lo siguiente
    ...obj_0,
    country: 'Peru'
};

console.log(obj_1);

//* Finally en promesas
//cuando ha terminado el llamadao o logica de codigo segun sea el caso
const helloWorld = () =>{
    return new Promise((resolve,reject) =>
    (true)
    //? resolve('Hello World')
    //solo para probar se pondra con un pequeño tiempo de 3 seg
    ? setTimeout(() => resolve('Hello World'),3000)
    : reject(new Error('Test Error'))
    );
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
//tenemos esta nueva forma de finalizar esta función
    .finally(() => console.log('Finalizo'))
