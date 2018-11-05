function crearAnimal(nombre, ruido) {
    return {
        nombre: nombre,
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

function saludar() {
    let algo = document.getElementById("algo").innerHTML;
}
//function ruido() {
//    let algo = document.getElementById("algo").innerHTML;
//}



let resultado = "";

function mostrarAnimales() {

    animales.forEach(function (animal) {
        resultado += "<li>" + animal.saludar() + " <input type='button' onclick='mostrarRuido(\""+animal.nombre+"\")' value='Ruido'/></li>";
        document.getElementById("algo").innerHTML = resultado;
    });
}

let animales = [];                //creamos una lista animales donde vamos a a;adir 


function aniadirAnimalLista() {
    let nombre = document.getElementById("nombre").value;
    let ruido = document.getElementById("ruido").value;
    let animal = new Animal(nombre, ruido);
    animales.push(animal);
}

function mostrarRuido(nombre) {

    animales.forEach(function (animal) {
        if (nombre === animal.nombre) {
            alert(animal.ruido);
        }
    });
}
