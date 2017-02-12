/**
 * Created by Miguel Ángel Zamora Blanco on 30/01/2017.
 */


$(document).ready(function () {

    $("#drag").css({
        width: "150px",
        height: "150px",
        padding: "0.5em",
        border: "1px solid black"
    });

    $("#drag").draggable();

    $("#acordeon").accordion();

    $("#boton").on("click", function(){
        $(".nueva").switchClass("nueva", "otra", 1000);
        $(".otra").switchClass("otra", "nueva", 1000);
    });
});