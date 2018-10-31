//vamos a crear un nuevo objeto
//en js a la funcion hablar que acabamos de hacer seria una funcion anonima
let perro = {
    nombre: "Milu",
    hablar: function () {
        console.log("guau");
    }
};

let gato = {
    nombre: "Salem"
}

//creamos un array con 2 objetos dentro

let animales = [perro, gato];

for (let i = 0; i < animales.length; i++) {
    console.log(animales[i].nombre);
}
perro.hablar();
