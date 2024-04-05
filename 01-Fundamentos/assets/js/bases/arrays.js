
let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log(videojuegos[0]);

let cosas = [true, 123, 'Fernando', 1+2, function(){}, ['X', 'Megaman', 'Zero', 'Dr. Light']];

console.log(cosas[5][3]);

console.log(videojuegos.length);

let primero = videojuegos[0];

let ultimo = videojuegos[videojuegos.length-1];

console.log({primero, ultimo});

videojuegos.forEach((elemento, indice, arr) => {console.log({elemento, indice, arr});})

videojuegos.push('F-Zero');

console.log(videojuegos);

let nuevaLongitud = videojuegos.unshift('Fire Emblem');

console.log({nuevaLongitud, videojuegos});

let juegoBorrado = videojuegos.pop('F-Zero');

console.log({juegoBorrado, videojuegos});

let borrados = videojuegos.splice(1, 1);

console.log({borrados, videojuegos});


