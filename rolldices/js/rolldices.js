'use strict';

// DOM elements variables
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const name0 = document.getElementById("name--0");
const name1 = document.getElementById("name--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Set the element value text to 0;
score0.innerHTML = 0;
score1.innerHTML = 0;

// Hidding the dice 
dice.classList.add("hidden");

// Roll the dice by generating a random number


// Click the rool dice button to roll
btnRoll.addEventListener("click", function() {
   const diceNum = Math.trunc(Math.random() * 6) + 1;
   dice.classList.remove("hidden");
   dice.src = `assets/img/dice-${diceNum}.png`;
   console.log(diceNum);
});


