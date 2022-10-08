//*-Object.entries()
//*Obtener los PARES DE VALOR de un objeto en un array
const data = {
    fronend: 'Azucena',
    backend:'Jin',
    desing: 'Felix',
}

const entries = Object.entries(data);
console.log(entries);
//Elemento que se va a usar cuando querramos saber cuantos elementos
//contiene un objeto
console.log(entries.length);

