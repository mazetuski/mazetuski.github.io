/**
 * Created by Miguel Ángel Zamora Blanco on 05/11/2016.
 */

{
    let nuevaVentana;
    let width = 300;
    let height = 300;

    /**
     * Función que crea una nueva ventana con una determinada posición y tamaño mostrando sus propiedades.;
     */
    let paginaNueva = function () {
        nuevaVentana = window.open("", "segundaPag", "top=0, left=0, width=" + width + ",height=" + height);
        nuevaVentana.document.write(generarEsqueleto(width, height));
    }

    let generarEsqueleto = function (width, height) {
        return "<html>" +
            "<head>" +
            "<title>Nueva Ventana</title>" +
            "</head>" +
            "<body><p>Se han usado las propiedades:</p><ul><li>Width:" + width + "</li><li>Height: " + height + "</li></ul>" +
            "<input type='button' value='cerrar' onclick='window.close()'></body></html>"
    }

    let init = function () {
        let botonNuevo = document.getElementById("boton");
        botonNuevo.addEventListener("click", paginaNueva);
    }

    window.onload = init;
}