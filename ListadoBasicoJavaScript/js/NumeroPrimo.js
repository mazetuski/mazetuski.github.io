/**
 * Created by Miguel Ángel Zamora Blanco on 13/10/2016.
 *
 * Implenta NumeroPrimo que pida un número e indique si es primo o no.
 */

comprobarPrimo();

/**
 * Función que comprueba que un número que indica el usuario es primo.
 */
function comprobarPrimo() {
    let numero = comprobarNumeroEntero();
    if (esPrimo(numero))
        console.log("El número " + numero + " es primo");
    else
        console.log("El número " + numero + " no es primo");
}

/**
 * Función que determina si un número es primo o no.
 * @param numeroEntero El numero que se comprueba.
 * @returns {boolean} True si es primo, False en caso contrario.
 */
function esPrimo(numeroEntero) {
    let contador = 0;
    for (let i = 1; i < numeroEntero; i++)
        if (numeroEntero % i === 0)
            contador += 1;
    if (contador <= 1)
        return true;
    return false;
}

/**
 * Comprueba que sea un numero entero.
 * @returns numeroEntero Devuelve el número.
 */
function comprobarNumeroEntero() {
    do {
        var numeroEntero = prompt("Introduce un número entero");
    } while (numeroEntero != parseInt(numeroEntero).toFixed());
    return numeroEntero;
}