/**
 * Created by Miguel Ángel Zamora blanco on 17/01/2017.
 */

$(function(){
   $(".ch").checkboxPersonalizado();
    $("#otro").checkboxPersonalizado({
       activo : false,
        imagen: {
            activo: "images/weather_cloudy.png",
            pasivo: "images/weather_rain.png"
        },
        textos: {
            activo: "Al mal tiempo :(",
            pasivo: "Buena cara :D"
        }

    });
});