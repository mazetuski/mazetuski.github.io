/**
 * Created by Miguel Ángel Zamora Blanco on 12/01/2017.
 */

$(document).ready(function () {
    $("p").each(function (i) {
        if (i % 2 == 0)
            $(this).css("color", "#000000")
        else
            $(this).css("color", "#4285F4")
            });
});