"use strict";

const data = {
   input: 0,
   counter: 0,
   val1: 0,
   operator: "",
   val2: 0,
   result: 0,
}

// resetData is declared but not used in current version
const resetData = () => {
   data.input = 0;
   data.counter = 0;
   data.val1 = 0;
   data.val2 = 0;
   data.operator = "operator";
   data.result = 0;
}

// Set counter to redirect data.input value to data.val1 or data.val2
// This counter only set to 1 or 2 
const inputCounter = () => {
   if (data.counter < 0 || data.counter >= 2) {
      data.counter = 1;
   } else {
      data.counter += 1;
   }
}

// getInput get the data from input field, convert to Number then store 
// in data object account to data.counter value of 1 or 2
const getInput = () => {
   inputCounter();
   data.input = Number(userInput.value);
   if (data.counter === 1) {
      data.val1 = data.input;
      data.val2 = 0;
      data.operator = "operator";
   } else if (data.counter === 2) {
      data.val2 = data.input;
      computeData();
   }
   outputResult();
   console.log(data.input, typeof data.input);
}

// setOperator set the math operator to data.operator object
const setOperator = (sign) => {
   data.operator = sign;
   operatorEl.innerHTML = data.operator;
   console.log(data);
   computeData();
}

// computeData calculates the math expression and store result 
// in data.result object
const computeData = () => {
   if (data.counter === 2) {
      switch (data.operator) {
         case "+":
            data.result = data.val1 + data.val2;
            break;
         case "-":
            data.result = data.val1 - data.val2;
            break;
         case "*":
            data.result = data.val1 * data.val2;
            break;
         case "/":
            data.result = data.val1 / data.val2;
            break;
         default:
            outputResult();
            data.operator = "missing operator";
      }
   } else {
      data.counter = 1;
   }
}

// outputResult prints data object feilds to the screen
function outputResult() {
   currentResultOutput.innerHTML = data.result;
   firstValEl.innerHTML = data.val1;
   operatorEl.innerHTML = data.operator;
   secondValEl.innerHTML = data.val2;
   userInput.value = "";
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
addBtn.addEventListener("click", function () {
   setOperator("+");
   outputResult();
});

// subtractBtn event
subtractBtn.addEventListener("click", function () {
   setOperator("-");
   outputResult();
});

// multiplyBtn event
multiplyBtn.addEventListener("click", function () {
   setOperator("*");
   outputResult();
});

// divideBtn event
divideBtn.addEventListener("click", function () {
   setOperator("/");
   outputResult();
});