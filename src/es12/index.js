//*-Replace All
const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";
//vamos a pasarle el replace 
const replaceString = string.replace("Javascript","Phyton");
console.log(replaceString);
//este replace solo reemplazaba el primer elemento que encontraba del string

//Ahora con el nuevo replace all
const replaceString2 = string.replaceAll("Javascript","Phyton");
console.log(replaceString2);

//*-Métodos de clases privadas
class Message {
    show(val){
        console.log(val);
    };
};

const message = new Message();
message.show('Hola');
//como volver de forma privada este recurso se pone el simbolo #
//para dar la representación de que ahora el método el privado y
//solo sera accedido dentro de la clase
class Message {
    #show(val){//<----
        console.log(val);
    };
    //de la misma forma con get y set
    get #add(val){
        //....
    };
};

const message = new Message();
message.show('Hola');
//con ello nos va a salir un error, porque no esta disponible;por el
//hecho de que ahora es privado

//*-Promise.any
//es un objeto global de promise, cuyo argumento va a ser la forma de
//un array de promesas que vamos a pasarle, gestionando y capturando
//la respuesta de la primera promesa que sea resuelta de forma satisfactoria
const promise_1 = new Promise((resolve,reject) => reject ("1"));
const promise_2 = new Promise((resolve,reject) => resolve ("2"));
const promise_3 = new Promise((resolve,reject) => resolve ("3"));

Promise.any([promise_1,promise_2.promise_3])
    .then(response => console.log(response));