const htmlBody = document.querySelector("body");
let divSubmenu;

// LEARN: Popup
// Event listener & handler:
const btn_learn = document.querySelector("#btn_learn");
btn_learn.addEventListener("click", unfoldSubmenu);

function unfoldSubmenu(){
    // CSS findes i forvejen, nu skabes submenuen og skrives i HTML:
    divSubmenu = document.createElement("div");
    divSubmenu.id = "submenu";
    divSubmenu.innerHTML = '<a href="learn_js.html">' + '<img src="images/learnlogos/jslogo.png">' + '</a>' + '<a href="learn_unity.html">' + '<img src="images/learnlogos/unitylogowhite.png">' + '</a>' + '<p onclick="closeSubmenu()">X</p>';
    htmlBody.appendChild(divSubmenu);

    // Animationen kommer på:
    divSubmenu.style.animationName = "submenuEntry";
}

function closeSubmenu(){
    htmlBody.removeChild(divSubmenu);
}

