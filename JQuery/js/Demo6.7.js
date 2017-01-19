/**
 * Created by Miguel Ángel Zamora Blanco on 15/01/2017.
 */

$(function () {
    $(".verde").on("click", function (e) {
        let elem = $(this);
        if (elem.html() != "Has hecho click")
            elem.html("Has hecho click");
        else
            elem.html("Has vuelto a hacer click");
    });

    $("#insertarelem").click(function(e){
       e.preventDefault();
        let elemento = $("<div class='verde'>Nuevo elemento verde</div>");
        elemento.appendTo($(document.body));
    });
});