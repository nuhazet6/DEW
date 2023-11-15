
function numbers_keys_range(lower=1,upper=0,step=1){
    //Función para crear un diccionario con claves de lower a upper rellenando los values con la cadena vacía
    let result = new Map();
    for (let index = lower; index < upper; index+=step) {
        result.set(index,'')
    }
    return result
}

function Edificio(calle, numero, cod_post, name) {
    //Al crear el elemento en el constructor queda ligado al objeto en cuestión 
    let list = document.createElement("ul");
    document.body.appendChild(list);       
    this.name = name;
    this.calle = calle;
    this.numero = numero;
    this.cod_post = cod_post;
    this.plantas = [];
    this.agregarPlantasYPuertas = (numplantas, puertas)=>{       
        for (let numplanta = 1; numplanta <= numplantas; numplanta++) {
            /*numbers_keys_range() es una función declarada arriba ^ 
            crea un diccionario con claves de 1 a x y rellena los valores con la cadena vacía*/
            this.plantas.push(numbers_keys_range(1,puertas))
        }
        return this.plantas;
    }
    this.modificarNumero = (numero) => this.num = numero;
    this.modificarCalle = (calle) => this.calle = calle;
    this.modificarCodigoPostal = (codigo) => this.cod_post = codigo;
    this.imprimeCalle = () => list.innerHTML += `<li> La calle del edificio ${this.name} es: ${this.calle} </li>`;
    this.imprimeNumero = () => list.innerHTML += `<li> El número del edificio ${this.name} es: ${this.numero} </li>`;
    this.imprimeCodigoPostal = () => list.innerHTML += `<li> El código postal del edificio ${this.name} es: ${this.cod_post} </li>`;
    this.agregarPropietario = (nombre,planta,puerta) => {
        list.innerHTML += `<li> ${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta} </li>`
        //Se presupone que el número de planta va a ser a partir de 1, lo que se tiene que corregir para trabajar con la lista de plantas.
        this.plantas[planta-1].set(puerta,nombre)
    }
    this.imprimePlantas = () => {
        for (let num_planta = 1; num_planta <= this.plantas.length; num_planta++) {
            index = num_planta - 1          
            for([key,value] of this.plantas[index]){
                list.innerHTML += `<li> Propietario del piso ${key} de la planta ${num_planta}: ${value} </li>`
            }                 
        }
    }
    list.innerHTML += `<li> Construido nuevo edificio en calle: ${this.calle}, nº${this.numero}, CP: ${this.cod_post} </li>`

}

//Creación y manipulación de objetos
edificioA = new Edificio('Garcia Prieto',58,15706,'A');
edificioB = new Edificio('Camino Caneiro',29,32004,'B');
edificioC = new Edificio('San Clemente','s/n',15705,'C');
edificioA.imprimeCodigoPostal();
edificioC.imprimeCalle();
edificioB.imprimeCalle();
edificioB.imprimeNumero();
edificioA.agregarPlantasYPuertas(2,3);
edificioA.agregarPropietario('Jose Antonio Lopez',1,1);
edificioA.agregarPropietario('Luisa Martinez',1,2);
edificioA.agregarPropietario('Marta Castellón',1,3);
edificioA.agregarPropietario('Antonio Pereira',2,2);
edificioA.imprimePlantas();
edificioA.agregarPlantasYPuertas(1,3);
edificioA.agregarPropietario('Pedro Meijide',3,2);
edificioA.imprimePlantas();
