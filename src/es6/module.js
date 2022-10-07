//En este archivo voy a tener mi logica separada del principal
//para hacer un ejemplo de modulo
const hello = () =>{
    return 'hello!';
} 
//aqui lo voy a exportar el modulo y de esta forma lo puedo llamar cuando
//lo necesite
export default hello;
//export {hello};
//de esta forma en el archivo principal de este caso
//que es index.js lo llamaremos con import