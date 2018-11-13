(function init() {
  
    //ESTA PARTE COGE EL TITULO O A;O DE LA PELICULA PREVIAMENTE GUARDADO Y LA SACA
    let boton = document.getElementById("titulo_btn");
    if (boton !== null) {
        boton.addEventListener("click", getName); 
    }
 
    let nombreGuardado = sessionStorage.getItem("titulo");
    if (nombreGuardado !== null) {
        document.getElementById("mostrar").innerHTML = nombreGuardado;
    }
  
    function getName() {
        let titulo = document.getElementById("actualizar_titulo").value; 
        obtenerDatosPelicula(titulo);
        sessionStorage.setItem("titulo", titulo); 
        
    }
  
}());



function obtenerDatosPelicula(titulo) {
    
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
    let peliculasFavoritas = [];
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
    
    for (let i = 0; i < datosPeliculas.length; i++) {
        let texto = document.createTextNode(datosPeliculas[i].title);
        let argumento = document.createTextNode(datosPeliculas[i].overview);
        let parrafo = document.createElement("li");
        parrafo.setAttribute("id", "peli");
        let poster = document.createElement("IMG");
                  
        poster.setAttribute("src", datosPeliculas[i].poster_path);
        poster.setAttribute("width", "200");
        poster.setAttribute("height", "250");

        parrafo.setAttribute("class", "datos col-sm-3 list-group-item");


        parrafo.addEventListener("click", function (e) {
            alert(datosPeliculas[i].title + " ahora en favoritos");            
            localStorage.setItem("peliculaFavorita", JSON.stringify(datosPeliculas[i]));
        });


        //parrafo.appendChild(texto);
        parrafo.appendChild(poster);
        //parrafo.appendChild(argumento);
        document.getElementById("fila_peliculas").appendChild(parrafo);
    }
}

















