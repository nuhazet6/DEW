/* El modelo de registro de eventos debe ser el modelo avanzado (addEventListener).
Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
Realizar una función que valide que los campos de texto NOMBRE y APELLIDOS no están en blanco. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en los campos correspondientes.
Validar que la EDAD no esté en blanco y que contenga solamente valores numéricos y que esté en el rango de 0 a 105. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo EDAD.
Validar que el NIF no esté en blanco y siga un formato correcto. Utilizar una expresión regular que permita solamente 8 números, un guion y una letra. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo NIF. No es necesario validar que la letra sea correcta. Explicar las partes de la expresión regular mediante comentarios.
Validar que el E-MAIL no esté en blanco y sigue un formato correcto. Utilizar una expresión regular que nos permita comprobar que el e-mail sigue un formato correcto. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo E-MAIL. Explicar las partes de la expresión regular mediante comentarios.
Validar que se haya seleccionado alguna de las PROVINCIAS. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo PROVINCIA.
Validar que el campo FECHA no está en blanco y que sigue un formato determinado utilizando una expresión regular. Debe cumplir alguno de los siguientes formatos: dd/mm/aaaa o dd-mm-aaaa. No se pide validar que sea una fecha de calendario correcta. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo FECHA. Explicar las partes de la expresión regular mediante comentarios.
Validar que el campo TELÉFONO no está en blanco y que está correcto utilizando una expresión regular. Debe permitir 9 dígitos obligatorios. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo TELÉFONO. Explicar las partes de la expresión regular mediante comentarios.
Validar que el campo HORA no está en blanco y que sigue un patrón determinado utilizando una expresión regular. Debe seguir el patrón de hh:mm. No es necesario validar que sea una hora correcta. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo HORA. Explicar las partes de la expresión regular mediante comentarios.
Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y mostrar un mensaje en el contenedor "intentos" similar a: "Intento de Envíos del formulario: X". Es decir cada vez que le demos al botón de enviar tendrá que incrementar el valor de la cookie en 1 y mostrar su contenido en el div antes mencionado. Nota: para poder actualizar el contenido de un contenedor o div la propiedad que tenemos que modificar para ese objeto es innerHTML.
Pedir confirmación de envío del formulario. Si se confirma el envío realizará el envío de los datos; en otro caso cancelará el envío. */
// document.getElementById('nombre').addEventListener('blur',)

window.addEventListener('load', function() {
    var formulario = document.getElementById("formulario"); 
    var erroresContainer = document.getElementById("errores");
    var intentosContainer = document.getElementById("intentos");
    var intentos = 0;
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      intentos++;
      intentosContainer.innerHTML = "Intento de Envíos del formulario: " + intentos;
  
      var nombre = document.getElementById("nombre").value.trim().toUpperCase();
      var apellidos = document.getElementById("apellidos").value.trim().toUpperCase();
      var edad = document.getElementById("edad").value.trim();
      var nif = document.getElementById("nif").value.trim();
      var email = document.getElementById("email").value.trim();
      var provincia = document.getElementById("provincia").value;
      var fecha = document.getElementById("fecha").value.trim();
      var telefono = document.getElementById("telefono").value.trim();
      var hora = document.getElementById("hora").value.trim();
  
      var errores = [];
  
      if (nombre === "" || apellidos === "") {
        errores.push("Los campos Nombre y Apellidos son obligatorios.");
        if (nombre === "") document.getElementById("nombre").focus();
        else document.getElementById("apellidos").focus();
      }
  
      if (edad === "" || isNaN(edad) || parseInt(edad) < 0 || parseInt(edad) > 105) {
        errores.push("Por favor, introduzca una edad válida (entre 0 y 105 años).");
        document.getElementById("edad").focus();
      }
  
      var nifRegex = /^[0-9]{8}-[a-zA-Z]$/; // Explicación: 8 números, un guion y una letra al final
      if (nif === "" || !nifRegex.test(nif)) {
        errores.push("El campo NIF debe tener el formato correcto (12345678-A).");
        document.getElementById("nif").focus();
      }
  
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Explicación: Formato básico de un correo electrónico
      if (email === "" || !emailRegex.test(email)) {
        errores.push("Por favor, introduzca un correo electrónico válido.");
        document.getElementById("email").focus();
      }
  
      if (provincia === "0") {
        errores.push("Por favor, seleccione una Provincia.");
        document.getElementById("provincia").focus();
      }
  
      var fechaRegex = /^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[012])[\/\-]\d{4}$/; // Explicación: Formato de fecha dd/mm/aaaa o dd-mm-aaaa
      if (fecha === "" || !fechaRegex.test(fecha)) {
        errores.push("El campo Fecha debe tener el formato dd/mm/aaaa o dd-mm-aaaa.");
        document.getElementById("fecha").focus();
      }
  
      var telefonoRegex = /^\d{9}$/; // Explicación: 9 dígitos
      if (telefono === "" || !telefonoRegex.test(telefono)) {
        errores.push("El campo Teléfono debe tener 9 dígitos numéricos.");
        document.getElementById("telefono").focus();
      }
  
      var horaRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // Explicación: Formato hh:mm
      if (hora === "" || !horaRegex.test(hora)) {
        errores.push("El campo Hora debe tener el formato hh:mm.");
        document.getElementById("hora").focus();
      }
  
      if (errores.length > 0) {
        erroresContainer.innerHTML = "<ul><li>" + errores.join("</li><li>") + "</li></ul>";
        return false;
      }
  
      var confirmarEnvio = confirm("¿Estás seguro de enviar el formulario?");
      if (confirmarEnvio) {
        formulario.submit();
      } else {
        return false;
      }
    });
  
    // Convertir a mayúsculas los campos Nombre y Apellidos al perder el foco
    document.getElementById("nombre").addEventListener('blur', function() {
      this.value = this.value.toUpperCase();
    });
  
    document.getElementById("apellidos").addEventListener('blur', function() {
      this.value = this.value.toUpperCase();
    });
  });
  