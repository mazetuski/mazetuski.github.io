/**
 * Created by Miguel Ángel Zamora Blanco on 10/11/2016.
 * Implementa el método calcularHastaFinDeAnno() que devuelva los días que quedan hasta fin de año.
 */

{
    let init = function(){
        let fecha1 = new Date();
        let fecha2 = new Date("Dec 1, 2016");
        try{
            console.log("Número de días hasta fin de año es: "+calculaFinAnio(fecha1));
            console.log("Número de días hasta fin de año es: "+calculaFinAnio(fecha2));
        }catch (fechaException){
            console.log(fechaException.aviso);
        }
    }

    /**
     * Función que calcula en número de dias hasta fin de año.
     * @param fecha Fecha donde se empiezan a contar los días.
     * @returns {number} Devuelve el número de días.
     */
    let calculaFinAnio = function(fecha){
        if (!esFecha(fecha))
            throw new FechaException("No es una fecha.");
        let diasHastaFinAnio = 0;
        let fechaUltimoDia;
        for(let i=fecha.getMonth(); i<12; i++){
            if(i==fecha.getMonth()) {
                fechaUltimoDia= new Date(fecha.getFullYear(), i+1, 0);
                diasHastaFinAnio+= fechaUltimoDia.getDate() - fecha.getDate();
            }else if(i==11)
                diasHastaFinAnio+=31;
            else{
                fechaUltimoDia = new Date(fecha.getFullYear(), i+1, 0);
                diasHastaFinAnio+=fechaAux.getDate();
            }
        }
        return diasHastaFinAnio;
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
