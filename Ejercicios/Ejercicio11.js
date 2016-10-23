/**
 * Created by Miguel Ángel Zamora Blanco on 09/10/2016.
 */

{
    let enlaces = document.getElementsByTagName("a");
    let parrafos = document.getElementsByTagName("p");
    let numeroEnlacesPrueba = 0;
    let enlacesTercerParrafo = parrafos[2].getElementsByTagName("a");

    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == "http://prueba/")
            numeroEnlacesPrueba++;
    }

    alert("El numero de enlaces es: " + enlaces.length + "\n"
        + "Direccion del penultimo enlace: " + enlaces[enlaces.length - 2].href + "\n"
        + "Numero de enlaces que enlazan a http://prueba/: " + numeroEnlacesPrueba + "\n"
        + "Numero de enlaces del tercer parrafo: " + enlacesTercerParrafo.length);

}