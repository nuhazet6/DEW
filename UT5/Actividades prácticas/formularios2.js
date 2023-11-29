function calcularResultado(){
    console.log('calcularResultado')
    let puntuación = 0
    let cuestionario = document.getElementById('cuestionario')
    alert(cuestionario['Manzana'].checked)
    if(cuestionario['Manzana']){

    }
}
function recorrerFormulario() {
    // Obtener el formulario por su ID
    var formulario = document.getElementById("cuestionario");
    // Recorrer todos los elementos del formulario usando un bucle for
    for (var i = 0; i < formulario.elements.length; i++) {
        // Mostrar en la consola el nombre y el valor de cada elemento
        console.log("Nombre: " + formulario.elements[i].name + ", Valor: " +
        formulario.elements[i].value+formulario.elements);
    }
}

document.getElementById('enviar').addEventListener('click',calcularResultado);
document.getElementById('enviar').addEventListener('click',recorrerFormulario);