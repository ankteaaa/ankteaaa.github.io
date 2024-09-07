// JavaScript Document

/* Kilder:
Assign the onclick event (button.onclick = awardScore): https://www.w3schools.com/jsref/event_onclick.asp

Create element: https://www.w3schools.com/jsref/met_document_createelement.asp

Create attribute:
https://www.w3schools.com/jsref/met_document_createattribute.asp

*/

window.onload = function(){
	
	
	// VARIABLE DECLARATIONS:
	var score = 0;
	var gameOn = true;
	// UI Elements:
	var ui_score = document.getElementById("score");
	var ui_messages = document.getElementById("messages");
	var button = document.getElementById("button");

	// Music & Audio:
	var fx_music = document.getElementById("fx_music");
	var fx_levelup = document.getElementById("fx_levelup");
	
	// Trophies:
	var trophy1 = document.getElementById("trophy1");
	var trophy2 = document.getElementById("trophy2");
	var trophy3 = document.getElementById("trophy3");
	
	
	/* AWARDSCORE: Called on button click: */
	button.onclick = awardScore;

	function awardScore(){
		if(gameOn){
			// Basic functionality:
			fx_music.play();
			score ++;
			ui_score.innerHTML = score;
			
			// Animation:
			button.style.animationName = "grow";
			setTimeout(function(){
				button.style.animationName = "none";
			},100);
			
			// Audio:
			var fx = document.createElement("AUDIO");
			var attribute = document.createAttribute("src");
			attribute.value = "assets/audio/switch7.ogg";
			fx.setAttributeNode(attribute); 
			document.body.appendChild(fx);
			fx.play();

			// Level Up:
			if (score == 10){
				ui_messages.innerHTML = "Level 1!";
				ui_messages.style.animationName = "growLarge";
				setTimeout(function(){
					ui_messages.style.animationName = "none";
				},1000);
				trophy1.style.display = "block";
				fx_levelup.play();
			} 
			if(score == 50){
				ui_messages.innerHTML = "Level 2!";
				ui_messages.style.animationName = "growLarge";
				setTimeout(function(){
					ui_messages.style.animationName = "none";
				},1000);
				trophy2.style.display = "block";
				fx_levelup.play();
			}
			if(score == 100){
				ui_messages.innerHTML = "Level 3!";
				ui_messages.style.animationName = "growLarge";
				setTimeout(function(){
					ui_messages.style.animationName = "none";
				},1000);
				trophy3.style.display = "block";
				fx_levelup.play();
			}
		} // End if gameOn
	}
	
	// COUNTDOWN:	
	function countdown(){
		var time = 30;
		var ui_time = document.getElementById("time");
		setInterval(function(){
			if(time > 0){
				time--;
				ui_time.innerHTML = time;
			}else{
				gameOn = false;
			}
		}, 1000);	
	}
	countdown();

}