"use strict";

// HTML classes variables - from index.html
const gameAlert = document.querySelector(".gamealert");
const between = document.querySelector(".between");
const btn = document.querySelector(".btn")
const again = document.querySelector(".again");
const number = document.querySelector(".number");
const lerf = document.querySelector(".left");
const guess = document.querySelector(".guess");
const btnCheck = document.querySelector(".btnCheck");
const right = document.querySelector(".right");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");


















































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