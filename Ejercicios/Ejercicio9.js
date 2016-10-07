/**
 * Created by Miguel Ángel Zamora Blanco on 07/10/2016.
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas
 */

var cadena = prompt("Introduce una cadena: ");
var cadenaConNumeros = false;


if (comprobarCadena(cadena))
    alert("La cadena es inválida");
else
    minusculaMayuscula(cadena);


function minusculaMayuscula(cadena) {
    if (cadena === (cadena.toUpperCase()))
        alert("La cadena esta sólo en mayúsculas.");
    else if (cadena === (cadena.toLowerCase()))
        alert("La cadena esta sólo en minúsculas.");
    else
        alert("La cadena esta mezclada.");
}

function comprobarCadena(cadena) {
    for (var i = 0; i < cadena.length; i++) {
        cadena=cadena.replace(" ", "");
        if (cadena.charAt(i) >= 0)
            return true;
    }
    return false;
}
