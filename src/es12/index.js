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

