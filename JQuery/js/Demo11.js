/**
 * Created by Miguel Ángel Zamora Blanco on 12/01/2017.
 */

$(document).ready(function(){
   $("div").each(function(i){
      let elemento = $(this);
       if(elemento.html() == "white")
        return true;
       if(elemento.html() == "nada")
       return false;
       elemento.css("color", elemento.html());
   });
});