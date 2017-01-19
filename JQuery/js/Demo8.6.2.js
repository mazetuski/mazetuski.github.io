/**
 * Created by Miguel Ángel Zamora Blanco on 19/01/2017.
 */

$(document).ready(function () {
    $("#botoncomenzar").click(function () {
        capa = $("#micapa");
//encolo directamente funciones que son efectos
        capa.animate({"width": "80px"}, 1000);
//para encolar otras funciones utilizo queue()
        capa.queue(function () {
            $(this).css({
                "border": "3px solid #339",
            });
            $("#botoncomenzar").text("Acabo de ponerle el borde... ");
            $(this).dequeue();
        });
        capa.animate({"height": "200px"}, 2000);
        capa.queue(function (continua) {
            $(this).css({
                "border": "0px"
            });
            $("#botoncomenzar").text("Quitado el borde... ");
            continua();
        });
        capa.animate({
            "height": "50px",
            "width": "400px"
        }, 1000);
    });
});