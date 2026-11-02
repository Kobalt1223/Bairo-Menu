const drinks = {

    margarita: {
        name: "Margarita",
        model: "models/Margarita.glb"
    },

    nun: {
        name: "Nun",
        model: "models/nun.glb"
    },

    none: {
        name: "None",
        model: "models/none.glb"
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