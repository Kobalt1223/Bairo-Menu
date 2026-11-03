
const drinks = {
    margarita: {
        name: "Margarita",
        model: "./models/margarita.glb"
        ingredients: "Blanco, Cointreau, Lime, Salt"
    },

    oldFashioned: {
        name: "Old Fashioned",
        model: "./models/old-fashioned.glb"
        ingredients: "Bourbon, Sugar, Angostura Bitters"
    },

    negroni: {
        name: "Negroni",
        model: "./models/negroni.glb"
        ingredients: "Campari, Antica Formula, JJ Whitley"
    },

    spritz: {
        name: "Spritz",
        model: "./models/spritz.glb"
        ingredients: "Prosecco, Aperitive, Soda"
    },

    french72: {
        name: "French 72",
        model: "./models/french-72.glb"
        ingredients: "Prosecco, Tatra 72, Honey, Lime"
    }
};

const viewer = document.getElementById("viewer");
const status = document.getElementById("status");

function showDrink(drinkID) {
    const drink = drinks[drinkID];
    if (!drink) return;

    document.getElementById("menu").style.display = "none";
    document.getElementById("drink").style.display = "block";

    document.getElementById("drinkName").textContent = drink.name;

    status.textContent = "Loading model...";
    viewer.setAttribute("src", drink.model);
}

function backToMenu() {
    document.getElementById("drink").style.display = "none";
    document.getElementById("menu").style.display = "block";
    viewer.removeAttribute("src");
}

viewer.addEventListener("load", () => {
    status.textContent = "";
    console.log("3D model loaded successfully");
});

viewer.addEventListener("error", (event) => {
    status.textContent = "Model loading failed. Check console.";
    console.error("Model error:", event.detail);
});

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
        drink.ingredients || "Ingredients coming soon.";

    document.getElementById("ingredientsOverlay")
        .classList.add("visible");
}

function closeIngredients() {
    document.getElementById("ingredientsOverlay")
        .classList.remove("visible");
}

