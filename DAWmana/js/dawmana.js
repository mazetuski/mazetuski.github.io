/**
 * Created by maze on 26/02/2017.
 */

$(document).ready(function () {
    $("#hamburguesa").on("click", function () {
        $("nav").slideToggle(0);
    });

    $("nav").on("click", "a", function () {
        if($(window).innerWidth() < "1000")
            $("nav").slideUp(0);
    });

    $(window).on("resize", function () {
        if ($(window).innerWidth() > 1000)
            $("nav").slideDown(500);
    });

    $("#botonInicio").on("click", function(e){
        e.preventDefault();
        $("main").removeClass("alinearCentrado");
        $("main").html("");
        $("main").append("<div class='titulo'><h2>Cartel</h2></div>");
        $("main").append("<img src='images/CartelSysmana17.jpg'>");
    });

    $("#botonPonentes").on("click", function(e){
        e.preventDefault();
        $("main").removeClass("alinearCentrado");
        $("main").html("");
        $("main").append("<div class='titulo'><h2>Ponentes</h2></div>");
        $.getJSON("php/ponentes.php", function(data){
            $.each(data, function(i, ponentes){
                $("main").append("<div class='contenedorPonentes'><header><img src='images/"+ponentes.foto+"'></header><h4>"+ponentes.nombre+" "+ponentes.apellidos+" ("+ponentes.empresa+")</h4>"+"<p>"+ponentes.observacion+"</p>");
            })
        });
    });

    $('#botonRegistroActividad').on("click", function(e){
        e.preventDefault();
        $("main").addClass("alinearCentrado");
        $("main").load("php/actividad.php");
    });

    $("#botonRegistroAsistentes").on("click", function(e){
        e.preventDefault();
        $("main").addClass("alinearCentrado");
        $("main").load("php/registro.php");
    });

    $("#botonActividades").on("click", function(e){
        e.preventDefault();
        $("main").removeClass("alinearCentrado");
        $("main").html("");
        $("main").append("<div class='titulo'><h2>Actividades</h2></div>");
        $.getJSON("php/mostrarActividades.php", function(data){
            console.log("hola"+data);
            $.each(data, function(i, actividades){
                $("main").append("<div class='contenedorActividades'>" +
                    "<h3>"+actividades.nombre+"</h3>" +
                    "<p><label>Ponente: </label>"+actividades.nombrePonente+"</p>" +
                    "<p><label>Material Asistentes: </label>"+actividades.materialA+"</p>" +
                    "<p><label>Hora: </label>"+actividades.hora+"</p>" +
                    "<p><label>Lugar: </label>"+actividades.lugar+"</p>" +
                    "<p><label>Nº Asistentes(Recomendado): </label>"+actividades.numAsist+"</p>" +
                    "<p>"+actividades.descE+"</p></div>");
            });
        });
    });


    $("nav").css("min-height", $(window).innerHeight());
    $(window).on("resize", function(){
        $("nav").css("min-height", $(window).innerHeight());
    });

    $.validate({
        modules: 'date, toggleDisabled',
        disableFormFilter: '#loginPonentes'
    });

    $(".dialogAccion").dialog();

    if(!navigator.cookieEnabled)
        $( "#dialog" ).dialog();


});