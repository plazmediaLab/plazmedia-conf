(function() {
  "user strict";

  let regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function() {

    // --------------- Mapa Leafletjs Librería ---------------
    var map = L.map('mapa').setView([20.782758, -100.051117], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([20.782758, -100.051117]).addTo(map)
      .bindPopup('Plazmedi&aring; CONF 2019.<br> Entradas ya a la venta,.')
      .openPopup()
      .bindTooltip('No faltes :)')
      .openTooltip();


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
    let suma = document.getElementById('suma_total');

    // --------------- Extras ---------------
    let camisas = document.getElementById('camisa_evento');
    let etiquetas = document.getElementById('etiquetas');

    // --------------- Eventos Validación Simple Campos ---------------
    nombre.addEventListener('blur', msnError);
    apellido.addEventListener('blur', msnError);
    // email.addEventListener('blur', msnError);
    // --------------- Validación Simple E-mail @ ---------------
    email.addEventListener('blur', validarEmail);

    // --------------- Función de Mensaje Error ---------------
    function msnError(){
      if (this.value == ''){
        errorDiv.className = 'msn-error';
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = "Estos campos son obligatorio.";
      }else{
        errorDiv.style.display = 'none';
      }
    }

    function validarEmail(){
      if(this.value.indexOf("@") > -1){
        errorDiv.style.display = 'none';
      }else{
        errorDiv.className = 'msn-info';
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = "Tienes que escribir un correo valido (\"@\")";
      }
    }

    // --------------- Eventos Mostrar / Ocultar Horarios ---------------
    paseDia.addEventListener('blur', mostrarDias);
    paseDosdias.addEventListener('blur', mostrarDias);
    paseCompleto.addEventListener('blur', mostrarDias);

    calcular.addEventListener('click', calcularMontos);

    // --------------- Función Calcular / Agregar Precio y Listado de Compra ---------------
    function calcularMontos() {
      event.preventDefault();

      if (regalo.value === "") {
        alert("Debes seleccionar un regalo.")
        regalo.focus();
      } else {
        let boletosDia = parseInt(paseDia.value, 10) || 0,
          boletosDosdia = parseInt(paseDosdias.value, 10) || 0,
          boletosCompletos = parseInt(paseCompleto.value, 10) || 0,
          cantidadCamisas = parseInt(camisas.value, 10) || 0,
          cantidadEtiquetas = parseInt(etiquetas.value, 10) || 0;

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

        listaProductos.style.display = 'block';
        listaProductos.innerHTML = '';// --------------- Vacía el listado, para reescribirlo ---------------

        for (var i=0; i<listadoProductos.length; i++){
          listaProductos.innerHTML += `${listadoProductos[i]} <br/>`
        }

        suma.innerHTML = `$ ${totalPagar.toFixed(2)}`;

      } 
    }
    
    // --------------- Función Mostrar / Ocultar Horarios ---------------
    function mostrarDias(){
      let boletosDia = parseInt(paseDia.value, 10) || 0,
          boletosDosdia = parseInt(paseDosdias.value, 10) || 0,
          boletosCompletos = parseInt(paseCompleto.value, 10) || 0;

      let diasElegidos = [];// --------------- Array Vacío  ---------------


      if (boletosDia > 0){
        diasElegidos.push('viernes');
      } else{
        document.getElementById('viernes').style.display = 'none';
      }
      if (boletosDosdia > 0){
        diasElegidos.push('viernes', 'sabado');
      } else{
        document.getElementById('viernes').style.display = 'none';
        document.getElementById('sabado').style.display = 'none';
      }
      if (boletosCompletos > 0){
        diasElegidos.push('viernes', 'sabado', 'domingo');
      } else{
        document.getElementById('viernes').style.display = 'none';
        document.getElementById('sabado').style.display = 'none';
        document.getElementById('domingo').style.display = 'none';
      }

      for(var i = 0; i < diasElegidos.length; i++){
        document.getElementById(diasElegidos[i]).style.display = 'block';
      }


    }


  }); // --------------- DOM Content Loaded ---------------
})();