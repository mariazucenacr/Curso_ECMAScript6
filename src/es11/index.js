//*-Dinamic import
//traer o llamar algun archivo dentro de otra pieza de código
//cuando se desencadene un llamado, en este caso un click
const button = document.getElementById("btn");
//aqui utilizamos ni index.html y file.js
button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello();
});

//*-BigInt
//aqui ya no utilizamos ni index.html ni file.js
//es el número más grande que puede tener javascript en
//este caso 2 a la 56, existen dos formas de trabajar
//1. Añadiendo un n
const aBigNumber = 9007199254740991n;//(este era el valor más grande)
//2. Utilizando BigInt
const anotherBigIntNumber = BigInt(9007199254740991n);

console.log(aBigNumber);
console.log(anotherBigIntNumber);

//*-PROMESAS
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));
//Promise.allSettled :no importa el estado de las promesas, va a 
//terminar y nos va a regresar bviamente la información
Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))
//esto nos regresa una estructura para saber cada uno de estos elementos
//con un estado(rejected,fulfilled,fulfilled) y reason(para reject, donde
//da reject) , value(para resolve el cual sa resolve)esas respuestas son las 
// que pusimos 

//*-Operador global
//window,self,frame o this, se va a obtener un resultado
//esto se puede ver desde el navegador
console.log(window);
console.log(self);
console.log(frames);
console.log(this);
//la propiedad globalThis proporciona una forma estandar de
//acceder al valor global no solamente desde el navegador
//sino también de las aplicaciones creadas en node
console.log(window);//no funciona en visual
console.log(globalThis);//si funciona en todos

//*-Operador Nullish Coalescing
//Ayuda a trabajar con los nulos
const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2);