/**
 * Created by Miguel Ángel Zamora Blanco on 13/10/2016.
 * Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete
 */

deSieteEnSiete();

/**
 * Función que muestra los números de 100 a 0 de siete en siete.
 */
function deSieteEnSiete() {
    let mensaje = "";
    for (let i = 100; i >= 0; i -= 7)
        mensaje += " " + i;
    console.log(mensaje);
}
