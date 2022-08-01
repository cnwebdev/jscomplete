"use strict";

const data = {
   input: 0,
   result: 0,
   inputDes: "",
}

// getInput get the data from input field, convert to Number then store 
// in data object account to data.counter value of 1 or 2
const getInput = (operator) => {
   data.input = Number(userInput.value);
   data.inputDes = `${data.result} ${operator} ${data.input}`;
   console.log(data, typeof data.input);
}

// outputResult prints data object feilds to the screen
function outputResult() {
   currentCalculationOutput.innerHTML = data.inputDes;
   currentResultOutput.innerHTML = data.result;
}

const add = () => {
   let operator = "+";
   getInput(operator);
   data.result = data.result + data.input;
   outputResult();
}

const subtract = () => {
   let operator = "-";
   getInput(operator);
   data.result = data.result - data.input;
   outputResult();
}

const multiply = () => {
   let operator = "*";
   getInput(operator);
   data.result = data.result * data.input;
   outputResult();
}

const divide = () => {
   let operator = "/";
   getInput(operator);
   data.result = data.result / data.input;
   outputResult();
}

// input field event 
userInput.addEventListener("keydown", function (e) {
   if (e.key === "Enter") {
      getInput();
      outputResult()
      console.log(data)
   }
});

// addBtn event 
addBtn.addEventListener("click", add); 

// subtractBtn event
subtractBtn.addEventListener("click", subtract);

// multiplyBtn event
multiplyBtn.addEventListener("click", multiply);

// divideBtn event
divideBtn.addEventListener("click", divide);