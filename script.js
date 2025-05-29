// BURGERMENU:
const menuicon = document.getElementById("menuicon");
const burgermenu = document.getElementById("burgermenu");

burgermenu.style.display = "none";
burgermenu.style.color = "green";

menuicon.onclick = openBurgermenu;
burgermenu.onclick = closeBurgermenu;

function openBurgermenu(){
    burgermenu.style.display = "block";
}

function closeBurgermenu(){
    burgermenu.style.display = "none";
}

/* SORTERING EFTER GENRE: */
function showGamesByClass(className) {
    const allgames = document.querySelectorAll("#gamehist #gamecontainer section");
    allgames.forEach((game) => {
        game.style.display = "none";
    });

    const selectedGames = document.querySelectorAll("." + className);
    selectedGames.forEach((game) => {
        game.style.display = "block";
    });
}

const btn_platformer = document.getElementById("platformer");
btn_platformer.onclick = function() {
    showGamesByClass("platformer");
};

const btn_fps = document.getElementById("fps");
btn_fps.onclick = function() {
    showGamesByClass("fps");
};

const btn_racing = document.getElementById("racing");
btn_racing.onclick = function() {
    showGamesByClass("racing");
};

const btn_shooter = document.getElementById("shooter");
btn_shooter.onclick = function(){
    showGamesByClass("shooter");
};


const btn_beatemup = document.getElementById("beatemup");
btn_beatemup.onclick = function() {
    showGamesByClass("beatemup");
};

/* SORTERING PÅ GAMEHIST: DEPRECATED: */
/*
const btn_platformer = document.getElementById("platformer");

btn_platformer.onclick = function(){
    // Skjul alle spil først:
    const allgames = document.querySelectorAll("#gamehist #games div");
    allgames.forEach((game) => {
        game.style.display = "none";
    });

    // Vis kun platformer-spil:
    const platformergames = document.querySelectorAll(".platformer");
    platformergames.forEach((game) => {
        game.style.display = "flex";
    });

}

// FPS Button og handler:
const btn_fps = document.getElementById("fps");
btn_fps.onclick = function(){
    const allgames = document.querySelectorAll("#gamehist #games div");
    allgames.forEach((game) => {
        game.style.display = "none";
    });

    const fpsgames = document.querySelectorAll(".fps");
    fpsgames.forEach((game) => {
        game.style.display = "flex";
    });
}

// Racing Button og handler:
const btn_racing = document.getElementById("racing");
btn_racing.onclick = function(){
    const allgames = document.querySelectorAll("#gamehist #games div");
    allgames.forEach((game) => {
        game.style.display = "none";
    });

    const racinggames = document.querySelectorAll(".racing");
    racinggames.forEach((game) => {
        game.style.display = "flex";
    });
}
*/