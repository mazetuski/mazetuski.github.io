/**
 * Created by Miguel Ángel Zamora Blanco on 14/11/2016.
 * Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 */

{
    let init = function () {
        let contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "<b>URL: "+location+"</b><ul><li>Protocolo: " + location.protocol + "</li><li>Host: " + location.hostname
            + "</li><li>Ruta: " + location.pathname + "</li><li>Puerto: " + location.port + "</li></ul>";
    }

    window.onload = init;
}