/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */


let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
    puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const dicCartasComputadora = document.querySelector('#computadora-cartas');


const crearDeck = () => {

    for( let i = 2; i <= 10; i++){
        for( let tipo of tipos ){
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales){
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle(deck);
}

crearDeck();

//Esta función me permite coger una carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck'
    }

    const carta = deck.pop();

    //console.log(deck);
    //console.log(carta);
    return carta;
}

pedirCarta();

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length-1);
    return (isNaN(valor) ) ? ( valor === 'A' ) ? 11 : 10 : valor * 1;
}

const valor = valorCarta(pedirCarta());

//Eventos

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);

    puntosHTML[0].innerHTML = puntosJugador;

    //<img class="carta" src="assets/cartas/2C.png" alt=""></img>
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);

});

btnNuevo.addEventListener('click', () => {

    window.location.reload();

});