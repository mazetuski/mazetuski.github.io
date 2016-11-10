/**
 * Created by Miguel Ángel Zamora Blanco on 10/11/2016.
 *
 * Implementa el método diaDeLaSemana() que devuelva 'lunes, martes... domingo'
 * del día actual o de la fecha indicada (similar al constructor)
 */

{
    let init = function () {
        let fecha = new Date();
        console.log(diaDeLaSemana(fecha));
    }

    /**
     * Functión que devuelve el dia de la semana dependiendo de la fecha.
     * @param fecha Fecha de la que se obtiene el dia de la semana.
     * @return El dia de la semana.
     */
    let diaDeLaSemana = function (fecha) {
        let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        let dia = fecha.getDay();
        return diasSemana[dia];
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