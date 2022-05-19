'use strict';

let gameScore = 20;
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

const gameBg = document.querySelector("body")

let ranNum = Math.trunc(Math.random() * 20) + 1;

btnClick.addEventListener("click", function() {
    guessNum = Number(guessField.value);
    console.log(guessNum, typeof guessNum);
    checkScore();
});

guessField.addEventListener("keypress", function(event) {
    const keyName = event.key;
    if (keyName === "Enter") {
        guessNum = Number(guessField.value);
        console.log(guessNum);
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
    playerScore.textContent = gameScore;
    playerHiScore.textContent = highScore;
    gameBg.style.backgroundColor = "#222";
    displayGameAlert.textContent = "Guess My Number!";
    guessField.value = "";
    // window.location.reload(true)
}

const checkScore = () => {
    
    if (!guessNum) {
        gameMesage.textContent = "👀 No number!";
    } else if (guessNum === ranNum) {
        gameScore += 1;
        highScore = gameScore;
        playerScore.textContent = gameScore;
        playerHiScore.textContent = highScore;
        displayRanNum.textContent = ranNum;
        gameMesage.textContent = "🏆 Correct Number!";
        gameBg.style.backgroundColor = "#60b347";
        displayRanNum.style.width = "30rem";
        displayGameAlert.textContent = "🏆 YOU WON! 🏅";
        
    } else if (guessNum > ranNum) {
        gameScore -= 1;
        playerScore.textContent = gameScore;
        if (gameScore > 0) {
            gameMesage.textContent = "🪁 Too high."
        } else {
            gameMesage.textContent = "🥵 Game Over!"
        }
    } else if (guessNum < ranNum) {
        gameScore -= 1;
        playerScore.textContent = gameScore;
        if (gameScore > 0) {
            gameMesage.textContent = "🪸 Too low."
        } else {
            gameMesage.textContent = "🥵 Game Over!"
        }
    } 
}