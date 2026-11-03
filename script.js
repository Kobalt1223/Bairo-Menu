
const drinks = {
    margarita: {
        name: "Margarita",
        model: "./models/margarita.glb",
        ingredients: "Tequila, Cointreau, Lime."
    },
    oldFashioned: {
        name: "Old Fashioned",
        model: "./models/old-fashioned.glb",
        ingredients: "Bourbon, Angostura Bitters, Sugar, Orange."
    },
    negroni: {
        name: "Negroni",
        model: "./models/negroni.glb",
        ingredients: "Campari, Antica Formula, JJ Whitley"
    },
    spritz: {
        name: "Spritz",
        model: "./models/spritz.glb",
        ingredients: "Prosecco, Aperitive, Soda."
    },
    french72: {
        name: "French 72",
        model: "./models/french-72.glb",
        ingredients: "Prosecco, Tatra 72, Honey, Lime."
    }
};

const drinkOrder = Object.keys(drinks);
let currentDrinkIndex = 0;

const viewer = document.getElementById("viewer");
const status = document.getElementById("status");

function showDrink(drinkID) {
    const drink = drinks[drinkID];
    if (!drink) return;

    currentDrinkIndex = drinkOrder.indexOf(drinkID);

    document.getElementById("menu").style.display = "none";
    document.getElementById("drink").style.display = "block";
    document.getElementById("drinkName").textContent = drink.name;

    status.textContent = "Loading model...";
    viewer.src = drink.model;
}

function changeDrink(direction) {
    currentDrinkIndex =
        (currentDrinkIndex + direction + drinkOrder.length)
        % drinkOrder.length;

    showDrink(drinkOrder[currentDrinkIndex]);
}

function backToMenu() {
    closeIngredients();
    document.getElementById("drink").style.display = "none";
    document.getElementById("menu").style.display = "block";
    viewer.removeAttribute("src");
}

function activateAR() {
    if (viewer.canActivateAR) {
        viewer.activateAR();
    } else {
        alert("AR is not available on this device or browser.");
    }
}

function openIngredients() {
    const drinkID = drinkOrder[currentDrinkIndex];
    const drink = drinks[drinkID];

    document.getElementById("ingredientsText").textContent =
        drink.ingredients;

    document.getElementById("ingredientsOverlay")
        .classList.add("visible");
}

function closeIngredients() {
    document.getElementById("ingredientsOverlay")
        .classList.remove("visible");
}

viewer.addEventListener("load", () => {
    status.textContent = "";
});

viewer.addEventListener("error", (event) => {
    status.textContent = "Model loading failed.";
    console.error("Model error:", event.detail);
});
