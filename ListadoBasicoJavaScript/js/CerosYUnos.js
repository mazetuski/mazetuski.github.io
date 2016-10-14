/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número
 * de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.
 */

{
    /**
     * Función que pide una secuencia de números al usuario.
     * @returns {*} Devuelve la secuencia de números.
     */
    let secuenciaCerosYUnos = function () {
        let secuencia;
        do {
            secuencia = prompt("Introduzca ceros y unos");
        } while (secuencia != parseInt(secuencia))
        return secuencia;
    }

    /**
     * Función que cuenta los ceros de una secuencia.
     * @returns {string} Devuelve una cadena con el número de ceros de la secuencia.
     */
    let contarCeros = function () {
        let contadorCeros = 0;
        let secuencia;
        do {
            secuencia = secuenciaCerosYUnos();
            secuencia = secuencia.split("");
            for (let i = 0; i < secuencia.length; i++) {
                if (secuencia[i] === '2')
                    return "El numero de ceros total es: " + contadorCeros;
                if (secuencia[i] === '0')
                    contadorCeros++;
            }
        } while (true);
    }

    console.log(contarCeros());
}