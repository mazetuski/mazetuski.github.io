/**
 * Created by Miguel Ángel Zamora Blanco on 12/01/2017.
 */

$(document).ready(function(){
    $("#guardar").click(function(evento){
        let valor = $("#valor").prop("value");
        $("#division").data("valor", valor);
        $("#division").html("Se ha guardado el dato valor = "+valor);
    });
    $("#leer").click(function(evento){
        let valor = $("#division").data("valor");
        $("#division").html("He leido el dato valor = "+valor);
    });
    $("#eliminar").click(function (evento) {
        $("#division").removeData("valor");
        $("#division").html("Dato eliminado");
    });
});