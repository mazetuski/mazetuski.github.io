/**
 * Created by Miguel Ángel Zamora Blanco on 25/01/2017.
 */

jQuery.fn.valida = function (opciones) {
    let elem = $(this);
    if (elem.attr("type") == "text") {
        let conf = {
            patron: /^[A-Z][a-z]{3,}\s[A-Z][a-z]{3,}$/,
            mensaje: "Nombre y apellidos deben empezar por mayúscula y debe tener un mínimo de 4 letras",
            contenedor: ""
        };

        jQuery.extend(conf, opciones);
        conf.contenedor.css("color", "red");

        elem.each(function () {
            elem.on("blur", function () {
                if (elem.val() === "")
                    conf.contenedor.html("No puede estar vacio");
                else {
                    if (!conf.patron.test(elem.val()))
                        conf.contenedor.html(conf.mensaje);
                    else
                        conf.contenedor.html("");
                }
            });
        });
    }
    else if (elem.attr("type") == "checkbox") {
        let conf = {
            requerido: true,
            mensaje: "Debes aceptar el check",
            contenedor: ""
        }
        jQuery.extend(conf, opciones);
        conf.contenedor.css("color", "red");
        elem.each(function () {
            elem.on("blur", function () {
                if (conf.requerido)
                    if (!elem.is(":checked"))
                        conf.contenedor.html(conf.mensaje);
                    else
                        conf.contenedor.html("");
            });
        });
    }

    return this;
};