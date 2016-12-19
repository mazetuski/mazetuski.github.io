/**
 * Created by MIGUEL ÁNGEL ZAMORA BLANCO on 15/12/2016.
 */

{
    let ventanaNueva;
    let arrayDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    /**
     * Función que devuelve un mensaje segun la hora de una fecha.
     * @param fecha Fecha de la que se obtiene la hora.
     * @returns {string} Devuelve una cadena con un mensaje segun la hora.
     */
    let mensajeSegunHora = function (fecha) {
        let hora = fecha.getHours();
        let minutos = fecha.getMinutes();

        if (hora >= 18 && hora <= 23)
            if ((hora == 18 && minutos > 0) || hora > 18)
                return "Son las " + fecha.getHours() + ":" + fecha.getMinutes() + "Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
        if (hora >= 0 && hora < 8)
            return "Son las " + fecha.getHours() + ":" + fecha.getMinutes() + "Ya es hora de que comiences a trabajar. Hay que levantar el país.";
        if (hora >= 8 && hora <= 18)
            if ((hora == 18 && minutos == 0) || hora < 18)
                return "Son las " + fecha.getHours() + ":" + fecha.getMinutes() + " Pronto llegan las vacaciones. Aguanta";

    }

    /**
     * Función que crea párrafos con mensajes y los muestra en el documento.
     */
    let informar = function () {
        let fecha = new Date();
        let parrafo = document.createElement("p");
        let texto = document.createTextNode("Hoy es " + arrayDias[fecha.getDay()]);
        let parrafo2 = document.createElement("p");
        let texto2 = document.createTextNode(mensajeSegunHora(fecha));
        parrafo.appendChild(texto);
        parrafo2.appendChild(texto2);
        document.body.appendChild(parrafo);
        document.body.appendChild(parrafo2);
    }
    /**
     * Función que limpia un contenedor.
     */
    let limpiar = function(){
        this.innerHTML = "";
    }

    /**
     * Función que muestra un mensaje con la posición del ratón del usuario.
     * @param elEvento
     */
    let posicionBoton = function (elEvento) {
        this.innerHTML = "Posición Ratón: X: "+elEvento.clientX+", Y: "+elEvento.clientY;
        setTimeout(limpiar.bind(this), 2000);
    }

    /**
     * Función que cierra la ventana.
     */
    let cerrarVentana = function () {
        window.close();
    }

    /**
     * Función que escribe en el documento, carga los elementos del arbol dom y añade los eventos.
     */
    let init = function(){
        document.open();
        document.write("<h1>Miguel Ángel Zamora Blanco</h1>" +
            "<input type='button' id='informar' value='Informa'>" +
            "<input type='button' id='raton' value='Ratón'>" +
            "<input type='button' id='salir' value='Salir'>" +
            "<div id='contenedor'></div>");

        document.close();


        let botonInforma = document.getElementById("informar");
        let botonRaton = document.getElementById("raton");
        let botonSalir = document.getElementById("salir");
        let contenedor = document.getElementById("contenedor");

        botonInforma.addEventListener("click", informar);
        botonRaton.addEventListener("click", posicionBoton.bind(contenedor));
        botonSalir.addEventListener("click", cerrarVentana);
    }

    window.onload = init;
}