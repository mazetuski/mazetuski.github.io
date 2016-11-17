/**
 * Created by Miguel Ángel Zamora Blanco on 14/11/2016.
 * 3.- Crea una página web con el siguiente comportamiento:
 * Un botón "bajar línea" para bajar una línea.
 * Un botón "subir línea" para subir una línea
 * Un botón "bajar" para bajar una página.
 * Un botón "subir" para subir una página.
 * Un botón "inicio" para ir al inicio del documento
 * Un botón "fin" para ir al final del documento.
 * Puedes utilizar los siguientes métodos de windows: scroll(), scrollBy(), scrollByLines(), scrollTo()
 */

{

    let bajarFinalPag = function(){
        window.scrollTo(0, window.document.body.clientHeight);
    }

    let subirPrincipioPag = function(){
        window.scrollTo(0,0);
    }

    let bajarUnaLinea = function(){
        window.scrollBy(0,document.getElementById("p").clientHeight+10);
    }

    let subirUnaLinea = function(){
        window.scrollBy(0,-(document.getElementById("p").clientHeight+10));
    }

    let bajarUnaPagina = function(){
        window.scrollBy(0,(window.innerHeight)-20);
    }

    let subirUnaPagina = function(){
        window.scrollBy(0,(-window.innerHeight)+20);
    }

    let init = function () {
        let bajarLinea = document.getElementById("bajarLinea");
        let subirLinea = document.getElementById("subirLinea");
        let bajarPag = document.getElementById("bajarPag");
        let subirPag = document.getElementById("subirPag");
        let inicio = document.getElementById("inicio");
        let fin = document.getElementById("fin");

        bajarLinea.addEventListener("click", bajarUnaLinea);
        subirLinea.addEventListener("click", subirUnaLinea);
        bajarPag.addEventListener("click", bajarUnaPagina)
        subirPag.addEventListener("click", subirUnaPagina)
        fin.addEventListener("click", bajarFinalPag);
        inicio.addEventListener("click", subirPrincipioPag);
    }

    window.onload = init;
}