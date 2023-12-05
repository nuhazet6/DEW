fechaRegex = /^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[012])[\/\-]\d{4}$/; // del 01 al 09 luego del 10 al 29 después el 30 o 31 / o - del 01 al 09, etc
nifRegex = /^[0-9]{8}-[a-zA-Z]$/; // 8 números, un guion y una letra al final
emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Cualquier cosa menos espacio o arroba, arroba, cualquier cosa menos espacio y arroba, un punto y cualquier cosa menos espacio y arroba
telefonoRegex = /^\d{9}$/; // 9 dígitos
horaRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // 0 o 1 más dígito o 2 más del 0 al 3 : del 0 al 5 más dígito

document.addEventListener('DOMContentLoaded', function() {
  let campo_nombre = document.getElementById("nombre");
  let campo_apellidos = document.getElementById("apellidos");
  campo_nombre.addEventListener('blur', function() {
    this.value = this.value.toUpperCase();
  });
  
  campo_apellidos.addEventListener('blur', function() {
    this.value = this.value.toUpperCase();
  });
    let formulario = document.getElementById("formulario"); 
    let erroresContainer = document.getElementById("errores");
    let intentosContainer = document.getElementById("intentos");
    document.cookie = "intentos=0"
  
    formulario.addEventListener('submit', (event) => {
      document.cookie = int(document.cookies.split('=')[1])++;
      intentosContainer.innerHTML = "Intento de Envíos del formulario: " + document.cookie.split('=')[1];
  
      let nombre = campo_nombre.value;
      let apellidos = campo_apellidos.value;
      let edad = document.getElementById("edad").value;
      let nif = document.getElementById("nif").value;
      let email = document.getElementById("email").value;
      let provincia = document.getElementById("provincia").value;
      let fecha = document.getElementById("fecha").value;
      let telefono = document.getElementById("telefono").value;
      let hora = document.getElementById("hora").value;
  
      let errores = [];
  
      if (nombre === "" || apellidos === "") {
        errores.push("Los campos Nombre y Apellidos son obligatorios.");
        if (nombre === "") document.getElementById("nombre").focus();
        else document.getElementById("apellidos").focus();
      }
  
      if (edad === "" || isNaN(edad) || parseInt(edad) < 0 || parseInt(edad) > 105) {
        errores.push("Por favor, introduzca una edad válida (entre 0 y 105 años).");
        document.getElementById("edad").focus();
      }
  
      
      if (nif === "" || !nifRegex.test(nif)) {
        errores.push("El campo NIF debe tener el formato correcto (12345678-A).");
        document.getElementById("nif").focus();
      }
  
      
      if (email === "" || !emailRegex.test(email)) {
        errores.push("Por favor, introduzca un correo electrónico válido.");
        document.getElementById("email").focus();
      }
  
      if (provincia === "0") {
        errores.push("Por favor, seleccione una Provincia.");
        document.getElementById("provincia").focus();
      }
  
       
      if (fecha === "" || !fechaRegex.test(fecha)) {
        errores.push("El campo Fecha debe tener el formato dd/mm/aaaa o dd-mm-aaaa.");
        document.getElementById("fecha").focus();
      }
  
      
      if (telefono === "" || !telefonoRegex.test(telefono)) {
        errores.push("El campo Teléfono debe tener 9 dígitos numéricos.");
        document.getElementById("telefono").focus();
      }
  
      
      if (hora === "" || !horaRegex.test(hora)) {
        errores.push("El campo Hora debe tener el formato hh:mm.");
        document.getElementById("hora").focus();
      }
  
      if (errores.length > 0) {
        erroresContainer.innerHTML = "<ul><li>" + errores.join("</li><li>") + "</li></ul>";
        event.preventDefault();
      }else{
        let confirmarEnvio = confirm("¿Estás seguro de enviar el formulario?");
      if (confirmarEnvio) {
        event.preventDefault();
      } 
      }
  
      
    });
  
    
  });
  