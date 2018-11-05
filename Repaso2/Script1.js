let gatos = parseInt(prompt("Cuantos gatos tienes?"));



if (isNaN(gatos)) {

    console.log("no has introducido un número");

} else {

    if (gatos < 1) {

        console.log("no tienes gatos");

    } else if (gatos > 1) {

        console.log("tienes " + gatos + " gatos");

    } else {

        console.log("tienes " + gatos + " gato");

    }

}



for (let i = 0; i < gatos; i++) {

    console.log("miao");

}