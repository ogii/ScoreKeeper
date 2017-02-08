var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var h1 = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//update score for player 1 when button is clicked
//stop updating score when reaching winningScore
p1Button.addEventListener("click", function() {
	if(!gameOver){
	  p1Score++;
	  if(p1Score === winningScore){
	  	gameOver = true;
	  }
	  p1Display.textContent = p1Score;
	}
});

//update score for player 2 when button is clicked
//stop updating score when reaching winningScore
p2Button.addEventListener("click", function() {
	if(!gameOver){
	  p2Score++;
	  if(p2Score === winningScore){
	  	gameOver = true;
	  }
	  p2Display.textContent = p2Score;
	}
});