/**
 * Created by Miguel Ángel Zamora Blanco on 06/10/2016.
 */

var valores=[true, 5, false, "hola", "adios", 2];
var mayor=valores[3]>valores[4];
var booleanTrue=valores[0] || valores[2];
var booleanFalse=valores[0] && valores[2];
var suma=valores[1]+valores[5];
var restar=valores[1]-valores[5];
var multiplicar=valores[1]*valores[5];
var division=valores[1]/valores[5];
var modulo=valores[1]%valores[5];
var mensaje="Mayor String \"hola\": "+mayor+"\nObtener resultados True y False: "+booleanTrue+
    ", "+booleanFalse+ "\nSuma: "+suma+"\nResta: "+restar+"\nMultiplicar: "+multiplicar+
    "\nDivision: "+division+"\nModulo: "+modulo;

alert(mensaje);