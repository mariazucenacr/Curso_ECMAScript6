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

//*-TRAILING COMMAS
//*El cual establece que puedes poner una coma al final sin error
//*para los objetos, esto es amigable para evitar los errores
const data_1 ={
    fronend: 'Azucena',
}

//*ASYNC AWAIT
const helloWorld = () =>{
    return new Promise((resolve,reject =>{
        (true)
            ? setTimeout(() => resolve('Hello World!'))
            : reject (new Error('Test Error'))
    }))
};
//con la promesa ya hecha vamos a ver como funciona
//async await
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};
helloAsync();

//como ejecutar correctamente el async await
const anotherFunction = async () => {
    //se usa para manejar errores se usa try-catch
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch{
        console.log(error);
    }
};
anotherFunction();
//----------------------------------------------------------------------------------------------------------------------
//ejercicio de ejemplo
// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero