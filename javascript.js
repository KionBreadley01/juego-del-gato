let turno = 0;
let juegoFinalizado = false;

const verificarGanador = () => {
    const buttons = document.querySelectorAll('button');
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    for (const combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (buttons[a].textContent && buttons[a].textContent === buttons[b].textContent && buttons[b].textContent === buttons[c].textContent) {
            // Marcar los botones ganadores
            buttons[a].classList.add('winner');
            buttons[b].classList.add('winner');
            buttons[c].classList.add('winner');
            return true;
        }
    }
    return false;
};
const mostrarMensaje = (mensaje) => {
    const textoVictoria = document.getElementById('textoVictoria');
    textoVictoria.textContent = mensaje;
    textoVictoria.style.display = 'block';
};
const btnPulsando = (e) => {
    if (juegoFinalizado) return;

    const btn = e.target;
    if (!btn.textContent) {
        turno++;
        btn.textContent = turno % 2 ? 'X' : 'O';

        if (verificarGanador()) {
            juegoFinalizado = true;
            mostrarMensaje('Has ganado! :)');
        } else if (turno === 9) {
            juegoFinalizado = true;
            mostrarMensaje('Empate');
        }
    }
};
        document.querySelectorAll('button').forEach(
            obj => obj.addEventListener('click', btnPulsando)
        );