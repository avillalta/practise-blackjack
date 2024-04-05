
function crearPersona(nombre, apellido ){
    return {nombre,apellido}
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

const persona1 = crearPersona('Antonio','Villalta');

console.log(persona1);
console.log(crearPersona2('Paco', 'Juárez'));

function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    console.log({edad, args});
}

imprimeArgumentos2(123, 'Hola', false, 60);