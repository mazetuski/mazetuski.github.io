/**
 * Created by Miguel Ángel Zamora Blanco on 02/02/2017.
 * Aumenta el tamaño de aquellos párrafos que su índice sea un numero primo.
 */


$(document).ready(function () {
    $("p").each(function (i) {
        let contador = 0;
        for (let j = 1; j < i; j++)
            if (i % j == 0)
                contador++;
        if(contador<2)
            $(this).css("font-size", "2em");
    })
});