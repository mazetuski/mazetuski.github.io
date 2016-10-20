/**
 * Created by Miguel Ángel Zamora Blanco on 13/10/2016.
 * <p>Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
 * entre el 1 y el 100. Mostrará un mensaje:</p>
 * <ul>
 * <li>Para indicar si has acertado (en una nueva ventana)</li>
 * <li>Para indicar si la solución es mayor o es menor.</li>
 * </ul>
 */

{

    /**
     * Funcion que devuelve un numero aleatorio del 1 al 100.
     * @returns {number} Un número.
     */
    let numeroAleatorio=function () {
        let aleatorio = Math.random() * 100;
        aleatorio = aleatorio.toFixed();
        return aleatorio;
    }

    /**
     * Función que comprueba que dos numeros sean iguales;
     * @param numero1 Numero 1 que se compara.
     * @param numero2 Numero 2 que se compara.
     * @returns {boolean} True en caso de que sean iguales, false en caso contrario.
     */
    let comprobarNumero=function(numero1, numero2) {
        if (numero1 < numero2) {
            console.log("Mayor");
            return false;
        } else if (numero1 > numero2) {
            console.log("Menor");
            return false;
        } else {
            console.log("Acertaste!");
            return true;
        }
    }

    /**
     * Función que pide un numero y comprueba que sea del 1 al 100.
     *
     * @returns numero1al100 El numero.
     */
    let pedirNumero1al100=function() {
        do {
            var numero1al100 = prompt("Dame un numero del 1 al 100:");
        } while ((!esNumeroEntero(numero1al100)) || (numero1al100 < 1 || numero1al100 > 100))
        return numero1al100;
    }

    /**
     * Comprueba que sea un numero entero.
     * @param numeroEntero Numero que se comprueba
     * @returns {boolean} False si no es un numero entero, true si lo es.
     */
    let esNumeroEntero=function(numeroEntero) {
        if (numeroEntero != parseInt(numeroEntero).toFixed())
            return false;
        return true;
    }

    /**
     * Función para jugar a Adivinalo
     */
    let jugar=function() {
        var numeroAdivinar = numeroAleatorio();
        do {
            var numeroUsuario = pedirNumero1al100();
        } while (!comprobarNumero(numeroUsuario, numeroAdivinar));
    }

    /**
     * Funcion que devuelve true en caso de que el jugador quiera volver a jugar.
     * @returns {boolean} True si el usuario escribe una s, false en cualquier otro caso.
     */
    let volverAJugar=function() {
        let respuesta = prompt("Desea volver a jugar? s/n");
        if (respuesta.toUpperCase() == 'S')
            return true;
        return false;
    }

    do {
        jugar();
    } while (volverAJugar());

}


