/**
 * Created by Miguel Ángel Zamora Blanco on 26/12/2016.
 */


$(document).ready(function () {

    $("#botonFiltro").click(function () {
        $("aside").slideToggle("200");
    });

    $(window).resize(function () {
        if (window.screen.width > 700)
            $("aside").slideDown();
        else
            $("aside").slideUp();
    });
});