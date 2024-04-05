
function saludar( nombre ){
    console.log(arguments);
    console.log('Hola ' + nombre );
}

//Función anónima, no hay manera de que este nombre (saludar2) pueda ser reutilizado en el código. Como una medida de seguridad
const saludar2 = function(){
    console.log('Hola Mundo');
}

//Otra manera de hacer una función, son más eficientes y evitan varios problemas con un objeto específico llamado disk?
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

saludar2();
saludar();
saludar('Antonio');
saludarFlecha();

function suma(a,b){
    return a + b;
}

const suma2 = (a, b) => {
    return a + b;
}

console.log(suma(2,3));
console.log(suma2(3,3));

const getAleatorio = () => Math.random();

console.log(getAleatorio());