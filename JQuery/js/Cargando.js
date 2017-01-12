/**
 * Created by Miguel Ángel Zamora Blanco on 10/01/2017.
 */

$(document).ready(function () {
   $("#enlaceajax").click(function(event){
       event.preventDefault();
       $("#cargando").css("display", "inline");
       $("#destino").load("Demo6.html", function(){
           $("#cargando").css("display", "none");
       })
   })
});