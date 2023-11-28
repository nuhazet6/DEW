    document.getElementById("principal").addEventListener("click", function () {
        alert("Pulsado el contenedor principal");
    }, false); 
    document.getElementById("secundario").addEventListener("click", function (e) {
      alert("Pulsado el contenedor secundario y paramos la propagación");
      e.stopPropagation();
    }, false); 

    document.getElementById("miboton").addEventListener("click", function () {
      alert("Pulsado el botón");
    }, false); 