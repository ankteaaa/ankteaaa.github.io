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

/* SORTERING PÅ GAMEHIST: */
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