/**
 * Created by Miguel Ángel Zamora Blanco on 19/01/2017.
 */


function colaEfectos(){
    let capa = $("#micapa");
    capa.animate({
        "font-size": "2em"
    }, 2000);
    capa.hide(1000);
    capa.show(1000);
    capa.animate({
        "left": "350px",
        "top": "50px"
    },1500);
    capa.animate({
        "font-size": ".75em"
    }, 2000);
    capa.animate({
        "left": "100px",
        "top": "20px"
    }, 1500, colaEfectos);
}

$(function(){
    colaEfectos();
});