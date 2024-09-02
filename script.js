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

/* GALLERY on PORTFOLIO: */
const gallery_big = document.getElementById("gallery_big");
const gal_clouds = document.getElementById("gal_clouds");
const gal_forelf = document.getElementById("gal_forelf");
const gal_kirke = document.getElementById("gal_kirke");
const gal_swans = document.getElementById("gal_swans");

gal_clouds.onclick = function(){
    showBig(this);
}

gal_forelf.onclick = function(){
    showBig(this);
}

gal_kirke.onclick = function(){
    showBig(this);
}

gal_swans.onclick = function(){
    showBig(this);
}

function showBig(klikketThumb){
    let newSource = klikketThumb.src;
    gallery_big.src = newSource;
}