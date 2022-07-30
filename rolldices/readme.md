# Roll The Dices Game
A basic roll the dice classic game homework.

## Complete Modern JavaScript Bootcamp 
Instructor/designer: Jonas Schemedtmann

Student/coder: Thanh Nguyen

## Tech Used - HTML, CSS, and JavaScript

### Test out the game
[Click here to run](https://tvn9.github.io/jsps/rolldices/)

### Code Snippet 
```javascript

// switch players
const switchPlayers = () => {
   if (gameData.playing) {
      document.getElementById(`current--${gameData.activePlayer}`).innerHTML = 0;
      gameData.currScore = 0;
      gameData.activePlayer = gameData.activePlayer === 0 ? 1 : 0;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
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
   }
}
   

```