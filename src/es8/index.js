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

//*-Object.values()
//*Obtener los valores de un objeto a un arreglo(array)
const data_ ={
    fronend: 'Azucena',
    backend:'Jin',
    desing: 'Felix',
}
//Como voy hacer la transformación
const values = Object.values(data_);
console.log(values);
//también podemos contar cuantos elementos tenia
console.log(values.length);