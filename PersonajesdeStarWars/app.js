//1- Utilizar la base de datos de Star Wars (disponible en https://swapi.co/documentation),
//para obtener la lista de planetas y mostrarlos en un dropdown(etiqueta select).

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.co/api");
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
        let responseObject = JSON.parse(xhr.response);
        showData(responseObject.planets);
    } else if (xhr.readyState === 4 && xhr.status === 400) {
        document.getElementById("info").innerHTML = "Fecha incorrecta";
    }
};
xhr.send();

function showData(planets) {
    let result = "<p>" + planets + "</p>";
    //result += "<p>" + people + "</p>";
    //result += "<p>" + films + "</p>";
    //result += "<p>" + species + "</p>";
    //result += "<p>" + vehicles + "</p>";
    //result += "<p>" + starships + "</p>";
    document.getElementById("info").innerHTML = result;
}
