/**
 * Created by Miguel Ángel Zamora Blanco on 10/11/2016.
 */

{
    let init = function () {
        let fecha = new Date();
        console.log(fecha);
        incrementaDias(2, fecha);
        console.log(fecha);
    }

    /**
     * Función que incrementa los días de una fecha.
     * @param diasAIncrementar días que se incrementa la fecha.
     * @param fecha fecha que se incrementa.
     */
    let incrementaDias = function (diasAIncrementar, fecha) {
        if (!esFecha(fecha))
            console.log("No es una fecha");
        else {
            fecha.setDate(fecha.getDate() + diasAIncrementar);
        }
    }

    /**
     * Función que devuelve true si es una fecha, false en caso contrario.
     * @param fecha Fecha que se comprueba.
     * @returns {boolean} True si es una fecha, false en caso contrario.
     */
    let esFecha = function (fecha) {
        return !isNaN(Date.parse(fecha));
    }

    window.onload = init;
}