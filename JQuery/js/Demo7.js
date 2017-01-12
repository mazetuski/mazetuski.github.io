/**
 * Created by Miguel Ángel Zamora Blanco on 10/01/2017.
 */

$(document).ready(function(){
    $("#enlaceajax").click(function(evento){
        evento.preventDefault();
        $("#destino").load("Demo6.html", {nombre: "Miguel"}, function(){
            alert("Recibido los datos");
        });
    })
})