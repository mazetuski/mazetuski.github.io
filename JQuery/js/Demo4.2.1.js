/**
 * Created by Miguel Ángel Zamora Blanco on 13/01/2017.
 */

$(function(){
   $(".fecha").prop("value", function(){
      let fecha = new Date();
       return (fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear());
   });
});