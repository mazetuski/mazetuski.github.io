/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 *  Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
 * Entonces, que muestre la media.
 */


{
    /**
     * Comprueba que sea un numero
     * @returns numero Devuelve el número.
     */
    let comprobarNumero = function () {
        do {
            var numero = prompt("Introduce un número mayor que 0");
        } while ((numero != parseFloat(numero)));
        return parseFloat(numero);
    }

    let mediaPositivos = function () {
        let suma = 0;
        let contador = 0;
        let numeroUsuario;
        do {
            numeroUsuario = comprobarNumero();
            if(numeroUsuario>=0) {
                suma += numeroUsuario;
                contador++;
            }
        } while (numeroUsuario >= 0);
        return suma / contador;
    }

    console.log("La media es: " + mediaPositivos());
}