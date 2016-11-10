/**
 * Created by Miguel Ángel Zamora Blanco on 10/11/2016.
 * Implementa el método esBisiesto()
 * que devuelva si una fecha/año es bisiesto o no.
 * En caso de que el argumento no sea una fecha, que salte una excepción.
 * Admitirá tantos parámetros como el constructor Date().
 * Pruébalo con varias invocaciones fallidas (y capturadas)
 */

{
    let init = function () {
        let fechaBisiesta = new Date();
        let fechaNoBisiesta = new Date("01/01/2015");
        let fechaError = new Date("");
        let fechaMayorDia = new Date("25/12/1995");
        try {
            console.log(esBisiesto(fechaBisiesta));
            console.log(esBisiesto(fechaNoBisiesta));
            console.log(esBisiesto(fechaError));
            console.log(esBisiesto(fechaMayorDia));
        }catch(fechaException){
            console.log(fechaException.aviso);
        }
    }

    /**
     * Función que comprueba si un año es bisiesto.
     * @param fecha Fecha que se comprueba.
     * @returns {*} una cadena diciendo si es bisiesto o no;
     */
    let esBisiesto = function (fecha) {
        if (!esFecha(fecha))
            throw new FechaException("No es una fecha.")
        let anio = fecha.getYear();
        if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0)))
            return "Es bisiesto";
        return "No es bisiesto";
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