(function() {
  "user strict";

  let regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function() {

    // --------------- Campos Datos Usuario ---------------
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');

    // --------------- Campos Pases ---------------
    let paseDia = document.getElementById('pase_dia');
    let paseDosdias = document.getElementById('pase_dosdias');
    let paseCompleto = document.getElementById('pase_completo');

    // --------------- Botones y Divs ---------------
    let calcular = document.getElementById('calcular');
    let errorDiv = document.getElementById('error');
    let botonRegistro = document.getElementById('btn_registro');
    let listaProductos = document.getElementById('lista_productos');

    // --------------- Extras ---------------
    let camisas = document.getElementById('camisa_evento');
    let etiquetas = document.getElementById('etiquetas');


    calcular.addEventListener('click', calcularMontos);

    function calcularMontos() {
      event.preventDefault();

      if (regalo.value === "") {
        alert("Debes seleccionar un regalo.")
        regalo.focus();
      } else {
        let boletosDia = parseInt(paseDia.value, 10) || 0,
          boletosDosdia = parseInt(paseDosdias.value) || 0,
          boletosCompletos = parseInt(paseCompleto.value) || 0,
          cantidadCamisas = parseInt(camisas.value) || 0,
          cantidadEtiquetas = parseInt(etiquetas.value) || 0;

        let totalPagar = (boletosDia * 30) + (boletosDosdia * 45) + (boletosCompletos * 50) + ((cantidadCamisas * 10) * .93) + (cantidadEtiquetas * 2);

        let listadoProductos = [];// --------------- Array ---------------

        // --------------- Push Array Boletos ---------------
        if (boletosDia >= 1) {
          listadoProductos.push(`${boletosDia} Pase(s) por día`);
        }
        if (boletosDosdia >= 1) {
          listadoProductos.push(`${boletosDosdia} Pase(s) por 2 día`);
        }
        if (boletosCompletos >= 1) {
          listadoProductos.push(`${boletosCompletos} Pase(s) completo`);
        }
        // --------------- Push Array Extras ---------------
        if (cantidadCamisas >= 1) {
          listadoProductos.push(`${cantidadCamisas} Camisa(s)`);
        }
        if (cantidadEtiquetas >= 1) {
          listadoProductos.push(`${cantidadEtiquetas} Paquete(s) etiquetas`);
        }

        listaProductos.innerHTML = '';// --------------- Vacía el listado, para reescribirlo ---------------

        for (var i=0; i<listadoProductos.length; i++){
          listaProductos.innerHTML += `${listadoProductos[i]} <br/>`
        }

      } 
    }



  }); // --------------- DOM Content Loaded ---------------
})();