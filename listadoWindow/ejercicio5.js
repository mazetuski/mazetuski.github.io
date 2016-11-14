/**
 * Created by Miguel Ángel ZAmora Blanco on 14/11/2016.
 * 5.- Reloj. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h"
 */

{
    let init = function(){
        let contenedor = document.getElementById("contenedor");

        let mostrarHora = function(){
            let fecha = new Date();
            contenedor.innerHTML= fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
        }
        window.setInterval(function(){mostrarHora()}, 1000);
    }

    window.onload = init;
}