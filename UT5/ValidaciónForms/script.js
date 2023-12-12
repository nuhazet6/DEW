edadRegex = /^\d{2}?$|10[0-5]$/ //números del 0 al 99 o del 100 al 105
fechaRegex = /^(0[1-9]|[12]\d|3[01])[\/\-](0[1-9]|1[012])[\/\-]\d{4}$/; // del 01 al 09 luego del 10 al 29 después el 30 o 31 / o - del 01 al 09, etc y al final 4 dígitos seguidos
nifRegex = /^\d{8}-[a-zA-Z]$/; // 8 números, un guion y una letra al final
emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Cualquier cosa menos espacio o arroba, arroba, cualquier cosa menos espacio y arroba, un punto y cualquier cosa menos espacio y arroba
telefonoRegex = /^\d{9}$/; // 9 dígitos
horaRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // 0 o 1 más dígito o 2 más del 0 al 3 dos puntos del 0 al 5 más dígito
document.cookie = "intentos=0";
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
 
	formulario.addEventListener('submit', (event) => {
    event.preventDefault()
   	let intentos = (parseInt(document.cookie.split(';')[0].split('=')[1])+1).toString();   	 
  	intentosContainer.innerHTML = "Intento de Envíos del formulario: " + intentos;
    document.cookie = "intentos=" + intentos;

    function checkField(value,regex=/.*/){
   	 return value === '' || !regex.test(value) ;
    }
 
  	let campo_edad = document.getElementById("edad");
    let campo_nif = document.getElementById("nif")
  	let campo_email = document.getElementById("email");
  	let campo_provincia = document.getElementById("provincia");
  	let campo_fecha = document.getElementById("fecha");
  	let campo_telefono = document.getElementById("telefono");
  	let campo_hora = document.getElementById("hora");
 
  	let errores = [];
  	if (checkField(campo_nombre.value) || checkField(campo_apellidos.value)) {
    	errores.push("Los campos Nombre y Apellidos son obligatorios.");
    	if (campo_nombre === "") campo_nombre.focus();
    	else campo_apellidos.focus();
  	}
 
  	if (checkField(campo_edad.value,edadRegex) ) {
    	errores.push("Por favor, introduzca una edad válida (entre 0 y 105 años).");
    	campo_edad.focus();
  	} 
 	 
  	if (checkField(campo_nif.value,nifRegex)) {
    	errores.push("El campo NIF debe tener el formato correcto (12345678-A).");
    	campo_nif.focus();
  	} 
 	 
  	if (checkField(campo_email.value,emailRegex)) {
    	errores.push("Por favor, introduzca un correo electrónico válido.");
    	campo_email.focus();
  	}
 
  	if (campo_provincia.value === "0") {
    	errores.push("Por favor, seleccione una Provincia.");
    	campo_provincia.focus();
  	} 
  	 
  	if (checkField(campo_fecha.value,fechaRegex)) {
    	errores.push("El campo Fecha debe tener el formato dd/mm/aaaa o dd-mm-aaaa.");
    	campo_fecha.focus();
  	} 
 	 
  	if (checkField(campo_telefono.value,telefonoRegex)) {
    	errores.push("El campo Teléfono debe tener 9 dígitos numéricos.");
    	campo_telefono.focus();
  	} 
 	 
  	if (checkField(campo_hora.value,horaRegex)) {
    	errores.push("El campo Hora debe tener el formato hh:mm.");
    	campo_hora.focus();
  	}
 
  	if (errores.length > 0) {
    	erroresContainer.innerHTML = "<ul><li>" + errores.join("</li><li>") + "</li></ul>";
  	}else{
    	let confirmarEnvio = confirm("¿Estás seguro de enviar el formulario?");
  	if (confirmarEnvio) {
    	formulario.submit();
  	}
  	} 	 
	});
    
    
    
  });
 

