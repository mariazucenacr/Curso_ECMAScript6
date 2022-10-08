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

//*-PADDING
//*Rellenar un string
const string = 'Hello';
//como podemos agregar una cadena añadida a este string, antes de
console.log(string.padStart(7,'hi'));//entre los parentesis se pone cuantos carateres vamos a poner
                                //considerar que por ejemplo se quiere añadir 2 caracteres entonces
                                //se cuanta cuantos tiene la palabra y se le añade los dos que se 
                                //quiere por eso son 7 y al lado se pone lo que se quiere añadir 
                                //en esos 2 caracteres agregados en este caso es hi

//como podemos agregar una cadena añadida a este string, después de
console.log(string.padEnd(12,' -----'));//esto de igual forma se cuentan los caracteres de la palabra
                                        //y los que se quieren añadir y se agrega al final 

//Este padding sirve para mostrar una estructura de elementos, por la parte del front
//por ejemplo en la impresión de un producto
console.log('food'.padEnd(12,' ------'));