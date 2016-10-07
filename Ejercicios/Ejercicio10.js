/**
 * Created by Miguel Ángel Zamora Blanco on 07/10/2016.
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
 * palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
 * Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

 */

var cadena = prompt("Introduce una cadena:");

if (comprobarCadena(cadena))
    alert("La cadena es inválida");
else
    palindromo(cadena);

function palindromo(cadena) {
    var cadenaRevertida = "";
    for (var i = cadena.length - 1; i >= 0; i--) {
        //Preguntar
        cadena = cadena.replace(" ", "");
        cadenaRevertida += cadena.charAt(i);
    }
    if (cadena.toUpperCase() === cadenaRevertida.toUpperCase())
        alert("Es palíndromo.");
    else
        alert("No es palíndromo.");
}

function comprobarCadena(cadena) {
    for (var i = 0; i < cadena.length; i++) {
        cadena = cadena.replace(" ", "");
        if (cadena.charAt(i) >= 0)
            return true;
    }
    return false;
}