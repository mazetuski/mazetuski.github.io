/**
 * Created by Miguel Ángel Zamora Blanco on 09/02/2017.
 */

$(document).ready(function(){
   if(!navigator.cookieEnabled)
       $( "#dialog" ).dialog({
           dialogClass: "no-close",
           buttons: [
               {
                   text: "OK",
                   click: function() {
                       $( this ).dialog( "close" );
                   }
               }
           ]
       });

    $("#botonEntrar").toggle("fold", 2000)
});