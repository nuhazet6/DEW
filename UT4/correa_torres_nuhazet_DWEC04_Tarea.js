
function numbers_keys_range(lower=1,upper=0,step=1){
    let result = new Map();
    for (let index = lower; index < upper; index+=step) {
        result.set(index,'')
    }
    return result
}
function mensajeConstuirEdificio(edificio,element){
    element.innerHTML += `<li> Construido nuevo edificio en calle: ${edificio.calle}, nº${edificio.numero}, CP: ${edificio.cod_post} </li>`
}
function Edificio(calle, numero, cod_post) {
    let list = document.createElement("ul");
    document.body.appendChild(list);
    this.calle = calle;
    this.numero = numero;
    this.cod_post = cod_post;
    this.plantas = [];
    this.agregarPlantasYPuertas = (numplantas, puertas)=>{       
        for (let numplanta = 1; numplanta <= numplantas; numplanta++) {
            this.plantas.push(numbers_keys_range(1,puertas))
        }
        return this.plantas;
    }
    this.modificarNumero = (numero) => this.num = numero;
    this.modificarCalle = (calle) => this.calle = calle;
    this.modificarCodigoPostal = (codigo) => this.cod_post = codigo;
    this.imprimeCalle = () => this.calle;
    this.imprimeNumero = () => this.numero;
    this.imprimeCodigoPostal = () => this.cod_post;
    this.agregarPropietario = (nombre,planta,puerta) => {
        list.innerHTML += `<li> ${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}`
        this.plantas[planta-1].set(puerta,nombre)
    }
    this.imprimePlantas = () => {
        
    }
    mensajeConstuirEdificio(this,list);

}
prueba = new Edificio('lolo','150',34800);
alert(prueba.imprimeCalle())
prueba.agregarPropietario('Nuhazet',1,4);
prueba.setNum(12);
alert(prueba.num);
alert(prueba.agregarPlantasYPuertas(10,5));
prueba.plantas[0].set(1,'Andres');
alert(prueba.plantas[0].get(2));