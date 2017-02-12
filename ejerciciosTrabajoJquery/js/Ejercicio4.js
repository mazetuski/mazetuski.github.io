/**
 * Created by Miguel Ángel Zamora Blanco on 03/02/2017.
 * A través de un boton y un input tipo texto se pueda añadir data a un elemento.
 */

$(document).ready(function () {
    $("#boton").click(function () {
        $("p").data("dato", $("#texto").val());
        $("p").html("Data introducido = " + $("p").data("dato"));
    })
});