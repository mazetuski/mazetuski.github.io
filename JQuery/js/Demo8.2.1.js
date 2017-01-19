/**
 * Created by Miguel Ángel Zamora Blanco on 19/01/2017.
 */

$(function(){
    $("#animar").click(function(e){
        e.preventDefault();
        $("h1").animate({
            'border-bottom-width': '20',
            'font-size': '25pt'
        })
    });

    $("#restaurar").click(function(e){
        e.preventDefault();
        $("h1").animate({
            'border-bottom-width': '1',
            'font-size': '15pt'
        })
    })

});
