
/**
 * Created by maze on 16/01/2017.
 */

$(function () {
    $("#elemento1").creaTip("Todo va bien...");
    $("#elemento2").creaTip("Otra prueba...", {
        velocidad: 1000,
        claseTip: "otroEstiloTip",
        animacionMuestra: {
            opacity: "show",
            padding: '25px',
            'font-size': '2em'
        },
        animacionOculta: {
            height: "hide",
            padding: '5px',
            'font-size': '1em'
        }

    })
});