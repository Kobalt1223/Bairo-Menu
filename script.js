
const drinks = {
    margarita: {
        name: "Margarita",
        model: "./models/margarita.glb"
    },

    oldFashioned: {
        name: "Old Fashioned",
        model: "./models/old-fashioned.glb"
    },

    negroni: {
        name: "Negroni",
        model: "./models/negroni.glb"
    },

    spritz: {
        name: "Spritz",
        model: "./models/spritz.glb"
    },

    french72: {
        name: "French 72",
        model: "./models/french-72.glb"
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
