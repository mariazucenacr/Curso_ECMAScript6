//*Operador de REPOSO(Rest)
const obj ={
    name : 'Azucena',
    age: 32,
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