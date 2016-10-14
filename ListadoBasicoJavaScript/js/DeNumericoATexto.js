/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre
 * escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que
 * sea lo más eficiente posible
 */

{

    /**
     * Comprueba que sea un numero entero.
     * @returns numeroEntero Devuelve el número.
     */
    let comprobarNumeroEntero = function () {
        do {
            var numeroEntero = prompt("Introduce un número entero");
        } while (numeroEntero != parseInt(numeroEntero).toFixed());
        return parseInt(numeroEntero);
    }

    /**
     * Función que comprueba las unidades y las muestra escritas.
     * @param numero Numero del que se sacan las unidades.
     * @returns {*} Devuelve una cadena con las unidades escritas.
     */
    let comprobarUnidades = function (numero) {
        switch (numero) {
            case 1:
                return "UNO";
            case 2:
                return "DOS";
            case 3:
                return "TRES";
            case 4:
                return "CUATRO";
            case 5:
                return "CINCO";
            case 6:
                return "SEIS";
            case 7:
                return "SIETE";
            case 8:
                return "OCHO";
            case 9:
                return "NUEVE";
        }
    }

    /**
     * Función que añade una unidad escrita a una decena.
     * @param decena Decena que se escribe.
     * @param unidad Unidad que se escribe.
     * @returns {*} Devuelve una cadena con la unidad y la decena juntas.
     */
    let decenasMasY = function (decena, unidad) {
        if (unidad > 0)
            return decena + " Y " + comprobarUnidades(unidad);
        return decena;
    }

    /**
     * Función que comprueba las decenas y las muestra escritas.
     * @param numero Numero del que se saca las decenas.
     * @returns {*} Devuelve una cadena con el numero escrito.
     */
    let comprobarDecenas = function (numero) {
        let decena = Math.floor(numero / 10);
        let unidad = numero - (decena * 10);
        switch (decena) {
            case 1:
                switch (unidad) {
                    case 0:
                        return "DIEZ";
                    case 1:
                        return "ONCE";
                    case 2:
                        return "DOCE";
                    case 3:
                        return "TRECE";
                    case 4:
                        return "CATORCE";
                    case 5:
                        return "QUINCE";
                    default:
                        return "DIECI" + comprobarUnidades(unidad);
                }
            case 2:
                switch (unidad) {
                    case 0:
                        return "VEINTE";
                    default:
                        return "VEINTI" + comprobarUnidades(unidad);
                }
            case 3:
                return decenasMasY("TREINTA", unidad);
            case 4:
                return decenasMasY("CUARENTA", unidad);
            case 5:
                return decenasMasY("CINCUENTA", unidad);
            case 6:
                return decenasMasY("SESENTA", unidad);
            case 7:
                return decenasMasY("SETENTA", unidad);
            case 8:
                return decenasMasY("OCHENTA", unidad);
            case 9:
                return decenasMasY("NOVENTA", unidad);
        }
    }

    console.log(comprobarDecenas(comprobarNumeroEntero()));
}