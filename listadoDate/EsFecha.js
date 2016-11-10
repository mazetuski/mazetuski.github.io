/**
 * Created by Miguel Ángel Zamora Blanco on 10/11/2016.
 */

{
    let init = function(){
        let fecha1 =new Date("01/02/1990");
        let fecha2 = new Date("sdsad");
        console.log(esFecha(fecha1) + "\n"+esFecha(fecha2))
    }

    /**
     * Función que devuelve true si es una fecha, false en caso contrario.
     * @param fecha Fecha que se comprueba.
     * @returns {boolean} True si es una fecha, false en caso contrario.
     */
    let esFecha = function(fecha){
        return !isNaN(Date.parse(fecha));
    }

    window.onload = init;
}