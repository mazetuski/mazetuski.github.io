/**
 * Created by Miguel Ángel Zamora Blanco on 10/01/2017.
 */

$(document).ready(function () {
    $("#ocultar").click(function(evento){
        evento.preventDefault();
        $("#capaefectos").hide("fast");
    });
    $("#mostrar").click(function(evento){
       evento.preventDefault();
        $("#capaefectos").show(3000);
    });
});