let boton = document.getElementById("nombre_btn");
if (boton !== null) {
    boton.addEventListener("click", getName); //evento que cuando le das click hace el getname.Para "poner"el boton en el js.
}

let nombreGuardado = sessionStorage.getItem("nombre");
if (nombreGuardado !== null) {
    document.getElementById("mostrar").innerHTML = nombreGuardado;
}

function getName() {
    let nombre = document.getElementById("nombre").value; //toma el valor del nombre metido en el boton
    document.getElementById("mostrar").innerHTML = nombre;
    sessionStorage.setItem("nombre", nombre); //con setitem pasamos un valor que guardamos en la bbdd interna
}


//Lo que hacemos con este ejercicio es crear 2 html.En el primero guardamos con el storage un string introducido
//por un boton. En el html2 no lo guardamos.Los 2 estan relacionados con el mismo js.

//es lo que haria por ej. la pagina del telepizza que te guarda datos como pizza escogida y bebidas sin haber hecho
//login.

//guardaria los datos por SESION,es decir,que si cerramos la pesta;a se perderia. Si desde la misma pesta;a 
//cargamos el otro html nos mantendria el valor.