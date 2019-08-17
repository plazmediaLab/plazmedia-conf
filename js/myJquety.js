$(document).ready(function(){

  // --------------- Menú Fijo ---------------
  let heroHeight = $('.hero').innerHeight();// Altura banner (hero)
  let barraAltura = $('.barra').innerHeight();// Altura Berra Menú
  
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll > heroHeight){
      $('.barra').addClass('fixed');
      $('body').css({'margin-top': barraAltura + 'px'});
    }else{
      $('.barra').removeClass('fixed');  
      $('body').css({'margin-top': '0px'});    
    }
  });

  // --------------- Menú Responsivo ---------------

  $('.menu-movil').on('click', function(){
    $('.navegacion-principal').slideToggle();
  });

  // --------------- Programa Conferencias ---------------
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('active');
  // --------------- Función Click Programa Conferencias ---------------
  $('.menu-programa a').on('click', function(){ 
    $('.menu-programa a').removeClass('active');
    $(this).addClass('active');
    $('.hide').hide();

    let enlace = $(this).attr('href');
    $(enlace).fadeIn(500);

    return false;
  });

// --------------- PLUGINS ---------------

  // --------------- Animaciones para Números ---------------
  $('.resumen-evento li:nth-child(1) p').animateNumber({number:6}, 2500);
  $('.resumen-evento li:nth-child(2) p').animateNumber({number:15}, 1700);
  $('.resumen-evento li:nth-child(3) p').animateNumber({number:3}, 1200);
  $('.resumen-evento li:nth-child(4) p').animateNumber({number:9}, 1500);
  // --------------- Cuenta Regresiva ---------------
  $('.cuenta-regresiva').countdown('2019/09/23 15:00:00', function(event){
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
  });

  // --------------- Plugin Lettering ---------------
  $('.nombre-sitio').lettering();

});