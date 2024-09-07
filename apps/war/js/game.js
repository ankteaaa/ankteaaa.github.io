// War by Pro Ant Games
// Kilder:
/*
getElementsByClassName: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

/*
NOTE:
- Bør refactores med getElementsByClassName. Bare mærkeligt objekt, man får ud af det.
*/

window.onload = function(){
	// P1 Cards:
	var p1Back = document.getElementById("p1Back");
	var p1Two = document.getElementById("p1_two");
	var p1Three = document.getElementById("p1_three");
	var p1Four = document.getElementById("p1_four");
	var p1Five = document.getElementById("p1_five");
	var p1Six = document.getElementById("p1_six");
	var p1Seven = document.getElementById("p1_seven");
	var p1Eight = document.getElementById("p1_eight");
	var p1Nine = document.getElementById("p1_nine");
	var p1Ten = document.getElementById("p1_ten");
	var p1Jack = document.getElementById("p1_jack");
	var p1Queen = document.getElementById("p1_queen");
	var p1King = document.getElementById("p1_king");
	
	// ARRAY MED KORTENE I FOR P1:
	var p1Deck = [p1Two, p1Three, p1Four, p1Five, p1Six, p1Seven, p1Eight, p1Nine, p1Ten, p1Jack, p1Queen, p1King];
	
	// P2 CARDS:
	var p2Back = document.getElementById("p2Back");
	var p2Two = document.getElementById("p2_two");
	var p2Three = document.getElementById("p2_three");
	var p2Four = document.getElementById("p2_four");
	var p2Five = document.getElementById("p2_five");
	var p2Six = document.getElementById("p2_six");
	var p2Seven = document.getElementById("p2_seven");
	var p2Eight = document.getElementById("p2_eight");
	var p2Nine = document.getElementById("p2_nine");
	var p2Ten = document.getElementById("p2_ten");
	var p2Jack = document.getElementById("p2_jack");
	var p2Queen = document.getElementById("p2_queen");
	var p2King = document.getElementById("p2_king");
	
	// ARRAY MED KORTENE I FOR P2:
	var p2Deck = [p2Two, p2Three, p2Four, p2Five, p2Six, p2Seven, p2Eight, p2Nine, p2Ten, p2Jack, p2Queen, p2King];
	
	
	
	//--------------
	// PLAY-KNAPPEN:
	var btn_play = document.getElementById("play");
	btn_play.addEventListener("click", play);
	
	// NUVÆRENDE KORT: 
	// Det nuværende kort er i udgangspunktet bagsiden:
	var currentP1Card = p1Back;
	var currentP2Card = p2Back;
	currentP1Card.style.display = "block";
	currentP2Card.style.display = "block";
	
	// UI ELEMENT, DER VISER HVEM DER VANDT:
	var winnerAnnouncement = document.getElementById("winnerAnnouncement");
	// winnerAnnouncement.style.display = "none";
	
	/* FUNCTION PLAY:
	1. De nuværende kort gemmes væk.
	2. Der findes to tilfældige tal
	3. Det nuværende kort ændres til det tilfældigt valgte.
	4. Det nuværende kort vises.
	*/
	function play(){
		currentP1Card.style.display = "none";
		currentP2Card.style.display = "none";
		var resultP1 = Math.floor(Math.random() * p1Deck.length);
		var resultP2 = Math.floor(Math.random() * p2Deck.length);
		currentP1Card = p1Deck[resultP1];
		currentP2Card = p2Deck[resultP2];
		currentP1Card.style.display = "block";
		currentP2Card.style.display = "block";
		
		if (resultP1 > resultP2){
			winnerAnnouncement.innerHTML = "Player 1 Wins!";
			winnerAnnouncement.style.display = "block";
		} else if(resultP1 < resultP2){
			winnerAnnouncement.innerHTML = "Player 2 Wins!";
		} else if(resultP1 == resultP2){
			winnerAnnouncement.innerHTML = "Player 2 Wins!";
		}
	}
	
}
