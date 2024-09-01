console.log("Mojn!");

const menuicon = document.getElementById("menuicon");
const burgermenu = document.getElementById("burgermenu");

burgermenu.style.display = "none";
burgermenu.style.color = "green";

menuicon.onclick = openBurgermenu;
menuicon.onmouseover = openBurgermenu;
burgermenu.onclick = closeBurgermenu;

function openBurgermenu(){
    burgermenu.style.display = "block";
}

function closeBurgermenu(){
    burgermenu.style.display = "none";
}