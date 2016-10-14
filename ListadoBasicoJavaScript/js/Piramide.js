/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 * Implementa Pirámide que mediante un bucle for visualice una pirámide.
 */

{
    /**
     * Función que muestra una pirámide numérica.
     * @returns {string} Devuelve una cadena con la pirámide numérica.
     */
    let mostrarPiramideNumerica = function () {
        let mensaje = "";
        for (let i = 1; i < 11; i++) {
            mensaje += "\n";
            for (let j = 0; j < i; j++)
                if (i === 10)
                    mensaje += "" + 0;
                else
                    mensaje += "" + i;
        }
        return mensaje;
    }

    console.log(mostrarPiramideNumerica());
}
