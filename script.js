const drinks = {

    mojito: {
        name: "Margarita",
        model: "models/margarita.glb"
    },

    negroni: {
        name: "Nun",
        model: "models/negroni.glb"
    },

    martini: {
        name: "None",
        model: "models/martini.glb"
    }

};


function showDrink(drinkID) {

    const drink = drinks[drinkID];

    document.getElementById("menu").style.display = "none";

    document.getElementById("drink").style.display = "block";

    document.getElementById("drinkName").textContent = drink.name;

    document.getElementById("viewer").src = drink.model;

}


function backToMenu() {

    document.getElementById("drink").style.display = "none";

    document.getElementById("menu").style.display = "block";

}