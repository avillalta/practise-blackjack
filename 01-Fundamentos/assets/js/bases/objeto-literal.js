
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Latitud => ', personaje.coords.lat);

console.log('Nº Trajes:', personaje.trajes.length);
console.log('Último Traje:', personaje.trajes[personaje.trajes.length-1]);

//delete personaje.edad;

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log({propiedades, valores});