"use strict";

// Global Game messages:
const youWon = "youWon";
const youLoss = "youLoss";
const tooLow = "tooLow";
const tooHigh = "tooHigh";
const outRange = "Try number 1 to 20";
const gameAlertMsg = "Start guessing...";

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
    winmsg: "🏆 You Won!",
    lossmsg: "Game over, try again?",
    highmsg: " ☝️️ Too high!",
    lowmsg: "👇 Too low!",
    score: 20,
    highScore: 0,
};
console.log(gameScores);

// gameReset restart the game
function gameReset() {
    ranNum = Math.trunc(Math.random() * 20) + 1;
    console.log(ranNum);
    if (gameScores.highScore <= 0) {
        gameScores.score = 20;
        uiScore.innerHTML = gameScores.score;
    } else {
        gameScores.score = gameScores.highScore;
    }
    uiMessage.innerHTML = gameAlertMsg;
    uiHighScore.innerHTML = gameScores.highScore;
    uiGuess.value = " ";
    uiBody.style.backgroundColor = "#222222";
    uiRanNum.innerHTML = "?";
    uiRanNum.style.width = "15rem";
}

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


// Compares userNum to ranNum 
function matchScores(userNum, ranNum) {
    if (userNum === ranNum) {
        return youWon;
    } else if (userNum > ranNum) {
        return tooHigh;
    } else if (userNum < ranNum) {
        return tooLow;
    } else if (userNum < 1) {
        return youLoss;
    } else {
        return outRange;
    }
}

// Update Score to Game data object
function updateGameData(alertMsg) {
    switch (alertMsg) {
        case tooHigh:
        case tooLow:
            gameScores.score -= 1;
            break;
        case youLoss:
            gameScores.score = 0;
            gameScores.highScore = 0;
            break;
        case youWon:
            gameScores.score += 1;
            gameScores.highScore = gameScores.score;
            break;
        default:
            console.log("Not sure why it get here???")
    }
}

// Update Game UI 
function updateUI(alertMsg) {
    switch (alertMsg) {
        case youWon:
            uiMessage.innerHTML = gameScores.winmsg;
            uiBody.style.backgroundColor = "#60b347";
            uiRanNum.innerHTML = ranNum;
            uiRanNum.style.width = "30rem";
            break;
        case tooHigh:
            uiMessage.innerHTML = gameScores.highmsg;
            break;
        case tooLow:
            uiMessage.innerHTML = gameScores.lowmsg;
            break;
        default:
            uiMessage.innerHTML = outRange;
    }
    uiScore.innerHTML = gameScores.score;
    uiHighScore.innerHTML = gameScores.highScore;
}

// Game controller
function processData(guessVal) {
    let alertMsg;
    let userNum = Number(guessVal);
    console.log(userNum, ranNum);
    if (userNum > 0 && gameScores.score > 1) {
        alertMsg = matchScores(userNum, ranNum)
        updateGameData(alertMsg)
    } else if (gameScores.score < 1) {
        alertMsg = youLoss;
        updateGameData(alertMsg);
    }
    updateUI(alertMsg);
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