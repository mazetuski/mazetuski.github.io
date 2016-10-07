/**
 * Created by Miguel Angel Zamora Blanco on 06/10/2016.
 */

var numero = prompt("Introduce un número:");
var resultadoFactorial = 1;
var mensaje = "Factorial de: " + numero + " : "+numero;
for (var i = numero; i > 0; i--) {
    if(i>1)
        mensaje += " * " + (i-1);
    resultadoFactorial *= i;
}
mensaje += "= " + resultadoFactorial;
alert(mensaje);