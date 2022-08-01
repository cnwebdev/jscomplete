"use strict";

const data = {
   input: 0,
   val1: 0,
   val2: 0,
   switch: 1,
   result: 0,
   operator: "",
   inputDes: "",
}

let logEntries = [];

const getInput = () => {
   return Number(userInput.value);
}

// outputResult prints data object feilds to the screen
function outputResult() {
   data.inputDes = `${data.val1} ${data.operator} ${data.val2}`;
   currentCalculationOutput.innerHTML = data.inputDes;
   currentResultOutput.innerHTML = data.result;
}

// save input values to data object
const saveInputData = (input, operator) => {
   data.input = input;
   data.switch = data.switch === 1 ? 0 : 1;
   if (data.switch === 0) {
      data.val1 = data.input;
   } else {
      data.val2 = data.input;
   }
   data.operator = operator
   console.log(data, typeof data.input);
   userInput.value = "";
   compute();
   data.val2 = 0;
   data.result = 0;
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

const compute = () => {
   if (data.operator === "+") {
      data.result = data.val1 + data.val2;
   } else if (data.operator === "-") {
      data.result = data.val1 - data.val2; 
   } else if (data.operator === "*") {
      data.result = data.val1 * data.val2;
   } else if (data.operator === "/") {
      data.result = data.val1 / data.val2;
   } else {
      return "Operation not supported";
   }
   outputResult();
}

addBtn.addEventListener("click", function () {
   let input = getInput();
   console.log("From addBtn", input, typeof input);
   saveInputData(input, "+");
});

subtractBtn.addEventListener("click", function () {
   let input = getInput();
   saveInputData(input, "-");
});

multiplyBtn.addEventListener("click", function () {
   const input = getInput();
   saveInputData(input, "*");
});

divideBtn.addEventListener("click", function () {
   const input = getInput();
   saveInputData(input, "/");
});