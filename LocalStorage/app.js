let boton = document.getElementById("persona_btn");
if (boton !== null) {
    boton.addEventListener("click", getPerson);
}

let personaGuardada = JSON.parse(localStorage.getItem("persona"));//aqui tambien pasar a JSON
if (personaGuardada !== null) {
    document.getElementById("mostrar").innerHTML = personaGuardada.nombre+ " " + personaGuardada.edad;
}

function getPerson() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    let persona = {nombre:nombre,edad:edad}

    document.getElementById("mostrar").innerHTML = persona.nombre + " " + persona.edad;

    localStorage.setItem("persona",JSON.stringify(persona));//TENEMOS QUE PASARLO A JSON PORQUE SI NO,NO RECONOCE EL STRING
}
 //funciona igual que el sessionstorage pero guarda el dato aunque cierre la pesta;a