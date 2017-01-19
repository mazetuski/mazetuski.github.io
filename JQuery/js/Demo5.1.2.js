/**
 * Created by Miguel Ángel Zamora Blanco on 13/01/2017.
 */

$(function(){
    $("#micapa").css({
        "background-color": "#ff8800",
        "position": "absolute",
        "width": "100px",
        "top": "100px",
        "left": "200px"
    })

    $("#fondogris").click(function(evento){
      evento.preventDefault();
       $("#micapa").css("background-color", "grey");
   });

    $("#fondonaranja").click(function(evento){
        evento.preventDefault();
        $("#micapa").css("background-color", "orange");
    });

    $("#ocultarmostrar").click(function(evento){
        evento.preventDefault();
        $("#micapa").toggle();
    });

    $("#micapa").mouseover(function(){
       let left = parseInt($(this).css("left"))+20;
        $(this).css("left", left+"px");
    });

    $("#micapa").click(function(){
        $(this).css("width", function(index, valor){
            let annadir = prompt("Cuanto desea agrandar la caja?");
            return parseInt(valor) + parseInt(annadir) + "px";
        });
    });
});