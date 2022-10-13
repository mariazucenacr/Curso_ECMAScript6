//*-Dinamic import
//traer o llamar algun archivo dentro de otra pieza de código
//cuando se desencadene un llamado, en este caso un click
const button = document.getElementById("btn");
button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello();
});