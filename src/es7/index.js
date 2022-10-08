//*-Includes en ES7
let number =[1,2,3,7,8];
//vamos a validar si dentro del array esta el 7
if (number.includes(9)){
    console.log('Si se encuentra el valor 7');
}else{
    console.log('No se encuentra');
}
//anteriormente se usaba index of y un código un poco más complejo

//*-Como elevar a la potencia en ES7
let base = 4;
let exponent = 3;
//se usa el doble asterisco para ello
let result = base ** exponent;
console.log(result);
