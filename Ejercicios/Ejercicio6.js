/**
 * Created by Miguel Angel Zamora Blanco on 06/10/2016.
 */

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
    'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDni=prompt("Número Dni: ");

if(numeroDni<1 || numeroDni>99999999)
    alert("Numero invalido");
else{
    var letraDni=prompt("Indroduzca la letra del dni: ");
    letraCalculada=letras[numeroDni%23];
    if(letraCalculada==letraDni.toUpperCase())
        alert('El dni es correcto');
    else
        alert('El dni no es correcto');
}

