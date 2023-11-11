const botonPiedra = document.querySelector('.boton-jugada');
const botonPapel = document.querySelectorAll('.boton-jugada')[1];
const botonTijera = document.querySelectorAll('.boton-jugada')[2];


const resultados = document.getElementById('resultados');
const ronda = document.createElement('p');
resultados.appendChild(ronda);

botonPiedra.addEventListener('click', function () {
    const jugador = 1;
    const ordenador = Math.floor(Math.random() * 3);

    if (jugador > ordenador) {
        ronda.textContent = 'Victoria';
    } else if (jugador < ordenador) {
        ronda.textContent = 'Derrota';
    } else {
        ronda.textContent = 'Empate'
    }
})

botonPapel.addEventListener('click', function () {
    const jugador = 1;
    const ordenador = Math.floor(Math.random() * 3);

    if (jugador > ordenador) {
        ronda.textContent = 'Victoria';
    } else if (jugador < ordenador) {
        ronda.textContent = 'Derrota';
    } else {
        ronda.textContent = 'Empate'
    }
})

botonTijera.addEventListener('click', function () {
    const jugador = 1;
    const ordenador = Math.floor(Math.random() * 3);

    if (jugador > ordenador) {
        ronda.textContent = 'Victoria';
    } else if (jugador < ordenador) {
        ronda.textContent = 'Derrota';
    } else {
        ronda.textContent = 'Empate'
    }
})

