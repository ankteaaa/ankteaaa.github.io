// JavaScript Document
window.onload = function(){
		var score = 0;
		var calculationsLeft = 10; // Amount of calculations in level
		var music = document.getElementById("music");
	
		var number = {
				y:0,
				height:90,
				colliding: false,
				active:false,
				currentNumber: 0,
				start(){
					var n = document.getElementById("number");
					var calculations;
					var randomCalculation;
					
					
					if(calculationsLeft <= 0){
						gameMaster.stop();
					}else{
						this.active = true;
						calculationsLeft--;
						n.style.visibility = "visible";
						n.style.display = "block";
						this.y = 0;
						var randomNumber = Math.floor(Math.random() * 9);
						this.currentNumber = randomNumber;
						if (randomNumber == 0){
							calculations = ["0+0", "0+0+0+0", "0+0+0"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						} else if (randomNumber == 1){
							calculations = ["0+1", "1+0", "0+1+0"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						} else if (randomNumber == 2){
							calculations = ["1+1", "0+2", "0+1+1"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						} else if (randomNumber == 3){
							calculations = ["2+1", "1+2", "1+1+1"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						} else if  (randomNumber == 4){
							calculations = ["3+1", "2+2", "1+3"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						} else if (randomNumber == 5){
							calculations = ["4+1", "3+2", "2+3"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						} else if (randomNumber == 6){
							calculations = ["5+1", "4+2", "3+3"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						} else if (randomNumber == 7){
							calculations = ["6+1", "5+2", "4+3"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						} else if (randomNumber == 8){
							calculations = ["7+1", "6+2", "5+3"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						} else if (randomNumber == 9){
							calculations = ["8+1", "7+2", "6+3"];
							randomCalculation = Math.floor(Math.random() * calculations.length);
							n.innerHTML = "" + calculations[randomCalculation];
						}
					}// end else: If there are still calculations left.
				},
				fall(){
					var n = document.getElementById("number");
					if(this.active == true){
						this.y+=2;
						n.style.top = "" + this.y + "px";
						}
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
				die(){
					score--;
					ui.innerHTML = "" + score;
					this.start();
				},
				stop(){
					var n = document.getElementById("number");
					n.style.display = "none";
					this.active = false;
					this.y = 0;
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
					
					// Kill when reaching bottom
					if(number.y > window.innerHeight){
						number.die();
					}
					
				}
			}
			
			var killLine = {
				y:600,
				height: 50,
				start(){
					var k = document.getElementById("killLine");
					k.style.top = "" + this.y + "px";
					k.style.display = "block";
					
				},
				stop(){
					var k = document.getElementById("killLine");
					k.style.display = "none";
				}
			}
			
			var ui = {
				start(){
					var ui = document.getElementById("ui");
					ui.style.display = "block";
					ui.style.visibility = "visible";
					var vid = document.getElementById("video");
					vid.style.display = "block";
					vid.style.visibility = "visible";
				},
				stop(){
					var ui = document.getElementById("ui");
					ui.style.display = "none";
					var vid = document.getElementById("video");
					vid.style.display = "none";
				}
			}
			
			// GRAVITY AND COLLISION:
			var gameMaster = {
				start(){
					// Initiate keyListener
					document.addEventListener("keypress", keyHandler);
					
					// 
					calculationsLeft = 10;
					
					// Start music:
					// var music = document.getElementById("music");
					music.play();
					
					// Run start method of each object:
					number.start();
					killLine.start();
					ui.start();
					
					// Turn off playButton:
					var playButton = document.getElementById("playButton");
					playButton.style.display = "none";
					
					// Run update loop:
					this.update();
				},
				stop(){
					number.stop();
					killLine.stop();
					ui.stop();
					
					// Show playButton:
					var playButton = document.getElementById("playButton");
					playButton.style.display = "block";
					playButton.onclick = function(){
						gameMaster.start();
					}
					// Stop music:
					music.pause();
					
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
						};
						
						if (number.y > window.height){
							number.die();
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
								
			gameMaster.stop();
			
	}