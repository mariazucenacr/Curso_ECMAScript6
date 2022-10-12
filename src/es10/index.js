//*-Aplanamiento de ARRAYS (FLAT)
//creamos un arreglo con ciertos niveles en el array principal
let array = [1,2,3,[1,2,3,[1,2,3]]];
//para devolver una matriz con cualquier matriz aplanada
//también entenderemos como esta estructurada c/u de los elementos
//flata recibe la profundidad, es este caso solo un nivel
console.log(array.flat());
//en caso quisiera ver un segundo nivel o el nivel completo
console.log(array.flat(2));//pasariamos 2 como argumento
//de esta forma vemos como ha aplanado el array
//podemos pasarle el valor segun sea el caso de la matriz o de
//los elementos que va a tener

//*-Aplanamiento de ARRAYS (FLAT-MAP)
//mapear cada elemento, luego pasarle una función
//y aplanar el resultado
let array_1=[1,2,3,4,5];
console.log(array_1.flatMap(value => [value, value *2]));

//*-Metodos para quitar espacios en blanco en string
//*trimStart (quita espacios del incio)
let hello = '      hello world';
console.log(hello);
console.log(hello.trimStart);

//*trimEnd (quita espacios del final)
let hello_2 = 'hello world     ';
console.log(hello_2);
console.log(hello_2.trimEnd);

//*-Valor opcional de CATCH
//donde ya no es necesario ponerle un parametro 
//al lado del catch para usarlo se puede usar directo
//antes: catch (error){}
//ahora
try{

}catch{
    error
}

//*-Transformar un array de arrays en un objeto
//creamos un array con dos elementos y su clave
//es decir clave,valor en un array para convertirlo
//en objeto
let entries = [["name","azucena"],["age",32]];
console.log(Object.fromEntries(entries));

//*-Objeto de tipo symbol
//el cual nos permite acceder a una descripción
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);