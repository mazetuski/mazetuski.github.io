/**
 * Created by Miguel Ángel Zamora Blanco on 12/01/2017.
 */

$(document).ready(function(){
   let parrafos = $("p");
    let elementos = $(".mitexto");
    $("body").append("El número de párrafos es "+parrafos.length);
    $("body").append("<p>Hay "+elementos.length+" elementos de la clase mitexto</p>");
});