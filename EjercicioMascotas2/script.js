let perro = {         //creamos un objeto con valores de nombre,ruido y la funcion saludar
    nombre: "milu",   //en la funcion, llamamos a los valores anteriores con this.
    ruido: "guau",
    saludar: function () {
        return this.nombre + " dice " + this.ruido;
    }
};

let gato = {
    nombre: "salem",
    ruido: "miao",
    saludar: function () {
        return this.nombre + " dice " + this.ruido;
    }
};

function crearAnimal(nombre, ruido) {    //esto es una funcion mas generica,para que podriamos a;adir desde fuera
    return {                             
        nombre: nombre,                  //seria un constructor de javascript
        ruido: ruido,
        saludar: function () {
            return this.nombre + " dice " + this.ruido;
        }
    };
}

class Animal {                                     //forma de crear la clases en JS
    constructor(nombre, ruido) {                   
        this.nombre = nombre;
        this.ruido = ruido;
    }
    saludar() {
        return this.nombre + " dice " + this.ruido;
    }
}

let perro = new Animal("milu", "guau");      //a;adimos los distintos animales con sus atributos a la lista
let gato = new Animal("salem", "miao");
let pato = new Animal("pato", "quack");
let animales = [];                           //array
animales.push(perro);                        //forma de a;adir elementos a un array,se usa el push,que
animales.push(gato);                         //es lo mismo que en c# con el .Add
animales.push(pato);

function mostrarAnimales() {
    let resultado = "";
    for (let i = 0; i < animales.length; i++) {
        resultado += "<p>" + animales[i].saludar() + "</p>";
    }
    animales.forEach(function (animal) {
        resultado += "<p>" + animal.saludar() + "</p>";
    });
    document.getElementById("lista").innerHTML = resultado;//es como lo de ayer del prompt pero mejor hecho
}  //document esta llamando al codigo del html,que llama al id que hemos creado en el html.  inner es insertar lo que
   //introducimos en la caja de texto

function buscarRuido() {    //esto es una funcion que escribes un animal y te devuelve el ruido.
    let nombreAnimal = document.getElementById("nombre").value;
    for (let i = 0; i < animales.length; i++) {
        if (animales[i].nombre === nombreAnimal) {
            alert(animales[i].ruido);
        }
    }
}
