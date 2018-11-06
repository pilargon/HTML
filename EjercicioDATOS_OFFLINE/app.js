let boton = document.getElementById("persona_btn");
if (boton !== null) {
    boton.addEventListener("click", getPerson);
}

let personaGuardada = JSON.parse(localStorage.getItem("persona"));//aqui tambien pasar a JSON
if (personaGuardada !== null) {
    document.getElementById("mostrar").innerHTML = personaGuardada.nombre + " " + personaGuardada.apellido;
}

function getPerson() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    let persona = { nombre: nombre, apellido: apellido }
    document.getElementById("mostrar").innerHTML = persona.nombre + " " + persona.apellido;
    localStorage.setItem("persona", JSON.stringify(persona));//TENEMOS QUE PASARLO A JSON PORQUE SI NO,NO RECONOCE EL STRING
}

function cambiarFecha() {
 
    let fechaCogida = document.querySelector('input[type="date"]');
    let xhr = new XMLHttpRequest();
   
    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=2oqMwUicGmGKIUdJQv6LDbQZGFcVVskfnBTKLZFU&date="
        + fechaCogida.value);

    xhr.onreadystatechange = function () {

        console.log(xhr.readyState);
        if (xhr.readyState === 4 & xhr.status === 200) {

            let responseObject = JSON.parse(xhr.response);
            showData(responseObject.url);

        } else if (xhr.readyState === 4 & xhr.status === 400) {
            document.getElementById("info").innerHTML = "Fecha incorrecta";
        }

    };
    xhr.send();
};
function showData(image_url) {
    
    let result = "<img src='" + image_url + "'/>";
    document.getElementById("info").innerHTML = result;
}
//1a pagina: pide nombre y apellidos

//2a pagina:Pide fecha y nos muestra la foto de la nasa de esa fecha y abajo nombre y apellido

//Que cargue primero la foto y luego los apellidos