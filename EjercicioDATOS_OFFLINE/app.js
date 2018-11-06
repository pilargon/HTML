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
 
    let fechaCogida = document.querySelector('input[type="date"]');//2a parte 
    let xhr = new XMLHttpRequest();
   
    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=2oqMwUicGmGKIUdJQv6LDbQZGFcVVskfnBTKLZFU&date="
        + fechaCogida.value);//2a parte

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