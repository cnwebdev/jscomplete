"use strict";

//Global game messages
const winmsg = "🏆 You Won!";
const lossmsg = "Game over, try again?";
const highmsg = " ☝️️ Too high!";
const lowmsg = "👇 Too low!";
const oorang = "Try number from 1 to 20";
const uiScoreMsg = "Start guessing...";

// HTML classes variables - from index.html
const uiAlert = document.querySelector(".gamealert");
const buttonReset = document.querySelector(".again");
const uiRanNum = document.querySelector(".number");
const uiGuess = document.querySelector(".guess");
const buttonCheck = document.querySelector(".btnCheck");
const uiMessage = document.querySelector(".message");
const uiScore = document.querySelector(".score");
const uiHighScore = document.querySelector(".highscore");
const uiBody = document.querySelector("body");

// Computer generate number
let ranNum = Math.trunc(Math.random() * 20) + 1;
console.log(ranNum);

// Game data object
const gameScores = {
   usrInput: 0,
   pcNum: 0,
   score: 20,
   highScore: 0,
};
console.log(gameScores);

// Event listenners
uiGuess.addEventListener("keypress", function (event) {
   if (event.key === "Enter") {
      let guessVal = uiGuess.value;
      console.log(guessVal, typeof guessVal)
      processData(guessVal)
   }
});

buttonCheck.addEventListener("click", function () {
   let guessVal = uiGuess.value;
   processData(guessVal);
});

buttonReset.addEventListener("click", function () {
   gameReset();
});

// gameReset restart the game
function gameReset() {
   ranNum = Math.trunc(Math.random() * 20) + 1;
   console.log(ranNum);
   gameScores.score = gameScores.highScore;
   uiScore.innerHTML = gameScores.highScore;
   uiMessage.innerHTML = uiScoreMsg;
   uiGuess.value = " ";
   uiBody.style.backgroundColor = "#222222";
   uiRanNum.innerHTML = "?";
   uiRanNum.style.width = "15rem";
}


// Compares userNum to ranNum 
function matchScores() {
   if (gameScores.usrInput === gameScores.pcNum) {
      return winmsg;
   } else if (gameScores.usrInput > gameScores.pcNum) {
      return highmsg;
   } else if (gameScores.usrInput < gameScores.pcNum) {
      return lowmsg;
   } else {
      return oorang;
   }
}

// Score to Game data object
function populateGameData(userInput) {
   let userNum = userInput;
   gameScores.usrInput = userNum;
   gameScores.pcNum = ranNum;
   console.log(gameScores);
}

// updateGameScores updates the score for each userInput strial
function updateGameScores(scoreMsg) {
   let msg = scoreMsg;
   console.log(msg)
   switch (msg) {
      case winmsg:
         gameScores.score += 1
         gameScores.highScore = gameScores.score;
         break;
      case highmsg:
      case lowmsg:
         gameScores.score -= 1;
         break;
      case lossmsg:
         gameScores.score = 0;
         gameScores.highScore = 0;
         break;
      default:
   }
   console.log("From updateGameScores", gameScores)
}

// Update Game UI 
function updateUI(scoreMsg) {
   let uiMsg = scoreMsg;
   if (uiMsg === winmsg) {
      uiBody.style.backgroundColor = "#60b347"; 
      uiRanNum.style.width = "30rem";
      uiRanNum.innerHTML = gameScores.pcNum;
      uiHighScore.innerHTML = gameScores.score;
      uiMessage.innerHTML = winmsg;
   } else if (uiMsg === lossmsg) {
      uiMessage.innerHTML = lossmsg;
      uiScore.innerHTML = gameScores.score;
      uiHighScore.innerHTML = gameScores.highScore;
   } else {
      uiMessage.innerHTML = uiMsg;
      uiScore.innerHTML = gameScores.score;
      uiHighScore.innerHTML = gameScores.highScore;
   }
}

// Game controller
function processData(guessVal) {
   let scoreMsg;
   let userNum = Number(guessVal);
   console.log(userNum, ranNum);
   if (userNum > 0 && userNum < 21) {
      if (gameScores.score < 1) {
         scoreMsg = lossmsg;
         updateGameScores(scoreMsg);
         updateUI(scoreMsg);
      } else {
         populateGameData(userNum);
         scoreMsg = matchScores();
         console.log("from processData", scoreMsg);
         updateGameScores(scoreMsg);
         updateUI(scoreMsg);
      }
   } else {
      scoreMsg = oorang;
      updateUI(scoreMsg);
   }
}








































/*
const startScore = 20;
let gameScore = startScore;
let highScore = 0;
let guessNum = 0;

const btnAgain = document.querySelector(".again");
const playerScore = document.querySelector(".score");
const playerHiScore = document.querySelector(".highscore");
const displayRanNum = document.querySelector(".number");
const displayBetween = document.querySelector(".between");
const displayGameAlert = document.querySelector(".gamealert");
const gameMesage = document.querySelector(".message");
const btnClick = document.querySelector(".btnCheck");
const guessField = document.querySelector(".guess");
const gameBg = document.querySelector("body");

let ranNum = Math.trunc(Math.random() * 20) + 1;

btnClick.addEventListener("click", function() {
    guessNum = Number(guessField.value);
    checkScore();
});

guessField.addEventListener("keypress", function(event) {
    const keyName = event.key;
    if (keyName === "Enter") {
        guessNum = Number(guessField.value);
        checkScore();
    }
});

// Play again button
btnAgain.addEventListener("click", () => {
    gameReset();
});

const gameReset = () => {
    ranNum = Math.trunc(Math.random() * 20) + 1;
    displayRanNum.textContent = "?"
    playerScore.textContent = startScore;
    gameScore = startScore;
    playerHiScore.textContent = highScore;
    gameBg.style.backgroundColor = "#222";
    displayRanNum.style.width = "15rem";
    displayGameAlert.textContent = "Guess My Number!";
    guessField.value = "";
    gameMessages("Start guessing...");
    // window.location.reload(true)
}

const gameMessages = (msg) => {
    gameMesage.textContent = msg;
}

const checkScore = () => {
    
    if (!guessNum) {
        gameMessages("👀 No number!");
    } else if (guessNum === ranNum) {
        gameScore += 1;
        if (gameScore > highScore) {
            highScore = gameScore;
            playerHiScore.textContent = highScore;
        };
        playerScore.textContent = gameScore;
        displayRanNum.textContent = ranNum;
        gameMessages("🏆 Correct Number!");
        gameBg.style.backgroundColor = "#60b347";
        displayRanNum.style.width = "30rem";
        displayGameAlert.textContent = "🏆 YOU WON! 🏅";
    } else {
        gameScore -= 1;
        if (gameScore > 1) {
            gameMessages(guessNum > ranNum ? "🪁 Too high." :  "🪸 Too low.");
        } else {
            gameMessages("🥵 Game Over!");
        }
    } 
    
    // else if (guessNum > ranNum) {
    //     playerScore.textContent = gameScore;
    //     if (gameScore > 0) {
    //         gameMesage.textContent = "🪁 Too high."
    //     } else {
    //         gameMesage.textContent = "🥵 Game Over!"
    //     }
    // } else if (guessNum < ranNum) {
    //     gameScore -= 1;
    //     playerScore.textContent = gameScore;
    //     if (gameScore > 0) {
    //         gameMesage.textContent = "🪸 Too low."
    //     } else {
    //         gameMesage.textContent = "🥵 Game Over!"
    //     }
    // } 
}

*/