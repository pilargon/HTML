

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

        } else if (xhr.readyState === 4 & xhr.status === 400) {
            document.getElementById("info").innerHTML = "Fecha incorrecta";
        }

    };
    xhr.send();
};

