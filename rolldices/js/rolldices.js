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

// Game data object - game data encapsulation
const gameData = {
   winScore: 0,
   activePlayer: 0,
   playersScore: [0, 0],
   currScore: 0,
   winnerAlert: "🏆 🎇 Winner!",
   playing: Boolean,
}

// Set up game initial values
const init = () => {
   gameData.playing = true;
   dice.classList.add("hidden");
   gameData.winScore = 50;
   gameData.playersScore = [0, 0];
   gameData.currScore = 0;
   gameData.activePlayer = 0;
   score0.innerHTML = 0;
   score1.innerHTML = 0;
   current0.innerHTML = gameData.currScore;
   current1.innerHTML = gameData.currScore;
   player0.classList.remove("player--winner");
   player1.classList.remove("player--winner");
   player0.classList.add("player--active");
   name0.innerHTML = "Player 1";
   name1.innerHTML = "Player 2";
}
init();

// switch players
const switchPlayers = () => {
   if (gameData.playing) {
      document.getElementById(`current--${gameData.activePlayer}`).innerHTML = 0;
      gameData.currScore = 0;
      gameData.activePlayer = gameData.activePlayer === 0 ? 1 : 0;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
      console.log("From switchPlayers", gameData);
   }
}

// Update game current scores
const updateGameScores = () => {
   if (gameData.playing) {
      const diceNum = Math.trunc(Math.random() * 6) + 1;
      dice.classList.remove("hidden");
      dice.src = `assets/img/dice-${diceNum}.png`;
      
      if (diceNum === 1) {
         switchPlayers();
      } else {
         document.getElementById(`current--${gameData.activePlayer}`).innerHTML = gameData.currScore;
         gameData.currScore += diceNum;
         document.getElementById(`current--${gameData.activePlayer}`).innerHTML = gameData.currScore;
      }
   }
}

// Save current score to active player total score
const holdCurrentScore = () => {
   if (gameData.playing) {
      gameData.playersScore[gameData.activePlayer] += gameData.currScore;
      document.getElementById(`score--${gameData.activePlayer}`).innerHTML = 
      gameData.playersScore[gameData.activePlayer];
      
      if (gameData.playersScore[gameData.activePlayer] >= gameData.winScore) {
         dice.classList.add("hidden");
         document.querySelector(`.player--${gameData.activePlayer}`).classList.add("player--winner");
         document.getElementById(`name--${gameData.activePlayer}`).classList.add("name");
         document.getElementById(`name--${gameData.activePlayer}`).innerHTML = gameData.winnerAlert;
         document.querySelector(`.player--${gameData.activePlayer}`).classList.remove("player--active");
         gameData.playing = false;
      } else {
         switchPlayers();
      }
      
      console.log("Player ", gameData.playersScore[gameData.activePlayer]);
      console.log(gameData);
   }
}
   
// Click the rool dice button to roll
btnRoll.addEventListener("click", updateGameScores);

// Click Hold button to save current score and allow switch player
btnHold.addEventListener("click", holdCurrentScore);

// Click New Game button to reset the game score and start new game
btnNew.addEventListener("click", init);