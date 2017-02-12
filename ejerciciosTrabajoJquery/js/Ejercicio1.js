/**
 * Created by Miguel Ángel Zamora Blanco on 02/02/2017.
 * A través del metodo each pon un color aleatorio a los párrafos de un documento.
 */

$(document).ready(function(){
    let arrayColores = ["66", "22", "33", "FF", "00"];

    let generaColor = function(arrColor){
        let colores = "#";
        for (let i=0; i<3; i++)
            colores+= arrColor[Math.floor(Math.random()*arrColor.length)];
        return colores;
    }

    $("p").each(function(){
        $(this).css("color", generaColor(arrayColores));
    })

});