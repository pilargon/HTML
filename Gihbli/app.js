const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

(function init() {   

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
        obtenerDatosPelicula(fecha);
        sessionStorage.setItem("release_date", fecha);
    }

}());



function obtenerDatosPelicula(titulo) {
   
    let xhr = new XMLHttpRequest();
    let url;
    if (titulo !== undefined) {
        url = "https://ghibliapi.herokuapp.com/films?title=" + titulo;
    } else {
        url = "https://ghibliapi.herokuapp.com/films";
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

function mostrarDatos(responseObj) { 
    let pelicula = responseObj;
    for (let i = 0; i < responseObj.length; i++) {
        pelicula.push({
            title: responseObj[i].title,
            release_date: responseObj[i].release_date,
            description: responseObj[i].overview
        });
    }
    document.getElementById("pelicula").JSON.stringify(pelicula);


    for (let i = 0; i < pelicula.length; i++) {
        let texto = document.createTextNode(pelicula[i].title);
        let argumento = document.createTextNode(pelicula[i].overview);
        let fecha = document.createTextNode(pelicula[i].release_date);
        fecha = document.createElement("li");
        let parrafo = document.createElement("li");
              
        parrafo.setAttribute("class", "datos col-sm-3 list-group-item");
        parrafo.setAttribute("onclick", "alert('" + pelicula[i].title + "')");

        parrafo.appendChild(texto);
        parrafo.appendChild(fecha);
        parrafo.appendChild(argumento);
        document.getElementById("fila_peliculas").appendChild(parrafo);
        // para eliminar, usar elementoHTML.removeChild(elementoHTML)  
    }
}








//me muestra todas la pelis en plan "bonito

let request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

    
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        //errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

request.send();