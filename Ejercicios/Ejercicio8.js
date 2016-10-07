/**
 * Created by Miguel Ángel Zamora Blanco on 07/10/2016.
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 * como resultado una cadena de texto que indica si el número es par o impar.
 * Mostrar por pantalla el resultado devuelto por la función.
 */

var numeroEntero = prompt("Introduce un número entero:");

if (numeroEntero != parseInt(numeroEntero).toFixed())
    alert("El número es inválido.");
else
    alert(parImpar(numeroEntero));

function parImpar(numero) {
    if (numero % 2 == 0)
        return "El número " + numero + " es par.";
    return "El número " + numero + " es impar."
}