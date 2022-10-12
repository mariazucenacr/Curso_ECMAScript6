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
