/**
 * Created by Miguel Ángel Zamora Blanco on 12/01/2017.
 */

$(document).ready(function () {
    $("#boton").click(function(evento){
       let valor = $("#camposelector").prop("value");
        $(valor).hide("slow", function(){
            $(valor).show("slow");
        })
    });
});