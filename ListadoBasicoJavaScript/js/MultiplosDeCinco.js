/**
 * Created by Miguel Ángel Zamora Blanco on 13/10/2016.
 * Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de
 * 5
 */

{

    /**
     * Función que coge 7 numeros del usuario y comprueba si son multiplos de 5.
     */
    let multiplosDeCinco = function () {
        let mensaje = "Son múltiplos: ";
        for (let i = 1; i <= 7; i++) {
            let numeroUsuario = comprobarNumeroEntero(i);
            if (numeroUsuario % 5 === 0)
                mensaje += " " + numeroUsuario;
        }
        console.log(mensaje);
    }

    /**
     * Comprueba que sea un numero entero.
     * @returns numeroEntero Devuelve el número.
     */
    let comprobarNumeroEntero = function (indice) {
        do {
            var numeroEntero = prompt("Dame el " + indice + "º número");
        } while (numeroEntero != parseInt(numeroEntero).toFixed());
        return numeroEntero;
    }

    multiplosDeCinco();
}