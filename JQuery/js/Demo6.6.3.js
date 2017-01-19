/**
 * Created by Miguel Ángel Zamora Blanco on 15/01/2017.
 */

$(function () {
    function clickAlerta() {
        alert("Has clickado en el enlace");
    }

    $(".miclase").bind("click", clickAlerta);
    $("#quitarevento").bind("click", function () {
        $(".miclase").unbind("click", clickAlerta);
    });
});