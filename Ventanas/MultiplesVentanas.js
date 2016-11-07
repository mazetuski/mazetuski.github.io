/**
 * Created by Miguel Ángel Zamora Blanco on 05/11/2016.
 */

{
    let ventanaMultiple;

    /**
     * Función que crea multiples ventanas con un botón para cerrarlas.
     */
    let multipleVentana = function(){
        let top=-20;
        let left=-20;
        for (let i=0; i<5; i++) {
            ventanaMultiple= window.open("", "segundaPag"+i, "top="+(top+=20)+", left="+(left+=20)+", width=300, height=300");
            ventanaMultiple.document.open();
            ventanaMultiple.document.write(generarEsqueleto(i));
        }
    }

    let generarEsqueleto=function(numeroVentana){
        return "<html>"+
        "<head>"+
        "<title>Nueva Ventana</title>"+
        "</head>"+
        "<body>"+
        "<h1>Ventana"+numeroVentana+"</h1>"+
        "<input type='button' value='cerrar' onclick='window.close()'></body></html>"
    }

    let init = function(){
        let botonVentana = document.getElementById("botonVentana");
        botonVentana.addEventListener("click", multipleVentana);
    }

    document.addEventListener("DOMContentLoaded",init);
}