/**
 * Created by Miguel Ángel Zamora Blanco on 14/11/2016.
 * El objeto window dispone de las propiedades scrollX, scrollY y scrollbars.
 * Muéstralos reaccionando al evento scroll sobre window.
 */

{

    let init = function(){

        /**
         * Función que muestra la posición de la página dependiendo del scroll.
         */
        let mostrarScroll = function(){
            contenedor.innerHTML ="ScrollX: "+window.scrollX+
                                  "<br/>ScrollY: "+window.scrollY;
        }

        let contenedor = document.getElementById("contenedor");
        window.scrollbars.visibility=true;
        window.addEventListener("scroll", mostrarScroll);
    }


    window.onload = init;
}