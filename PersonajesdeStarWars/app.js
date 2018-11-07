
document.getElementById("buscar_btn").addEventListener("click", obtenerPersonas);//ponemos el "boton" en el js

function obtenerPersonas() {

    let nombre = document.getElementById("nombre").value;
    let url = "https://swapi.co/api/people/?search=" + nombre;
    //let url = "https://swapi.co/api/people/"+ /planets +"?search=" + nombre;//esto con los planetas y especies

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            mostrarDatos(JSON.parse(xhr.response));
        }
    };
    xhr.send();
}

function mostrarDatos(responseObj) { //muestra las personas
    let listaDeGente = responseObj.results;//results es un objeto con una lista dentro
    let mensajeEnHtml = "";
    for (let i = 0; i < listaDeGente.length; i++) {
        let persona = listaDeGente[i];
        let mensaje = "<p>" + persona.name + "-" + persona.birth_year + "</p>";
        mensajeEnHtml += mensaje;
    }
    document.getElementById("lista").innerHTML = mensajeEnHtml;
}