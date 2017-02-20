/**
 * Created by Miguel Ángel Zamora Blanco on 17/02/2017.
 */

$(document).ready(function () {

    $("#mostrar").on("click", function () {
        // $("main").load($("#buscador").value, )
        $.ajax({
                url: $("#buscador").val(),
                type: "GET",
                dataType: "text",
                error: function (xhr) {
                    $("#contenido").html("");
                    $("#estado").html("Estado: " + xhr.readyState);
                    $("#estadoServidor").html("Estado Servidor: " + xhr.status + ", " + xhr.statusText);
                }
            })
            .done(function (r, text, xhr) {
                $("#contenido").html("<xmp>" + r + "</xmp>");
                $("#estado").html("Estado: " + xhr.readyState);
                $("#estadoServidor").html("Estado Servidor: " + xhr.status + ", " + xhr.statusText);
            })
            .fail(function (xhr) {
                $("#contenido").html("");
                $("#estado").html("Estado: " + xhr.readyState);
                $("#estadoServidor").html("Estado Servidor: " + xhr.status + ", " + xhr.statusText);
            });
        /*.always(function (data, textStatus, xhr) {
         let ready = data.readyState || xhr.readyState;
         let estado = data.status || xhr.status;
         let estadoTexto = data.statusText || xhr.statusText;
         $("#estado").html("Estado: "+ready);
         $("#estadoServidor").html("Estado Servidor: " + estado + ", " + estadoTexto);
         });*/
    });

});