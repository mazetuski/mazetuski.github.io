/**
 * Created by Miguel Ángel Zamora Blanco on 14/01/2017.
 */

$(function () {
    let click = 0;
    let dblclick = 0;
   $("#micapa").click(function(evento){
        click++;
       $("#mensaje").html("Has hecho clic<br>" + "Número de clics: " + click + "<br>Número de doble clics: " + dblclick);
   });

    $("#micapa").dblclick(function(){
        dblclick++;
        $("#mensaje").html("Has hecho doble-clic<br>" + "Número de clics: " + click + "<br>Número de doble clics: " + dblclick);
    })
});
