/**
 * Created by Miguel Ángel Zamora Blanco on 17/01/2017.
 */

jQuery.fn.checkboxPersonalizado = function (opciones) {
    let conf = {
        activo: true,
        colorTextos: {
            activo: '#00f',
            pasivo: '#669'
        },
        textos: {
            activo: "",
            pasivo: ""
        },
        imagen: {
            activo: "images/thumb_up.png",
            pasivo: "images/thumb_down.png"
        },
        cssElemento: {
            padding: "2px 2px 2px 4px",
            display: "block",
            margin: "2px",
            border: "1px solid #eee",
            cursor: "pointer"
        },

        cssAdicional: {},
        nameCheck: ""

    };

    jQuery.extend(conf, opciones);

    this.each(function () {
        let miCheck = $(this);
        let activo = conf.activo;
        let elementoCheck = $("<input type='checkbox' style='display: none;'>");
        if (conf.nameCheck == "")
            elementoCheck.attr("name", miCheck.text());
        else
            elementoCheck.attr("name", conf.nameCheck);
        miCheck.before(elementoCheck);
        miCheck.css(conf.cssElemento);
        miCheck.css(conf.cssAdicional);

        if (activo)
            activar();
        else
            desactivar();

        miCheck.click(function () {
            if (activo)
                desactivar();
            else
                activar();
            activo = !activo;
        });

        function desactivar(){
            miCheck.css({
                background: "transparent url("+conf.imagen.pasivo+") no-repeat 3px",
                color: conf.colorTextos.pasivo
            });
            if (conf.textos.pasivo!="") {
                miCheck.text(conf.textos.pasivo)
            }
            elementoCheck.removeProp("checked");
        }

        function activar(){
            miCheck.css({
                background: "transparent url(" + conf.imagen.activo + ") no-repeat 3px",
                color: conf.colorTextos.activo
            });
            if (conf.textos.activo!=""){
                miCheck.text(conf.textos.activo)
            }
            elementoCheck.prop("checked");
        };

    });


    return this;
};