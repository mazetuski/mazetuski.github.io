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
        let h1 = document.createElement("h1");
        h1.textContent="Ejercicio 1 Listado Window";
        document.body.appendChild(h1);
        let lista = document.createElement("ul");
        let outer = document.createElement("li");
        let texto= document.createTextNode("window.outerHeight: Muestra la altura de la página completa:"+ window.outerHeight);
        outer.appendChild(texto);
        let inner = document.createElement("li");
        texto= document.createTextNode("window.innerHeight: Muestra la altura de la página completa: " + window.innerHeight);
        inner.appendChild(texto);
        let availHeight = document.createElement("li");
        texto= document.createTextNode("window.screen.availHeight: Muestra la altura de la pantalla del usuario menos las interfaces como la barra de Windows: " + window.screen.availHeight);
        availHeight.appendChild(texto);
        let height = document.createElement("li");
        texto= document.createTextNode("window.screen.height: Muestra la altura de la pantalla del usuario: " + window.screen.height);
        height.appendChild(texto);
        let clientHeight = document.createElement("li");
        texto= document.createTextNode("window.document.clientHeight: Muestra la altura del elemento seleccionado, en este caso el body: " + window.document.body.clientHeight);
        clientHeight.appendChild(texto);
        lista.appendChild(outer);
        lista.appendChild(inner);
        lista.appendChild(availHeight);
        lista.appendChild(height);
        lista.appendChild(clientHeight);
        document.body.appendChild(lista);
    }

    let limpiarPantalla = function(){
        document.body.innerHTML="";
    }

    window.onload = init;
    window.addEventListener("resize", limpiarPantalla);
    window.addEventListener("resize", init);
}