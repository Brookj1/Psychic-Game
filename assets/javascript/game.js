//VARIABLES LIVE HERE:
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var compChoice = letters[Math.floor(Math.random() * letters.length)];
//console.log(compChoice)
var win = 0;
var loss = 0;
var guessesLeft = 9;
var guessSoFar = [];
//var userGuess = 
document.onkeyup = function (event) {
    //console.log(event.key);
    var userGuess = event.key.toLowerCase();
    //console.log("compChoice " + compChoice + " userGuess " + userGuess)
    //if they make a valid guess
    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {
        if (userGuess === compChoice) {
            win++;
            guessesLeft = 9;
            guessSoFar.length = [];
            alert("You must be psychic!");

        }else if (userGuess != compChoice) {    
            guessesLeft--;
            guessSoFar.push(userGuess);
            
        }else if (guessesLeft === 0); {
            guessesLeft = 9;
            loss++;
            guessSoFar.length = [];
            alert("You must not be psychic...you did not guess the letter I was thinking of. :(")
        }
            
        document.getElementById("win-text").textContent = win;
        document.getElementById("loss-text").textContent = loss;
        document.getElementById("guessesLeft-text").textContent = guessesLeft;
        document.getElementById("guessSoFar-text").textContent = guessSoFar;

    }else {
        //they have made an invalid guess
        alert("BAD GUESS! Guesses must be letters only. Your guess is " + userGuess)
    }
}




//Open page, all categories are blank

//Computer guess (computerGuess) is triggered?

//User guess (userGuess) is an event that is triggered by the user pressing a letter key

//When user presses letter key: 
    //populate guessesSoFar ANDDDD....
        //check for match with computer choice. If userGuess === computerChoice, user wins (wins++), alert "you must be psychic" and game resets.
        //If user guess != computer choice, guessesLeft reduces by 1 (this continues until guessesLeft ===0)
        //When guessesLeft ===0, alert: you lose, loss increases by 1 (loss++) and game resets

//HTML directions
// wins, losses, guesses left, letters guessed so far