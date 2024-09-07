// JavaScript Document
window.onload = function(){
		var score = 0;
		// var lives = 3;
	
		var number = {
				y:0,
				height:90,
				colliding: false,
				currentNumber: 0,
				start(){
					var n = document.getElementById("number");
					n.style.visibility = "visible";
					var randomNumber = Math.floor(Math.random() * 9);
					this.currentNumber = randomNumber;
					this.y = 0;
					n.innerHTML = "" + this.currentNumber;
				},
				fall(){
					var n = document.getElementById("number");
					this.y++;
					n.style.top = "" + this.y + "px";
				},
				awardScore(key){
					var k = key;
					//var n = document.getElementById("number");
					var ui = document.getElementById("ui");
					
					if (k == 0 && this.colliding == true && this.currentNumber == 0){
						console.log("0 is the correct answer!");
						score++;
						ui.innerHTML = "" + score;
						this.start();
						
					}
					if (k == 1 && this.colliding == true && this.currentNumber == 1){
						console.log("1 is the correct answer!");
						score++;
						ui.innerHTML = "" + score;
						this.start();
					}
					if (k == 2 && this.colliding == true && this.currentNumber == 2){
						console.log("You pressed 2");
						score++;
						ui.innerHTML = "" + score;
						this.start();
					}
					if (k == 3 && this.colliding == true && this.currentNumber == 3){
						console.log("You pressed 3");
						score++;
						ui.innerHTML = "" + score;
						this.start();
					}
					if (k == 4 && this.colliding == true && this.currentNumber == 4){
						console.log("You pressed 4");
						score++;
						ui.innerHTML = "" + score;
						this.start();
					}
					if (k == 5 && this.colliding == true && this.currentNumber == 5){
						console.log("You pressed 5");
						score++;
						ui.innerHTML = "" + score;
						this.start();
					}
					if (k == 6 && this.colliding == true && this.currentNumber == 6){
						console.log("You pressed 6");
						score++;
						ui.innerHTML = "" + score;
						this.start();
					}
					if (k == 7 && this.colliding == true && this.currentNumber == 7){
						console.log("You pressed 7");
						score++;
						ui.innerHTML = "" + score;
						this.start();
					}
					if (k == 8 && this.colliding == true && this.currentNumber == 8){
						console.log("You pressed 8");
						score++;
						ui.innerHTML = "" + score;
						this.start();
					}
					if (k == 9 && this.colliding == true && this.currentNumber == 9){
						console.log("You pressed 9");
						score++;
						ui.innerHTML = "" + score;
						this.start();
					}
					
				},
				update(){
					var n = document.getElementById("number");
					this.fall();
	
					if(number.colliding == true){
						n.style.textShadow = "0px 0px 13px yellow";
						n.style.color = "yellow";
					}else{
						n.style.textShadow = "none";
						n.style.color = "white";
					}
					
				}
			}
			
			var killLine = {
				y:600,
				height: 50,
				start(){
					var k = document.getElementById("killLine");
					k.style.top = "" + this.y + "px";
					k.style.visibility = "visible";
					
				}
			}
			
			var ui = {
				start(){
					var ui = document.getElementById("ui");
					ui.style.visibility = "visible";
					var vid = document.getElementById("video");
					vid.style.visibility = "visible";
				}
			}
			
			// GRAVITY AND COLLISION:
			var gameMaster = {
				menu(){
					document.getElementById("killLine").style.visibility = "hidden";
					document.getElementById("number").style.visibility = "hidden";
					document.getElementById("video").style.visibility = "hidden";
					document.getElementById("ui").style.visibility = "hidden";
					document.getElementById("menu").style.visibility = "visible";
					document.getElementById("menu").onclick = function(){
						clickHandler(this)};
				},
				start(){
					// Initiate keyListener
					document.addEventListener("keypress", keyHandler);
					
					// Start music:
					var music = document.getElementById("music");
					music.play();
					
					// Run start method of each object:
					number.start();
					killLine.start();
					ui.start();
					
					// Run update loop:
					this.update();
				},
				update(){
					//Timer to actually perform the update:
					setInterval(function(){
						
						// Call update function of each game object:
						number.update();
						
						// Physics:
						if (
							killLine.y < number.y + number.height 
							&& 
							killLine.y + killLine.height > number.y
						){
							number.colliding = true;
							   
						}
						else{ 
							number.colliding = false;
						}
		
						
						
					},10); // end setInterval
				} // end startGame
			} // end gameMaster object
			
			function keyHandler(pressedKey) {
				var k = pressedKey.key;
				if (k=="0"||k=="1"||k=="2"||k=="3"||k=="4"||k=="5"||k=="6"||k=="7"||k=="8"||k=="9"){
					console.log("A number was pressed!");
					number.awardScore(k);
				}
			}
	
			function clickHandler(me){
				me.style.visibility = "hidden";
				gameMaster.start();
			}
								
			gameMaster.menu();
			
	}