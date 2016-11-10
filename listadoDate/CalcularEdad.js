/**
 * Created by Miguel Ángel Zamora Blanco on 10/11/2016.
 * Implementa el método calcularEdad()
 * que devuelva la edad indicando la fecha de nacimiento.
 * En caso de tener menos de un año,
 * indicar días y meses transcurridos. Indicar errores.
 */

{
    let init = function () {
        let fecha = new Date("Feb 1, 1995");
        let fechaMismoAño = new Date("Nov 8, 2016");
        let fechaMayorDia = new Date("Dec 22, 2014");
        let fechaMismoMes = new Date("Nov 9, 2014");
        let fechaIncorrecta = "asdsad";
        try {
            console.log(calcularEdad(fecha));
            console.log(calcularEdad(fechaMismoAño));
            console.log(calcularEdad(fechaMayorDia));
            console.log(calcularEdad(fechaMismoMes));
            console.log(calcularEdad(fechaIncorrecta));
        } catch (fechaException) {
            console.log(fechaException.aviso);
        }

    }

    /**
     * Función que calcula la edad a través de una fecha.
     * @param fecha FEcha con la que se calcula la edad.
     * @returns {string} Devuelve una cadena con la edad, si no es una fecha devuelve FechaException.
     */
    let calcularEdad = function (fecha) {
        if (!esFecha(fecha))
            throw new FechaException("No es una fecha.");
        let fechaActual = new Date();
        if (fecha.getFullYear() === fechaActual.getFullYear()) {
            let dia = fechaActual.getDate() - fecha.getDate();
            let mes = fechaActual.getMonth() - fecha.getMonth();
            return "Han transcurrido: " + dia + " dias y " + mes + " meses."
        } else {
            if (fechaActual.getMonth() < fecha.getMonth())
                return "Edad: " + ((fechaActual.getFullYear() - fecha.getFullYear()) - 1);
            else if (fechaActual.getMonth() === fechaActual.getMonth() && fechaActual.getDay() < fecha.getDay())
                return "Edad: " + ((fechaActual.getFullYear() - fecha.getFullYear()) - 1);
            else
                return "Edad: " + (fechaActual.getFullYear() - fecha.getFullYear());
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

    //Crea excepción
    let FechaException = function (aviso) {
        this.aviso = aviso;
        this.nombre = "FechaException";
    }

    window.onload = init;
}