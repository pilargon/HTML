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
