/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
 * a. Cuántas cifras tiene (7 cifras)
 * b. Lo muestre del revés
 */

{
    /**
     * Comprueba que sea un numero del 1 al 10.
     * @returns numero Devuelve el número.
     */
    let comprobarNumeroUnoAlDiez = function () {
        do {
            var numero = prompt("Introduce un número del 0 al 10");
        } while ((numero != parseFloat(numero)) || (numero < 0 || numero > 10));
        return numero;
    }

    /**
     * Función que cuenta las cifras de un número.
     * @param numero
     * @returns {number}
     */
    let contarCifras = function (numero) {
        let contador = 0;
        numero = numero.split("");
        for (let i = 0; i < numero.length; i++)
            if (numero[i] != '.')
                contador++;
        return contador;
    }

    let mostrarNumeroAlReves = function (numero) {
        numero = numero.split("").reverse();
        numero = numero.join("");
        return numero;
    }

    let decena = function () {
        let numeroUnoAlDiez = comprobarNumeroUnoAlDiez();
        console.log("Tiene " + contarCifras(numeroUnoAlDiez) + " cifras");
        console.log("El número al revés será: " + mostrarNumeroAlReves(numeroUnoAlDiez));
    }

    decena();

}