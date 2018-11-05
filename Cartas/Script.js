//1 - Crear un array de objetos de cartas, que tendrán como mínimo
//propiedades nombre, daño, url_imagen y descripción.Hacer un mínimo
//de 15 cartas y que al cargar la página se muestre los nombre de todos en la consola.



class Carta {
    constructor(nombre, danio, url_imagen, descripcion) {
        this.nombre = nombre;
        this.danio = danio;
        this.url_imagen = url_imagen;
        this.descripcion = descripcion;
    }
    mostrarNombre() {
        return this.nombre;
    }
}


let carta = [];
let elAlmacen = new Carta("El Almacen", 3, "Cartas" + "/" + "BOT_568" + ".jpg", "Roba 3 cartas");
let punicionSagrada = new Carta("Punicion Sagrada", 3, "Cartas" + "/" + "CS1_130" + ".jpg", "Hace +2");
let bendicion = new Carta("Bendicion de poderio", 3, "Cartas" + "/" + "CS2_087" + ".jpg", "Otorga +3");
let campeon = new Carta("Campeon de Ventormenta", 6, "Cartas" + "/" + "CS2_222" + ".jpg", "Tus demas esbirros tienen +1/+1");
let acolito = new Carta("Acolito de dolor", 1, "Cartas" + "/" + "EX1_007" + ".jpg", "Roba una carta cuando le atacan");
let abisario = new Carta("Abisario", 1, "Cartas" + "/" + "CS2_065" + ".jpg", "Provocar");
carta.push(elAlmacen);
carta.push(punicionSagrada);
carta.push(abisario);
carta.push(bendicion);
carta.push(campeon);
carta.push(acolito);

mostrarNombre(carta);

function mostrarNombre(carta) {
    console.log("Las cartas son: ");
    carta.forEach(function (carta) {
        console.log(carta.nombre);
    });
}

//2 - Mostrar en la página web las 3 primeras cartas en un listado, mostrando el nombre y 
//el daño como título y subtítulo, la descripción como un párrafo y una imagen(la especificada 
//en image_url como src).

const cartasAMostrar = 3;
let mensaje = "";
mensaje += "<ol>";
for (let i = 0; i < cartasAMostrar; i++) {
    mensaje += "<li>" + "<h1>" + carta[i].nombre + "</h1>" + "<h2>" + carta[i].danio + "</h2>"
        + "<p>" + carta[i].descripcion + "</p>" + "<img id='carta'src=" + carta[i].url_imagen + ">" + "</li>";
}
mensaje += "</ol>";
document.getElementById("mostrar_resultado").innerHTML = mensaje;


////var div = document.getElementById("mostrar_resultado");
////let ul = div.getElementsByTagName('ul')[0];
////let li = document.createElement("li"); //meteria todo en un li
////li.appendChild(document.createTextNode("Uno"));
////ul.appendChild(li);

//3 - En vez de mostrar las 3 primeras cartas del array, mostrar 3 aleatorias(cada vez que se
//    recarga la página debería mostrar 3 diferentes).

const cartasAMostrar = 3;
let mensaje = "";
mensaje += "<ol>"; //aqui habria que poner un for para que no repita carta
for (let i = 0; i < cartasAMostrar; i++) {

    let j = Math.floor(Math.random() * carta.length);

    mensaje += "<li>" +
        "<h1>" + carta[j].nombre + "</h1>" +
        "<h2>" + carta[j].danio + "</h2>" +
        "<p>" + carta[j].descripcion + "</p>" +
        "<img id='carta' src=" + carta[j].url_imagen + ">" +
        "<input type='button' value='Jugar carta' onclick= 'alert(\"Has jugado la carta " + "" + carta[j].nombre + "\")'/>" +
        "</li>";
}
mensaje += "</ol>";
document.getElementById("mostrar_resultado").innerHTML = mensaje;
//dentro del alert hemos tenido que usar el \" para que haya jerarquia de comillas.



//4- Usar CSS para mostrar las cartas de un modo más elegante.
//5- Usar :hover sobre la imagen para que cambie la rotación de la carta al pasar 
//el ratón encima(buscar transform rotation en w3schools).
//6- Usar la propiedad transition para que el giro de la carta no sea 
//instantánea sino animada(buscar en w3schools y lo tenéis 
//también en las diapositivas de JavaScript y DOM).

