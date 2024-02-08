

$(document).ready(function(){
    cargar_provincias();
    cargar_municipios();
	$('#provincia').change(cargar_municipios);
});

// function cargar_provincias() {
//     let xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'cargaProvinciasXML.php', false);
// 	xhr.send();
// 	let provincias = xhr.responseXML.getElementsByTagName("provincia");
// 	for (let i=0; i < provincias.length; i++) {
// 		let new_option = new Option(
// 			provincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue, 
// 			provincias[i].getElementsByTagName("codigo")[0].firstChild.nodeValue
// 		);
// 		$('#provincia').append(new_option);
// 	};
// }

function cargar_provincias(){
	// Variable para almacenar la respuesta del servidor
	let respuesta;
	// Utilizando Fetch para obtener datos del archivo 
	fetch("cargaProvinciasXML.php")
		.then(respuesta => respuesta.text())  // traemos la respuesta como XML
		.then(xmlString => $.parseXML(xmlString))//parseamos
		.then(datos => {
			respuesta = datos;
			console.log(respuesta.getElementsByTagName('provincia'));
			let provincias = respuesta.getElementsByTagName("provincia");
			for (let i=0; i < provincias.length; i++) {
				let new_option = new Option(
					provincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue, 
					provincias[i].getElementsByTagName("codigo")[0].firstChild.nodeValue
				);
				$('#provincia').append(new_option);
			};
		});
}
function cargar_municipios(){
	// Variable para almacenar la respuesta del servidor
	let respuesta;
	// Utilizando Fetch para obtener datos del archivo 
	fetch("cargaProvinciasXML.php")
		.then(respuesta => respuesta.text())  // traemos la respuesta como XML
		.then(xmlString => $.parseXML(xmlString))//parseamos
		.then(datos => {
			respuesta = datos;
			let new_options = '';
			let municipios = respuesta.getElementsByTagName("municipio");
			for (let i=0; i < municipios.length; i++) {
				new_options += `<option value=${municipios[i].getElementsByTagName("codigo")[0].firstChild.nodeValue}>
							${municipios[i].getElementsByTagName("nombre")[0].firstChild.nodeValue}
								</option>`			
		};
		$("#municipio").html(new_options);
		});
}

// function cargar_municipios() {
// 	let xhr = new XMLHttpRequest();
// 	xhr.open('POST', 'cargaMunicipiosXML.php', true);
// 	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// 	let payload = `provincia=${$('#provincia').val()}`;
// 	xhr.onreadystatechange = function() {
// 		let new_options = '';
// 		if(xhr.readyState === 4 && xhr.status === 200) {
// 			let municipios = xhr.responseXML.getElementsByTagName("municipio");
// 			for (let i=0; i < municipios.length; i++) {
// 				new_options += `<option value=${municipios[i].getElementsByTagName("codigo")[0].firstChild.nodeValue}>
// 							${municipios[i].getElementsByTagName("nombre")[0].firstChild.nodeValue}
// 								</option>`
// 			};
// 		};
// 		$("#municipio").html(new_options);
// 	};
// 	xhr.send(payload);	
// }

function validarGenerico(id,pattern){
	campo = $(`#${id}`)
	campo_error = $(`#error-${id}`)
	if(campo.val()== ''){
		campo.focus();
		campo_error.text(`El ${id} es obligatorio`)
	}else if(campo.val().search(pattern) == -1){
		campo.focus();
		campo_error.text(`El ${id} no es válido`)
	}else{
		campo_error.html(null);
	}
}

const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
function validar_dni() {//Como para comprobar el dni necesitamos lógica más compleja no nos sirve solo usar validarGenerico
	let dni = $('#dni').val();
	if ( dni == '' ) {
		$('#dni').focus();
		$('#error-dni').text('El dni es un campo obligatorio.');
	} else if ( dni.match(/^\d{8}[A-Z]$/) ) {
		index = parseInt(dni) % 23;
		if ( validChars[index] != dni[8] ) {
			$('#dni').focus();
			$('#error-dni').text('El dni introducido no es válido.');
		} else {
			$('#error-dni').html(null);
		}
	} else {
		$('#dni').focus();
		$('#error-dni').text('El dni introducido no es válido.');
	} 
}



function validar_correo() {//Como para comprobar el correo necesitamos lógica más compleja no nos sirve solo usar validarGenerico
	let mail = $('#correo').val();
	if ( mail == '' ) {
		$('#correo').focus();
		$('#error-correo').text('El correo electrónico es un campo obligatorio.');
	} else if ( mail.match(/^.+@[a-z]+\.(?:com|es)$/) ) {
		if ( mail != $('#repetir-correo').val() ) {
			$('#correo').focus();
			$('#error-correo').text('No coinciden los valores introducidos.');
		} else {
			$('#error-correo').html(null);
		}
	} else {
		$('#correo').focus();
		$('#error-correo').text('El correo introducido no es válido.');
	} 
}

function validar_terminos() {//Como para comprobar las condiciones necesitamos lógica diferente no nos sirve usar validarGenerico
	if ( !($('#condiciones').prop('checked')) ) {
			$('#condiciones').focus();
			$('#error-condiciones').text('Debes aceptar los términos y condiciones para continuar.');
	} else {
		$('#error-condiciones').html(null);
	}
}

function validar_nacimiento() {//Como para comprobar el nacimiento necesitamos lógica diferente no nos sirve usar validarGenerico
	if ( $('#nacimiento').val() == null ) {
		$('#nacimiento').focus();
		$('#error-nacimiento').text('La fecha de nacimiento es un campo obligatorio.');
	} else if ( isNaN(Date.parse($('#nacimiento').val())) ) {
		$('#nacimiento').focus();
		$('#error-nacimiento').text('La fecha introducida no es válida.');
	} else {
		$('#error-nacimiento').html(null);
	}
}

function comprobar_campos() {	
	validar_terminos();
	validar_correo();
	validarGenerico('telefono', /^\d{9}$/);
	validarGenerico('cod-postal', /^\d{5}$/);
	validarGenerico('direccion', /^.*$/);
	validar_dni();
	validar_nacimiento();
	validarGenerico('apellidos', /^.*$/);
	validarGenerico('nombre', /^.*$/);
}