(function init() {
    //let actualizarBtn = document.getElementById("titulo_btn");
    //if (actualizarBtn !== null) {
    //    actualizarBtn.addEventListener("click", obtenerDatosPelicula);
    //}

    //let nombrePelicula = localStorage.getItem("titulo");
    //if (nombrePelicula !== null) {

    //} else {
    //    obtenerDatosPelicula();
    //}

    //ESTA PARTE COGE EL TITULO O A;O DE LA PELICULA PREVIAMENTE GUARDADO Y LA SACA
    let boton = document.getElementById("titulo_btn");
    if (boton !== null) {
        boton.addEventListener("click", getName); //evento que cuando le das click hace el getname.Para "poner"el boton en el js.
    }

    let boton2 = document.getElementById("year_btn");
    if (boton2 !== null) {
        boton2.addEventListener("click", getYear);
    }

    let nombreGuardado = sessionStorage.getItem("titulo");
    if (nombreGuardado !== null) {
        document.getElementById("mostrar").innerHTML = nombreGuardado;
    }
    let yearGuardado = sessionStorage.getItem("release_date");
    if (yearGuardado !== null) {
        document.getElementById("mostrar").innerHTML = yearGuardado;
    }
    function getName() {
        let titulo = document.getElementById("actualizar_titulo").value; //toma el valor del nombre metido en el boton
        obtenerDatosPelicula(titulo);
        sessionStorage.setItem("titulo", titulo); //con setitem pasamos un valor que guardamos en la bbdd interna
        
    }
    function getYear() {
        let year = document.getElementById("release_date").value;
        document.getElementById("mostrar").innerHTML = year;
        sessionStorage.setItem("release_date", date);
    }

}());



function obtenerDatosPelicula(titulo) {
    //console.log("VAMOS A COGER LA PELICULA DE INTERNET");
    let xhr = new XMLHttpRequest();
    let url;
    if (titulo !== undefined) {
        url = "https://api.themoviedb.org/3/search/movie?api_key=4024f770e585ab0a055a70a260c83507&withcompanies=2&query=" + titulo;
    } else {
        url = "https://api.themoviedb.org/3/discover/movie?api_key=4024f770e585ab0a055a70a260c83507&include_adult=false&page=1&with_companies=2";
    }
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let peliculaGuardada = JSON.parse(xhr.response);
            mostrarDatos(peliculaGuardada);
        }
    };
    xhr.send();
}

function mostrarDatos(pelis) {
    let datosPeliculas = [];
    for (let i = 0; i < pelis.results.length; i++) {
        let url = "https://image.tmdb.org/t/p/w500" + pelis.results[i].poster_path;
        datosPeliculas.push({
            title: pelis.results[i].title,
            poster_path:url,
            date: pelis.results[i].release_date,
            overview:pelis.results[i].overview
        });

    }
    localStorage.setItem("pelicula", JSON.stringify(datosPeliculas));
    // se pueden usar removeItem y clearItem para borrar elementos guardados
    //let result = "";

    for (let i = 0; i < datosPeliculas.length; i++) {
        let texto = document.createTextNode(datosPeliculas[i].title);
        let argumento = document.createTextNode(datosPeliculas[i].overview);
        let fecha = document.createElement("li");
        let parrafo = document.createElement("li");
        let poster = document.createElement("IMG");
        
        //fecha.setAttribute("value", "date");
        fecha.setAttribute("data", datosPeliculas[i].release_date);
 
        poster.setAttribute("src", datosPeliculas[i].poster_path);
        poster.setAttribute("width", "200");
        poster.setAttribute("height", "250");

        parrafo.setAttribute("class", "datos col-sm-3 list-group-item");
        parrafo.setAttribute("onclick", "alert('" + datosPeliculas[i].title + "')");

        parrafo.appendChild(texto);
        parrafo.appendChild(fecha);
        parrafo.appendChild(poster);
        parrafo.appendChild(argumento);
        document.getElementById("fila_peliculas").appendChild(parrafo);
        // para eliminar, usar elementoHTML.removeChild(elementoHTML)  
    }

}

















