/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si
 * es correcta. Si lo fuera, ha de mostrar la hora un segundo después.
 */

{
    /**
     * Comprueba que sea un numero.
     * @returns numeroEntero Devuelve el número.
     */
    let comprobarNumeroHora = function (mensaje) {
        do {
            var numero = prompt("Introduce " + mensaje);
        } while ((numero != parseInt(numero).toFixed()) && numero < 0);
        return numero;
    }

    /**
     * Metodo que comprueba si un número menor de 10 tiene un 0 a la izquierda.
     * @param numero Número que comprueba.
     * @returns {*} Devuelve el numero con un cero a la izquierda si es menor de 10,
     * en caso contrario devuelve el número.
     */
    let comprobarCeroIzquierda = function (numero) {
        if (numero < 10)
            numero = "0" + numero;
        return numero;
    }

    /**
     * Función que pide horas, minutos y segundos al usuario.
     */
    let pedirHora = function () {
        let horas = comprobarNumeroHora("la hora");
        let minutos = comprobarNumeroHora("los minutos");
        let segundos = comprobarNumeroHora("los segundos");
        return horas + ":" + minutos + ":" + segundos;
    }

    /**
     * Función que comprueba que la hora sea correcta.
     * @param hora Hora que comprueba.
     * @returns {string} Devuelve una cadena con la hora diciendo si es correcta o incorrecta.
     */
    let comprobacionHora = function (hora) {
        hora = hora.split(":");
        let horas = hora[0];
        let minutos = hora[1];
        let segundos = hora[2];

        if ((segundos > 0 && segundos < 60) && (minutos > 0 && minutos < 60) && (horas >= 0 && horas < 24)) {
            if (++segundos % 60 === 0) {
                segundos = 0;
                minutos++;
            }
            if (minutos % 60 === 0) {
                minutos = 0;
                horas++;
            }
            if (horas % 24 === 0)
                horas = 0;
            segundos = comprobarCeroIzquierda(segundos);
            minutos = comprobarCeroIzquierda(minutos);
            horas = comprobarCeroIzquierda(horas);
            return "La hora: " + horas + ":" + minutos + ":" + segundos + " es correcta";
        }
        return "La hora: " + horas + ":" + minutos + ":" + segundos + " es incorrecta"
    }

    console.log(comprobacionHora(pedirHora()));
}