
let a = 5;

if (a >= 10) {
    console.log('Fin del Programa');
} else {
    console.log('A es menor a 10');
}

const hoy = new Date();
let dia = hoy.getDay();

if (dia === 5){
    console.log('Es Domingo');
} else if(dia === 1){
    console.log('object');
}

switch (dia){
    case 0:
        console.log('Es Domingo');
        break;
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3:
        console.log('Es Miércoles');
        break;
    case 4:
        console.log('Es Jueves');
        break;
    case 5:
        console.log('Es Viernes');
        break;
    case 6:
        console.log('Es Sábado');
        break;
}

const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(diaSemana[dia] || 'Día no definido');


