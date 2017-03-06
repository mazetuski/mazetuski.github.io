/**
 * Created by Miguel Ángel Zamora Blanco on 18/01/2017.
 */

$(document).ready(function () {


    function efectosImagenes() {
        if (window.screen.width > 700) {
            $("#imagenes a").click(function (e) {
                e.preventDefault();
            });
            $("#imagenes img").mouseover(function () {
                $(this).css({
                    "opacity": "1",
                    "cursor": "pointer"

                });
            });

            $("#imagenes img").mouseout(function () {
                $(this).css("opacity", ".5");
            });

            $("#imagenes img").click(function () {
                let url = $(this).attr("src");
                $("#principalImagenes img").fadeOut(300, function () {
                    $("#principalImagenes img").attr("src", url);
                    $("#principalImagenes img").fadeIn(200);
                });
            });
        }
        else {
            $("#imagenes img").css("opacity", "1");
            $(".zoom").fancybox();
        }
    }

    $("#formulario input").each(function () {
        if ($(this).prop("type") != "submit") {
            let texto = Cookies.get($(this).prop("name"));
            if (texto != undefined)
                $(this).val(texto);
        }
    })

    $("#submitReserva").on("click", function () {
        $("#formulario input").each(function () {
            if ($(this).prop("type") != "submit")
                Cookies.set($(this).prop("name"), $(this).val(), {expires: 365});
        })
    });

    $.validate({
        modules: 'date, toggleDisabled',
        disableFormFilter: 'form#formulario'
    });

    efectosImagenes();
    $(window).resize(function () {
        efectosImagenes();
    });


    $("#from").datepicker({
        onClose: function (selectedDate) {
            $("#to").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#to").datepicker({
        onClose: function (selectedDate) {
            $("#from").datepicker("option", "maxDate", selectedDate);
        }
    });

    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        minDate: "0D"
    };
    $.datepicker.setDefaults($.datepicker.regional['es'])

});