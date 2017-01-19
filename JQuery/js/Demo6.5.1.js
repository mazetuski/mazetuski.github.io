/**
 * Created by Miguel Ángel ZAmora Blanco on 15/01/2017.
 */

$(function(){
    function operaEvento (evento) {
        $("#loescrito").html($("#loescrito").html() + " " + evento.type + ": "+ evento.which);
    };

    $(document).keydown(operaEvento);
    $(document).keypress(operaEvento);
    $(document).keyup(operaEvento);

});