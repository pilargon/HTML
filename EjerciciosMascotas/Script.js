//// JavaScript source code

//alert("hola");

//let nombre = prompt("introduce tu nombre");

//console.log(nombre);

////las llaves se ponen al final de la l�nea en javascript

//let numeros = [1, 2, 3];

//for (let i = 0; i < numeros.lenght; i++); { //recorro el array

//    console.log(i);//imprimo las posiciones del array

//}

//let person = {

//    nombre: "Iker",

//    edad: 38,

//    apellido: "Murga",

//    nombre_completo: function () {

//        return this.nombre + this.apellido;

//    },//lo separo con coma porque son propiedades de person

//    saludar: function () {

//        return "Hola me llamo " + this.nombre;//hay que poner el this delante porque al estar dentro de la funci�n

//                                                //es como si fuera privado y desde fuera de ella no se ve

//    },

//    saludarAOtro: function (persona) {

//        return "Hola" + persona.nombre;

//    },

//    amigos:[miguel]

//};

//let miguel = {

//    nombre: "Miguel",

//    edad: funtion(persona){

//        persona.edad;

//    }

//};

//miguel.edad(person);

//person.saludarAOtro(miguel);



//let perro = {

//    nombre: "Mil�",

//    ruido: "Guau",

//    saludar: function () {

//        return this.nombre + "dice" + this.ruido;

//    }

//};

//let gato = {

//    nombre: "Salem",

//    ruido: "Miau",

//    saludar: function () {

//        return this.nombre + "dice" + this.ruido;

//    }

//};

//function crearAnimal(nombre, ruido) {

//    return {

//        nombre: nombre,

//        ruido: ruido,

//        saludar: function () {

//            return this.nombre + " dice " + this.ruido;

//        }

//    }

//};

//let gato = crearAnimal("Salem", "Miau");

//let perro = crearAnimal("Mil�", "Guau");





class Animal { // no hace falta declarar public no nada para los constructores

    constructor(nombre, ruido) {

        this.nombre = nombre;

        this.ruido = ruido;

    }

    saludar() {

        return this.nombre + " dice " + this.ruido;

    }

}

//console.log(gato.saludar());

//console.log(perro.saludar());

//let gato = new Animal("Salem", "Miau");

//let perro = new Animal("Mil�", "Guau");

//let animales = [perro, gato];



//Para simplificarlo lo podemos hacer de esta manera:

let animales = [new Animal("Mil�", "guau"), new Animal("Salem", "Miao")];

//*********Esto lo a�adimos despu�s

animales.push(new Animal("pato", "quack"));



//for (let i = 0; i < animales.length; i++) {

//    console.log(animales[i].saludar());

//}





animales.forEach(function (animal) {//animal es como la x del foreach de c#

    console.log(animal.saludar());

});



//al tener un id lista_mascotas puedo llamar al html desde el javascript

document.getElementById("lista_mascotas").innerHTML = "<p>Hola</p>";



//lo podemos hacer de otra manera:

let resultado = "";//creo un string

//Por cada animal que tengo en la lista, saludar me devuelve un string(que puede tener m�ltiples strings dentro)

animales.forEach(function (animal) {//animal es como la x del foreach de c#

    //quiero poder modificar el html

    resultado += "<p>" + animal.saludar() + "</p>";

});



//vete al documento cogeme el elemento y metelo dentro del div

document.getElementById("lista_mascotas").innerHTML = resultado;//cojo un elemento y meto algo dentro de su html



//despu�s de meter el formulario





function saludar() {//cuando le das al bot�n saludar te sdale el alert

    //Despu�s: metemos el let nombre que hasta ahora estaba fuera y ten�a un valor vac�o...

    let nombre = document.getElementById("nombre").value //Antes(cuando el c�digo estaba fuera): 

    //este c�digo se ejecuta antes de cargar la p�gina!!!

    alert(nombre);



}

//a�adimos un nuevo animal al array *******

//animales.push(new Animal("pato", "quack"));

animales.forEach(function aniadir() {

    animales.push(new Animal(prompt()));
});


