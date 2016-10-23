/**
 * Created by Miguel Ángel Zamora Blanco on 21/10/2016.
 */

{
    let limitarCaracteres = function (numeroMax) {
        let elemento = document.getElementById("texto");
        if (elemento.value.length >= numeroMax)
            return false;
        return true;
    }
}
