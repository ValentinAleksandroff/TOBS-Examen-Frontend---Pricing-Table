$(document).ready(function(){

    $('.subtarjetaBotones button').on('click', cambiarEstado);

    function cambiarEstado(){
       var seleccion = $(this).attr('id'); 
       if(seleccion == 'monthly' &&  $(this).hasClass('desactivado')){
        $('.tarjetasSuscripciones .monthlyPrice').toggle();
        $('.tarjetasSuscripciones .annualyPrice').toggle();
       }
       if(seleccion == 'annualy' && $(this).hasClass('desactivado')){
        $('.tarjetasSuscripciones .monthlyPrice').toggle();
        $('.tarjetasSuscripciones .annualyPrice').toggle();
       }
       $(this).removeClass('desactivado').siblings().addClass('desactivado');
    }
}
)