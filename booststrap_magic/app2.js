
(function init() {

    
    let peli = JSON.parse(localStorage.getItem("peliculaFavorita"));

   
    let texto = document.createTextNode(peli.title);
    let argumento = document.createTextNode(peli.overview);
    let parrafo = document.createElement("li");
    let poster = document.createElement("IMG");

    poster.setAttribute("src", peli.poster_path);
    poster.setAttribute("width", "200");
    poster.setAttribute("height", "250");

    parrafo.setAttribute("class", "datos col-sm-4 list-group-item");
    parrafo.appendChild(texto);
    parrafo.appendChild(argumento);
    parrafo.appendChild(poster);
    document.getElementById("fila_peliculas").appendChild(parrafo);

}());