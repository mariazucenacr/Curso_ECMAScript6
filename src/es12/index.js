//*-Replace All
const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";
//vamos a pasarle el replace 
const replaceString = string.replace("Javascript","Phyton");
console.log(replaceString);
//este replace solo reemplazaba el primer elemento que encontraba del string

//Ahora con el nuevo replace all
const replaceString2 = string.replaceAll("Javascript","Phyton");
console.log(replaceString2);