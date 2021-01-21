$("#telefone").mask("(00) 0000-0000");
$("#celular").mask("(00) 00000-0000");

$(document).ready(function () {
    $('select').niceSelect();
});

if ($(window).width() <= 1200)
    $('#escritorio').removeClass('col-md-6').addClass('col-md-12');

if ($(window).width() <= 1200)
    $('#about').removeClass('col-md-6').addClass('col-md-12');




$("#btn-menu").click(function () {
    if ($('#btn-menu').attr('aria-expanded') === 'true') {
        console.log('entre aqui')
        $('#slider').css({ display: 'block', height: '60%' })
        $('#titulo').css({ padding: '0' })
    } else {
        console.log('to aqui')
        $('#slider').css({ display: 'flex', height: '85%' })
    }

});



