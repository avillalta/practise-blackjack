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
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');


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
    return carta;
}


const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length-1);
    return (isNaN(valor) ) ? ( valor === 'A' ) ? 11 : 10 : valor * 1;
}

const valor = valorCarta(pedirCarta());

const turnoComputadora = ( puntosMinimos ) => {

    if(puntosComputadora<puntosMinimos && puntosMinimos <= 21) {
        
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerHTML = puntosComputadora;

        //imagen carta
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);
    } 
}

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

    turnoComputadora(puntosJugador);

    if( puntosJugador > 21 || puntosComputadora === 21){
        console.warn('Has perdido');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    } else if(puntosJugador === 21 || puntosComputadora > 21){
        console.warn('¡Has ganado!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }
});

btnNuevo.addEventListener('click', () => {

    window.location.reload();
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    while(puntosComputadora<puntosJugador && puntosJugador <= 21){
        turnoComputadora(puntosJugador);
    }
    
    if( puntosComputadora < 21 && puntosComputadora > puntosJugador){
        console.warn('Has perdido');
    } else if(puntosComputadora===puntosJugador){
        console.warn('Empate');
    } else {
        console.warn('¡Has ganado!');
    }
});



