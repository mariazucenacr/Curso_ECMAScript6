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