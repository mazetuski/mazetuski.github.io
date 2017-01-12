/**
 * Created by Miguel Ángel Zamora on 12/01/2017.
 */

$(document).ready(function(){
    $("a").data("valor", "valorDefecto");
    $("#guardar").click(function(evento){
       $("a").data("valor", "mivalor");
        $("#mensaje").html("He guardado mivalor en todos los enlaces");
    });
    $("#guardarenlace1").click(function(evento){
        $("#enlace1").data("valor", "otrovalor");
        $("#mensaje").html("He guardado otrovalor en el primer enlace");
    })

    $("a").click(function(evento){
        evento.preventDefault();
        $("#mensaje").html("El valor guardado es "+$(this).data("valor"));
    });
});