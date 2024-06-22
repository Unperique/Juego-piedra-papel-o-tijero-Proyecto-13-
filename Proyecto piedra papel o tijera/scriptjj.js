// Declaramos las variables para almacenar el puntaje de cada jugador y los empates
let puntajeJugador1 = 0; // Puntaje del jugador 1
let puntajeJugador2 = 0; // Puntaje del jugador 2
let puntajeEmpates = 0; // Puntaje de los empates

// Declaramos las variables para almacenar la elección del jugador 1 y el jugador 2
let eleccionJugador1 = null; // Elección del jugador 1
let eleccionJugador2 = null; // Elección del jugador 2

/**
 * Función para jugar el juego. Recibe el nombre del jugador y la elección del jugador.
 * Genera una elección aleatoria para la computadora y luego muestra las selecciones del jugador y de la computadora.
 * Determina el ganador del juego y actualiza el puntaje correspondiente.
 * Reinicia el juego después de un segundo.
 * @param {string} jugador - El nombre del jugador ('jugador1' o 'jugador2')
 * @param {string} eleccion - La elección del jugador ('piedra', 'papel' o 'tijeras')
 */
function jugarJuego(jugador, eleccion) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    if (jugador === 'jugador1') {
        eleccionJugador1 = eleccion;
        mostrarSeleccion('jugador1', eleccionJugador1);
    } else if (jugador === 'jugador2') {
        eleccionJugador2 = eleccion;
        mostrarSeleccion('jugador2', eleccionJugador2);
    }

    if (eleccionJugador1 !== null && eleccionJugador2 !== null) {
        determinarGanador();
        setTimeout(reiniciarJuego, 1000); // Reiniciar después de 1 segundo
    }
}

/**
 * Función para mostrar la selección del jugador en la pantalla.
 * @param {string} jugador - El nombre del jugador ('jugador1' o 'jugador2')
 * @param {string} eleccion - La elección del jugador ('piedra', 'papel' o 'tijeras')
 */
function mostrarSeleccion(jugador, eleccion) {
    const imagenEleccion = document.getElementById(`imagen-eleccion-${jugador}`);
    imagenEleccion.src = `Image/${eleccion}.png`;
}

/**
 * Función para determinar el ganador del juego.
 * Calcula el ganador basado en las elecciones del jugador 1 y del jugador 2.
 * Actualiza el puntaje correspondiente y muestra el resultado en la pantalla.
 */
function determinarGanador() {
    const ganador = calcularGanador(eleccionJugador1, eleccionJugador2);

    if (ganador === 'jugador1') {
        puntajeJugador1++;
    } else if (ganador === 'jugador2') {
        puntajeJugador2++;
    } else {
        puntajeEmpates++;
    }

    actualizarMarcador();
    mostrarResultado(ganador);
}

/**
 * Función para calcular el ganador del juego.
 * Compara las elecciones del jugador 1 y del jugador 2 según las reglas del juego.
 * @param {string} eleccion1 - La elección del jugador 1 ('piedra', 'papel' o 'tijeras')
 * @param {string} eleccion2 - La elección del jugador 2 ('piedra', 'papel' o 'tijeras')
 * @returns {string|null} El nombre del ganador ('jugador1', 'jugador2' o 'empate') o null si no se ha determinado un ganador
 */
function calcularGanador(eleccion1, eleccion2) {
    if (eleccion1 === eleccion2) {
        return 'empate'; // Si las elecciones son iguales, es un empate
    } else if (
        (eleccion1 === 'piedra' && eleccion2 === 'tijeras') ||
        (eleccion1 === 'papel' && eleccion2 === 'piedra') ||
        (eleccion1 === 'tijeras' && eleccion2 === 'papel')
    ) {
        return 'jugador1'; // Si el jugador 1 gana, retorna 'jugador1'
    } else {
        return 'jugador2'; // Si el jugador 2 gana, retorna 'jugador2'
    }
}

/**
 * Función para reiniciar el juego.
 * Reinicia las elecciones de los jugadores y las imágenes de las selecciones.
 * Muestra el mensaje de inicio del juego.
 */
function reiniciarJuego() {
    eleccionJugador1 = null;
    eleccionJugador2 = null;

    document.getElementById('imagen-eleccion-jugador1').src = 'Image/piedra.png';
    document.getElementById('imagen-eleccion-jugador2').src = 'Image/piedra.png';

    mostrarResultado(null); // Limpiar el resultado
}

/**
 * Función para actualizar el marcador en la pantalla.
 * Muestra el puntaje de cada jugador y el puntaje de los empates.
 */
function actualizarMarcador() {
    document.getElementById('puntaje-jugador1').textContent = puntajeJugador1;
    document.getElementById('puntaje-jugador2').textContent = puntajeJugador2;
    document.getElementById('puntaje-empates').textContent = puntajeEmpates;
}

/**
 * Función para mostrar el resultado del juego en la pantalla.
 * Muestra el mensaje correspondiente al ganador ('Jugador 1 gana', 'Jugador 2 gana' o 'Empate').
 * @param {string|null} ganador - El nombre del ganador ('jugador1', 'jugador2' o 'empate') o null si no se ha determinado un ganador
 */
function mostrarResultado(ganador) {
    const resultadoElemento = document.querySelector('.resultado p');
    let mensaje = '';

    if (ganador === 'jugador1') {
        mensaje = '¡Jugador 1 gana!';
    } else if (ganador === 'jugador2') {
        mensaje = '¡Jugador 2 gana!';
    } else if (ganador === 'empate') {
        mensaje = '¡Empate!';
    } else {
        mensaje = 'Selecciona una opción para empezar...'; // Mensaje de inicio del juego
    }

    resultadoElemento.textContent = mensaje;
}

