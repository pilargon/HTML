

function cambiarFecha() {

    //year = document.getElementById("year").value; //1a parte
    //month = document.getElementById("month").value;//1a parte
    //day = document.getElementById("day").value; //1a parte

    let fechaCogida = document.querySelector('input[type="date"]');//2a parte 
    let xhr = new XMLHttpRequest();
    //xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=2oqMwUicGmGKIUdJQv6LDbQZGFcVVskfnBTKLZFU&date="
    //    + year + "-" + month + "-" + day); //1a parte
    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=2oqMwUicGmGKIUdJQv6LDbQZGFcVVskfnBTKLZFU&date="
        + fechaCogida.value);//2a parte

    xhr.onreadystatechange = function () {

        console.log(xhr.readyState);
        if (xhr.readyState === 4 & xhr.status === 200) {

            let responseObject = JSON.parse(xhr.response);
            showData(responseObject.date, responseObject.title, responseObject.explanation, responseObject.url);

            let date = JSON.parse(xhr.response); //4a parte  TODO:
            escribirFecha(date);    //4a parte

        } else if (xhr.readyState === 4 & xhr.status === 400) {
            document.getElementById("info").innerHTML = "Fecha incorrecta";
        }

    };
    xhr.send();
};

function showData(date, title, explanation, image_url) {
    let result = "<p>" + date + "</p>";
    result += "<p>" + title + "</p>";
    result += "<p>" + explanation + "</p>";
    result += "<img src='" + image_url + "'/>";
    document.getElementById("info").innerHTML = result;
}

//4 - En vez de mostrar la información de un día, hacer que en un mismo string, 
//se sumen las descripciones desde la fecha indicada por el usuario hasta 14 días antes.


function escribirFecha(date) {
    let index = 0;
    let xhrDate = new XMLHttpRequest();
    xhrDate.open("GET", date[index]);
    xhrDate.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response).name);
            index++;
            if (index < 14) {
                xhrDate.open("GET", date[index]);
                xhrDate.send();
            }
        }
    };
    xhrDate.send();

}

