"use strict";

const gameData = {
    maxLife: 100,
    playerAttack: 10,
    strongAttack: 17,
    monsterAttack: 12,
    monsterHealth: 0,
    playerHealth: 0,
    healValue: 20,
}

gameData.monsterHealth = gameData.maxLife;
gameData.playerHealth = gameData.maxLife;


function showGameScore() {
    console.log(gameData)
    console.log("Player Attack", gameData.playerAttack);
    console.log("Monster Attack", gameData.monsterAttack);
    console.log("Monster Health", gameData.monsterHealth);
    console.log("Player Health", gameData.playerHealth);
    console.log("Heal Value", gameData.healValue);
}

function resetGame() {
    adjustHealthBars();
    gameData.maxLife = 100;
    gameData.playerAttack = 10,
        gameData.monsterAttack = 12,
        gameData.monsterHealth = gameData.maxLife;
    gameData.playerHealth = gameData.maxLife;
    gameData.healValue = 20;
}

function attackHandler(attack) {
    const mAttack = gameData.monsterAttack;
    let pAttack;

    if (gameData.playerAttack === attack) {
        pAttack = gameData.playerAttack;
    } else if (gameData.strongAttack === attack) {
        pAttack = gameData.strongAttack;
    }

    const dealPD = dealPlayerDamage(mAttack);
    const dealMD = dealMonsterDamage(pAttack);
    gameData.monsterHealth -= dealMD;
    gameData.playerHealth -= dealPD;

    if (gameData.monsterHealth <= 0 && gameData.playerHealth > 0) {
        alert("You won!");
    } else if (gameData.playerHealth <= 0 && gameData.monsterHealth > 0) {
        alert("You loss!");
    } else if (gameData.playerHealth <= 0 && gameData.monsterHealth <= 0) {
        alert("You have a draw!");
    }

    if (gameData.monsterHealth <= 0 ||
        gameData.playerHealth <= 0 ||
        gameData.monsterHealth <= 0 &&
        gameData.playerHealth <= 0) {
        resetGame();
    }
}

adjustHealthBars(gameData.maxLife);

function healHandler() {
    gameData.playerHealth += gameData.healValue;
    increasePlayerHealth(gameData.healValue);
    dealPlayerDamage(gameData.monsterAttack);
    showGameScore();
}

attackBtn.addEventListener("click", function () {
    attackHandler(gameData.playerAttack);
    showGameScore();
});

strongAttackBtn.addEventListener("click", function () {
    attackHandler(gameData.strongAttack);
    showGameScore();
});

healBtn.addEventListener("click", healHandler);