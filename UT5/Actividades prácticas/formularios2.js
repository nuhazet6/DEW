function puntuacionPregunta1(cuestionario){
    alert('hola')
    if(cuestionario['Mango'].checked==true || cuestionario['Plátano'].checked==true){
        return 0;
    }else if(cuestionario['Fresa'].checked == true&&cuestionario['Manzana'].checked==true){
        return 1;
    }else if (cuestionario['Fresa'].checked == true || cuestionario['Manzana'].checked==true){
        return 0.5;
    }else{
        return 0;
    }
}
function comprobarSelect(){
    cuestionario = document.getElementById('cuestionario')
    let puntuacion = puntuacionPregunta1(cuestionario)
    switch (puntuacion) {
        case 1:
            alert('Respuesta correcta')
            break;
        case 0.5:
            alert('Respuesta parcialmente correcta')
            break;
        default:
            alert('Respuesta incorrecta')
            break;
    }
}
function calcularResultado(){
    console.log('calcularResultado')
    let puntuación = 0
    let cuestionario = document.getElementById('cuestionario')
    alert(cuestionario['Manzana'].checked)
    if(cuestionario['Mango'].checked || cuestionario['Plátano'].checked){
        puntuación=0
    }else if(cuestionario){

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
document.getElementById('comprobar1').addEventListener('click',comprobarSelect);