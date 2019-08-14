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