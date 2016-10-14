/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa MediaPositivos que calcule la media de una serie de números positivos,
 * introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.
 */

{
    /**
     * Comprueba que sea un numero positivo
     * @returns numero Devuelve el número.
     */
    let comprobarNumeroPositivo = function () {
        do {
            var numero = prompt("Introduce un número mayor que 0");
        } while ((numero != parseFloat(numero)) || numero < 0);
        return parseFloat(numero);
    }

    /**
     * Función que calcula la media de números hasta que se introduce un 0.
     * @returns {number} Devuelve la media de los números.
     */
    let mediaPositivos = function () {
        let suma = 0;
        let contador = -1;
        let numeroUsuario;
        do {
            numeroUsuario = comprobarNumeroPositivo();
            suma += numeroUsuario;
            contador++;
        } while (numeroUsuario !== 0);
        return suma / contador;
    }

    console.log("La media es: " + mediaPositivos());
}