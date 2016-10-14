/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa PiramideDos que mediante un bucle for visualice una pirámide del
 * siguiente tipo:
 */

{
    /**
     * Función que muestra una pirámide numérica.
     * @returns {string} Devuelve una cadena con la pirámide numérica.
     */
    let mostrarPiramideNumericaDos = function () {
        let mensaje = "";
        for (let i = 1; i < 11; i++) {
            mensaje += "\n";
            for (let j = 0; j < i; j++)
                if (j+1 === 10)
                    mensaje += "" + 0;
                else
                    mensaje += "" + (j+1);
        }
        return mensaje;
    }

    console.log(mostrarPiramideNumericaDos());
}
