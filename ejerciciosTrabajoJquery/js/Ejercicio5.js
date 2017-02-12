/**
 * Created by Miguel Ángel Zamora Blanco on 03/02/2017.
 * Mediante un boton añade efectos y con otro muestras la longitud de la cola de efectos.
 */

$(document).ready(function () {
    $("#cuadrado").css({
        height: "400px",
        width: "400px",
        background: "green"
    });

    $("#boton").on("click", function () {
        $("#cuadrado").fadeOut("400");
        $("#cuadrado").fadeIn("400");
    });

    $("#botonMostrar").on("click", function () {
        $("#texto").html("El número de efectos en la cola es: " + $("#cuadrado").queue().length);
    });

});