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
    // if ($('#btn-menu').attr('aria-expanded') === 'true') {
    //     $('#slider .row').css({ 'margin-top': '50%' })
    // } else {
    //     // console.log('to aqui')
    //     $('#slider .row').css({ 'margin-top': '0' })
    // }
});

var lastScrollTop = 0;
$(window).scroll(function () {
    var st = $(this).scrollTop();
    var header = $('#header');
    var header_alt = $('#header-alt');
    setTimeout(function () {
        if (st == 0) {
            header.css({ 'visibility': 'visible' })
            header_alt.css({ 'visibility': 'hidden' })
        }
        else if (st > lastScrollTop) {
            header.css({ 'visibility': 'hidden' })
            header_alt.css({ 'visibility': 'hidden', 'opacity': '0' })
        } else {
            header_alt.css({ 'visibility': 'visible', 'opacity': '1' })
        }
        lastScrollTop = st;
    }, 100);
});

$("#imagem").attr('src', 'assets/img/logo-rezende-neiva-advogados-color.svg');








