/**
 * Created by Miguel Ángel Zamora Blanco on 05/02/2017.
 * Comprueba las distintas formas de ver el valor del atributo checked.
 */

$(document).ready(function(){
   $("input").on("click", function(){
       switch (this.id){
           case "botonAttr":
               $("#texto").html("El valor es: "+$(this).attr("checked"));
               break;
           case "botonProp":
               $("#texto").html("El valor es: "+$(this).prop("checked"));
               break;
           case "botonVal":
               $("#texto").html("El valor es: "+$(this).val("checked"));
               break;
       }
    })
});