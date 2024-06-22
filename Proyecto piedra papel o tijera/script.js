// Definimos las variables de puntaje para el jugador, la computadora y los empates
let puntajeJugador = 0; // Puntaje del jugador
let puntajeComputadora = 0; // Puntaje de la computadora
let puntajeEmpates = 0; // Puntaje de los empates

// Definimos la función para jugar el juego
function jugarJuego(eleccionJugador) {
    // Generamos un array con las opciones disponibles y seleccionamos una opción aleatoria para la computadora
    const opciones = ['piedra', 'papel', 'tijeras'];
    //Este fragmento de código genera una elección aleatoria
    //para la computadora al seleccionar un elemento aleatorio de la matriz de opciones.
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    //El método getElementById toma una cadena que representa el id del elemento que deseas seleccionar y devuelve
    // una referencia al primer elemento del documento con ese id.
    // Si no se encuentra ningún elemento con el id especificado, devuelve null.
    // Actualizamos las imágenes de las selecciones del jugador y de la computadora
    const imagenEleccionJugador = document.getElementById('imagen-eleccion-jugador');
    const imagenEleccionComputadora = document.getElementById('imagen-eleccion-computadora');

    // Aseguramos que las extensiones de las imágenes sean correctas
    imagenEleccionJugador.src = `Image/${eleccionJugador}.png`;
    imagenEleccionComputadora.src = `Image/${eleccionComputadora}.png`;

    // Determinamos el resultado del juego
    let resultado;
    if (eleccionJugador === eleccionComputadora) {
        // Si el jugador y la computadora eligen la misma opción, es un empate
        resultado = "¡Empate!";
        puntajeEmpates++; // Incrementamos el puntaje de empates

        //Este fragmento de código representa la lógica para determinar cuándo gana el jugador en un juego de piedra, papel y tijera. Comprueba
        // si la elección del jugador supera la elección de la computadora según las reglas del juego.
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
    ) {
        // Si el jugador gana, incrementamos el puntaje del jugador
        resultado = "¡Ganaste!";
        puntajeJugador++;
    } else {
        // Si la computadora gana, incrementamos el puntaje de la computadora
        resultado = "¡Perdiste!";
        puntajeComputadora++;
    }

    // Actualizamos el puntaje en la pantalla
    document.getElementById('puntaje-jugador').textContent = puntajeJugador;
    document.getElementById('puntaje-computadora').textContent = puntajeComputadora;
    document.getElementById('puntaje-empates').textContent = puntajeEmpates;
    //El método getElementById toma una cadena que representa el id del elemento que deseas seleccionar y devuelve
    // una referencia al primer elemento del documento con ese id.
    // Si no se encuentra ningún elemento con el id especificado, devuelve null.


    // Mostramos el resultado del juego
    const elementoResultado = document.querySelector('.resultado p'); 
    //El método querySelector toma un selector CSS como argumento y devuelve el primer
    // elemento del documento que coincide con ese selector.
    // Si no se encuentra ningún elemento que coincida, devuelve null.
    elementoResultado.textContent = `Elegiste ${eleccionJugador}. La computadora eligió ${eleccionComputadora}. ${resultado}`;
}

