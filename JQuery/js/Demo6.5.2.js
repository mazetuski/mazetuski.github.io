/**
 * Created by Miguel Ángel Zamora Blanco on 15/01/2017.
 */

$(function(){
   $("#mitexto").keypress(function(evento){
      evento.preventDefault();
       $("#loescrito").html(evento.which +": "+String.fromCharCode(evento.which));
   });
});