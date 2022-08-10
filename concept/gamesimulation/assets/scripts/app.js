"use strict";

// Game States Variables
const PLAYER_WON = "You Won!";
const MONSTER_WON = "Monster Won!";
const DRAW = "Game Draw!";
const PLAYER_ATTACK = "Player Attack";
const STRONG_ATTACK = "Strong Attack";
const HEAL_PLAYER = "Heal Player";
const INPROGRESS = "In Progress";
const GAME_READY = "Game Ready";
const RESET_GAME = "Reset Game";

let logEntries = [];

const gameData = {
    action: "",
    maxLife: 0,
    bonusLife: Boolean,
    playerAttack: 0,
    strongAttack: 0,
    monsterAttack: 0,
    monsterHealth: 0,
    playerHealth: 0,
    healValue: 0,
    gameState: "",
}

// Console.log game data for testing purpose
function showGameScore() {
    console.log("Player Attack", gameData.playerAttack);
    console.log("Monster Attack", gameData.monsterAttack);
    console.log("Monster Health", gameData.monsterHealth);
    console.log("Player Health", gameData.playerHealth);
    console.log("Heal Value", gameData.healValue);
}

// Reset game on Player Won/Loss/Tide states
function init() {
    gameData.action = RESET_GAME;
    gameData.maxLife = 100;
    gameData.bonusLife = true;
    gameData.playerAttack = 10;
    gameData.strongAttack = 17;
    gameData.monsterAttack = 12;
    gameData.monsterHealth = 100;
    gameData.playerHealth = 100;
    gameData.healValue = 20;
    gameData.gameState = GAME_READY;
    adjustHealthBars();
    writeLog(RESET_GAME);
}

function resetGame() {
    gameData.playerHealth = 100;
    gameData.monsterHealth = 100;
    adjustHealthBars();
}

// Handles all game actions - Player attack, strong attack
// and monster attack, insert game data to gameData object
function attackHandler(attack) {
    const mAttack = gameData.monsterAttack;
    let pAttack;

    if (attack === PLAYER_ATTACK) {
        pAttack = gameData.playerAttack;
    } else if (attack === STRONG_ATTACK) {
        pAttack = gameData.strongAttack;
    }

    const dealPD = dealPlayerDamage(mAttack);
    const dealMD = dealMonsterDamage(pAttack);
    gameData.monsterHealth -= dealMD;
    gameData.playerHealth -= dealPD;

    if (gameData.playerHealth <= 0 && gameData.bonusLife) {
        gameData.bonusLife = false;
        gameData.playerHealth = gameData.healValue;
        setPlayerHealth(gameData.playerHealth);
        bonusLifeEl.hidden = true;
    }

    if (gameData.monsterHealth <= 0 && gameData.playerHealth > 0) {
        gameData.action = PLAYER_WON;
        gameData.gameState = PLAYER_WON;
        writeLog(PLAYER_WON);
        alert(gameData.gameState);
    } else if (gameData.playerHealth <= 0 && gameData.monsterHealth > 0) {
        gameData.action = MONSTER_WON;
        gameData.gameState = MONSTER_WON;
        writeLog(MONSTER_WON);
        alert(gameData.gameState);
    } else if (gameData.playerHealth <= 0 && gameData.monsterHealth <= 0) {
        gameData.action = DRAW;
        gameData.gameState = DRAW;
        writeLog(DRAW);
        alert(gameData.gameState);
    }
    
    if (gameData.playerHealth <= 0 || gameData.monsterHealth <= 0) {
        resetGame();
    }
}

// Handles increase player health 
function healHandler() {
    gameData.action = HEAL_PLAYER;
    gameData.playerHealth += gameData.healValue;
    increasePlayerHealth(gameData.healValue);
    dealPlayerDamage(gameData.monsterAttack);
    setPlayerHealth(gameData.playerHealth);
    writeLog(HEAL_PLAYER);
}

function showLogsHandler() {
    for (let i = 0; i < logEntries.length; i++) {
        console.log(logEntries[i]);
    }
}

// Writing game states data to logs object and insert to 
// logEntry array
function writeLog(logMsg) {
    let logs = {
        action: gameData.action,
        playerAttack: gameData.playerAttack,
        strongAttack: gameData.strongAttack,
        monsterAttack: gameData.monsterAttack,
        monsterHealth: gameData.monsterHealth,
        playerHealthBar: gameData.playerHealth,
        healPlayer: gameData.healValue,
        gameState: gameData.gameState,
    }

    if (logMsg === PLAYER_ATTACK) {
            logs.action = gameData.action;
            logs.gameState = gameData.gameState;
    } else if (logMsg === STRONG_ATTACK) {
            logs.action = gameData.action;
            logs.gameState = gameData.gameState;
    } else if (logMsg === PLAYER_WON) {
            logs.action = gameData.action;
            logs.gameState = gameData.gameState;
    } else if (logMsg === MONSTER_WON) {
            logs.action = gameData.action;
            logs.gameState = gameData.gameState;
    } else if (logMsg === HEAL_PLAYER) {
            logs.action = gameData.action;
            logs.gameState = gameData.gameState;
    } else if (logMsg === DRAW) {
            logs.action = gameData.action;
            logs.gameState = gameData.gameState;
    } else if (logMsg === RESET_GAME) {
            logs.action = gameData.action;
            logs.gameState = gameData.gameState;
    } else {
        console.log("Unsupported message");
    }
    logEntries.push(logs)
}

function playerAttack() {
    gameData.action = PLAYER_ATTACK;
    gameData.gameState = INPROGRESS;
    attackHandler(PLAYER_ATTACK);
    writeLog(PLAYER_ATTACK);
}

function strongAttack() {
    gameData.action = STRONG_ATTACK;
    gameData.gameState = INPROGRESS;
    attackHandler(STRONG_ATTACK);
    writeLog(STRONG_ATTACK);
}

// UI Events block
attackBtn.addEventListener("click", playerAttack);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", healHandler);
logBtn.addEventListener("click", showLogsHandler);

// on load
init();