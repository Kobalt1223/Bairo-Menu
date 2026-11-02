const drinks = {

    margarita: {
        name: "Margarita",
        model: "Models/margarita.glb"
    },

    oldFashioned: {
        name: "Old Fashioned",
        model: "Models/old-fashioned.glb"
    },

    negroni: {
        name: "Negroni",
        model: "models/negroni.glb"
    },

    spritz: {
        name: "Spritz",
        model: "models/spritz.glb"
    },

    french72: {
        name: "French 72",
        model: "models/french-72.glb"
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