/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 */

{
    /**
     * Funcion que comprueba los numeros primos que hay desde 0
     * hasta el número introducido por el usuario.
     * @returns {string} Devuelve una cadena con los números primos
     */
    let comprobarNumeroPrimosSecuencia = function () {
        let mensaje = "";
        let contador = 0;
        let numeroEntero = comprobarNumeroEntero();
        for (let i = 1; i < numeroEntero; i++) {
            contador = 0;
            for (let j = 1; j < i; j++)
                if (i % j === 0)
                    contador++;
            if (contador <= 1)
                mensaje += " " + i;
        }
        return mensaje;
    }

    /**
     * Comprueba que sea un numero entero.
     * @returns numeroEntero Devuelve el número.
     */
    let comprobarNumeroEntero = function () {
        let numeroEntero;
        do {
            numeroEntero = prompt("Introduce un número entero");
        } while (numeroEntero != parseInt(numeroEntero).toFixed());
        return numeroEntero;
    }


    console.log(comprobarNumeroPrimosSecuencia());
}