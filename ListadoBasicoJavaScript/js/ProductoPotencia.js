/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * . Implementa ProductoPotencias que calcule y visualice el producto de las potencias de
 * 2 entre 0 y 10.
 */

{
    /**
     * Función que muestra el producto de las potencias de un número.
     * @param numero Numero que se calculan sus potencias.
     * @returns {string} Devuelve un mensaje con las potencias del 0 al 10 del número.
     */
    let productoPotencias = function(numero){
        let mensaje="Producto potencias de "+numero+" (0 al 10): ";
        for(let i=0; i<11; i++){
            if(i===0)
                mensaje+="\n"+numero+"^"+i+" = 1";
            else
                mensaje+="\n"+numero+"^"+i+" = "+Math.pow(numero, i);
        }
        return mensaje;
    }

    console.log(productoPotencias(2));
}