/**
 * Created by Miguel Ángel Zamora Blanco on 05/02/2017.
 * Añade en un elemento el numero de veces a realizar los efectos mediante data, luego muestra la cola.
 */

$(document).ready(function () {
    $("#boton").on("click", function () {
        if (isNaN($("#texto").val()))
            $("#texto2").html("Tienes que almacenar un número");
        else
            $("#texto2").data("numero", $("#texto").val());
    });

    $("#botonEfectos").on("click", function () {
        for (let i = 0; i < $("#texto2").data("numero"); i++) {
            $("#texto2").fadeToggle(600)
        }
        $("#texto2").html($("#texto2").queue().length + " hay en la cola");
    });
});