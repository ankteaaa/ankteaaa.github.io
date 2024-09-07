// Dandelion Hunt Javascript Version 2

// VARS:
var score = 0;
var time = 20;
var UI_score = document.getElementById("score");
var UI_time = document.getElementById("time");

// INITIAL SCORE:
UI_score.innerHTML = "Score: " + score;

	
// DANDELION CLASS / OBJECT CONSTRUCTOR:
function Dandelion(leftPos, topPos){
	// Creation:
	var dandelion = document.createElement("IMG");	
	dandelion.src = "assets/images/dandelion.png";
    dandelion.alt = "Dandelion";

	var fx_twang = document.getElementById("fx_twang");
	fx_twang.load();
	fx_twang.play();
	
	// Style:
	dandelion.style.position = "absolute";
	dandelion.style.top = "" + topPos + "px";
	dandelion.style.left = "" + leftPos + "px";
	
	// Insert dandelion:
	document.body.appendChild(dandelion);
	
	// Animation:
	dandelion.style.animationName = "growDandelion";
	
	// Deathevent and handler:
	dandelion.addEventListener("click", function(){
		// Audio:
		var fx_rip = document.getElementById("fx_rip");
		fx_rip.play();
		// Animation:
		dandelion.style.animationName = "pickDandelion";
		// Hide:
		// dandelion.style.display = "none";
		// Score:
		score++;
		console.log(score);
		UI_score.innerHTML = "Score: " + score;
		setTimeout(function(){
			dandelion.style.display = "none";
			}, 100);
			// was: dandelion.parentNode.removeChild(dandelion);
		
	});
	
	// Self-destruction in order not to flood memory:
	setTimeout(function(){
		dandelion.parentNode.removeChild(dandelion);
	}, 2000);
	
}

// DANDELION SPAWNER:
var dandelionSpawner = setInterval(spawnDandelion, 900);
function spawnDandelion(){
    // Random position calculation:
	var positionX = Math.floor(Math.random() * 900);
	var positionY = Math.floor(Math.random() * 300);
	// Instantiate Dandelion object:
 	var randomDandelion = new Dandelion(positionX, positionY);
}

var countdownTimer = setInterval(function(){
	if(time >= 1){
		time--;
		UI_time.innerHTML = "Time: " + time;
	}else{
		clearInterval(dandelionSpawner);
	}
}, 1000);


/* SOURCES:
document.createElement:  Createhttps://www.w3schools.com/js/js_htmldom_document.asp

Animation: https://www.w3schools.com/cssref/css_animatable.asp
Animation parameters: https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp

Add Event Listener:
https://www.w3schools.com/js/js_htmldom_eventlistener.asp

DOM Commands:
https://www.w3schools.com/jsref/dom_obj_all.asp

Remove Child:
https://www.w3schools.com/jsref/met_node_removechild.asp
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild5

*/
