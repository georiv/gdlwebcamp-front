(function() {
    "use strict";




    document.addEventListener('DOMContentLoaded', function() {


        var map = L.map('mapa').setView([20.667469, -103.368651], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([20.667469, -103.368651]).addTo(map)
            .bindPopup('GDLWebcamp')
            .openPopup();

    }); // DOM CONTENT LOADED
})();