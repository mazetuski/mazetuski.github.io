/**
 * Created by Miguel Ángel Zamora Blanco on 19/01/2017.
 */

$(function () {
    let iluminado = false;
    $("h1").animate({
        "color": "#f86"
    }, 3000);
    $("h2").click(function (e) {
        let elem = $(this);
        if (iluminado) {
            elem.animate({
                "background-color": "#ffc"
            }, 500);
        } else {
            elem.animate({
                "background-color": "#9f9"
            }, 500);
        }
        iluminado = !iluminado;
    })
})
;