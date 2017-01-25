/**
 * Created by Miguel Ángel Zamora Blanco on 21/01/2017.
 */

$(document).ready(function(){
   let botones = $("<input type='button' value='Informa' id='informa'>" +
       "<input type='button' value='Ratón' id='raton'>" +
       "<input type='button' value='Salir' id='salir'><div id='Escribe'></div><div id='escribeInforma'></div>");
    $(document.body).append(botones);
    $("#raton").click(function(e){
        let texto = $("<p>El ratón estaba en: x="+e.clientX+", y="+e.clientY+"</p>");
        $("#Escribe").html(texto);
    });

    $("#salir").click(function(){
       window.close();
    });

    $("#informa").click(function(){
        $("#escribeInforma").html(mensajeSegunHora());
    });

    let mensajeSegunHora = function(){
        let fecha = new Date();
        let hora = fecha.getHours();
        let minutos = fecha.getMinutes();

        if (hora >= 18 && hora <= 23)
            if ((hora == 18 && minutos > 0) || hora > 18)
                return "Son las " + fecha.getHours() + ":" + fecha.getMinutes() + " Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
        if (hora >= 0 && hora < 8)
            return "Son las " + fecha.getHours() + ":" + fecha.getMinutes() + " Ya es hora de que comiences a trabajar. Hay que levantar el país.";
        if (hora >= 8 && hora <= 18)
            if ((hora == 18 && minutos == 0) || hora < 18)
                return "Son las " + fecha.getHours() + ":" + fecha.getMinutes() + " Pronto llegan las vacaciones. Aguanta";

    }
});