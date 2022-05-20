'use strict';

const winscore = 100;
let score;
let currScore;
let activePlayer;
let playing;

// DOM elements selection variables
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const curr0El = document.getElementById("current--0");
const curr1El = document.getElementById("current--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Get random number
const getRandomNum = () => {
    return Math.trunc(Math.random() * 6) + 1;
}

const updateScore = () => {
    if (playing) {
        const ranNum = getRandomNum();
        diceEl.classList.remove("hidden");
        diceEl.src = `assets/img/dice-${ranNum}.png`;
        if (ranNum !== 1) {
            currScore += ranNum;
            document.getElementById(`current--${activePlayer}`).textContent = currScore;
        } else {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            switchPlayer();
        }
    }
}

const updateHoldStates = () => {
    if (playing) {
        score[activePlayer] += currScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        if (score[activePlayer] >= winscore) {
            document.getElementById(`name--${activePlayer}`).textContent = "🏆 WINNER 🎇";
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            playing = false;
        } else {
            switchPlayer();
        }
    }
}


// switchPlayer 
const switchPlayer = () => {
    currScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    curr0El.textContent = 0;
    curr1El.textContent = 0;
}

btnNew.addEventListener("click", () => {
    resetGame();
});

btnRoll.addEventListener("click", () => {
    updateScore();
});

btnHold.addEventListener("click", () => {
    updateHoldStates();
});

const resetGame = () => {
    window.location.reload(true);
}

const init = () => {
    score = [0, 0];
    currScore = 0;
    activePlayer = 0; 
    curr0El.textContent = 0;
    curr1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add("hidden");
    playing = true;
}
init();

