"use strict";

const data = {
   input: 0,
   result: 0,
   operator: "",
   inputDes: "",
}

let logEntries = [];

// outputResult prints data object feilds to the screen
function outputResult() {
   currentCalculationOutput.innerHTML = data.inputDes;
   currentResultOutput.innerHTML = data.result;
}

// getInput get the data from input field, convert to Number then store 
// in data object account to data.counter value of 1 or 2
const getInput = () => {
   data.input = Number(userInput.value);
   data.inputDes = `${data.result} ${data.operator} ${data.input}`;
   console.log(data, typeof data.input);
   userInput.value = "";
}

const writeLog = () => {
   const logEntry = {
      input: data.input,
      operator: data.operator,
      result: data.result,
      inputDes: data.inputDes,
   }
   logEntries.push(logEntry);
   console.log(logEntries);
}


const add = () => {
   data.operator = "+";
   getInput();
   data.result = data.result + data.input;
   outputResult();
   writeLog();
}

const subtract = () => {
   data.operator = "-";
   getInput();
   data.result = data.result - data.input;
   outputResult();
   writeLog();
}

const multiply = () => {
   data.operator = "*"
   getInput();
   data.result = data.result * data.input;
   outputResult();
   writeLog();
}

const divide = () => {
   data.operator = "/"
   getInput();
   data.result = data.result / data.input;
   outputResult();
   writeLog();
}

// addBtn event 
addBtn.addEventListener("click", add); 

// subtractBtn event
subtractBtn.addEventListener("click", subtract);

// multiplyBtn event
multiplyBtn.addEventListener("click", multiply);

// divideBtn event
divideBtn.addEventListener("click", divide);