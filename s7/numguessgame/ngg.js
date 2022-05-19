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

const ranNum = Math.trunc(Math.random() * 20) + 1;
displayRanNum.textContent = ranNum;

console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct Number!";
displayBetween.textContent = "Between 1 and 20";
// displayGameAlert(".gamealert").textContent = "The Game Has Began";

// console.log(guessField.value); // read value from html feild.

// Clear the guess field when browser refresh
guessField.textContent = "Hello";

btnClick.addEventListener("click", function() {
    guessNum = Number(guessField.value);
    console.log(guessNum, typeof guessNum);
    checkScore();
    guessField.textContent = "";
});

guessField.addEventListener("keypress", function(event) {
    const keyName = event.key;
    if (keyName === "Enter") {
        guessNum = Number(guessField.value);
        console.log(guessNum);
        checkScore();
        guessField.textContent = "";
    }
});

// Play again button
btnAgain.addEventListener("click", () => {
    gameReset();
});

const gameReset = () => {
    guessNum = 0;
    gameScore = 20;
    playerScore.textContent = gameScore;
    playerHiScore.textContent = highScore;
    gameMesage.textContent = "Start guessing..."
    guessField.textContent = "";

}

const checkScore = () => {

    if (!guessNum) {
        gameMesage.textContent = "👀 No number!";
    } else if (guessNum === ranNum) {
        gameScore += 1;
        highScore = gameScore;
        playerScore.textContent = gameScore;
        playerHiScore.textContent = highScore;
        gameMesage.textContent = "🏆 Correct Number!";
    } else if (guessNum > ranNum) {
        gameScore -= 1;
        playerScore.textContent = gameScore;
        gameMesage.textContent = "🪁 Too high."
    } else if (guessNum < ranNum) {
        gameScore -= 1;
        playerScore.textContent = gameScore;
        gameMesage.textContent = "🪸 Too low."
    } 
}