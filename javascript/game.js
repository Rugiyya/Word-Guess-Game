// Global vars ============================================
var word = ["madonna", "john", "michael"];
var wins = 0;
var letterGuessed = [];
var guessesLeft = 9;
var underScore = [];
var userGuesses = [];
var randWord;
//FUNCTION***********
function startGame() {
	// pick random word
	randWord = word[Math.floor(Math.random() * word.length)];
	buildHangman();
	// reset
	letterGuessed = [];
	guessesLeft = 9;
	//HTML
}
document.onkeypress = function(e) {
	console.log(e.key);
	// add the key to the userGuesses
	// if a new key, then subtract 1 from guessesleft
	if (userGuesses.includes(e.key)) {
		console.log("have key");
	} else {
		console.log("new key");
		userGuesses.push(e.key);
		guessesLeft = guessesLeft - 1;
		document.getElementsByClassName("guessesleft")[0].innerHTML = guessesLeft;
		if (guessesLeft === 0) {
			alert("You lost");
		}
	}
	// add the letter to letterguessed
	document.getElementById("guessedLetters").innerHTML = userGuesses.join(" , ")
	buildHangman();
	// if they won alert "You won"
}

function buildHangman() {
	var guessedAllLetters = true;
	underScore = [];
	for (var i = 0; i < randWord.length; i++) {
		var realLetter = randWord[i];
		if (userGuesses.includes(realLetter)) {
			underScore.push(realLetter);
		} else {
			underScore.push("_");
			guessedAllLetters = false;
		}
	}
	if (guessedAllLetters) {
		alert("You won");
	}
	// Printing underscore to the screen 
	document.getElementsByClassName("underscore")[0].innerHTML = underScore.join(" ");
}
startGame();