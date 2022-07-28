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
