/**
 * Created by Miguel Ángel Zamora Blanco on 12/11/2016.
 *
 * Muestra en  una lista la siguiente información. Cada uno de las etiquetas <ol> y <li> han de crearse mediante los métodos de document. Explica en cada uno la diferencia con respecto a los demás.
 * window.outerHeight
 * window.innerHeight
 * window.screen.availHeight
 * window.screen.height
 * window.document.clientHeight
 */

{
    let init = function () {
        document.body.innerHTML += "<ul>" +
            "<li>window.outerHeight: Muestra la altura de la página completa: " + window.outerHeight + "</li>" +
            "<li>window.innerHeight: Muestra la anchura de la página completa: " + window.innerHeight + "</li>" +
            "<li>window.screen.availHeight: Muestra la altura de la pantalla del usuario menos las interfaces como la barra de Windows: " + window.screen.availHeight + "</li>" +
            "<li>window.screen.height: Muestra la altura de la pantalla del usuario: " + window.screen.height + "</li>" +
            "<li>window.document.clientHeight: Muestra la altura del elemento seleccionado, en este caso el body: " + window.document.body.clientHeight + "</li>" +
            "</ul>";
    }

    window.onload = init;
}