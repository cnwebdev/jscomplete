"use strict";

const data = {
   input: 0,
   counter: 0,
   val1: 0,
   operator: "",
   val2: 0,
   result: 0,
}

const resetData = () => {
   data.input = 0;
   data.counter = 0;
   data.val1 = 0;
   data.val2 = 0;
   data.operator = "";
   data.result = 0;
}

const getInput = () => {
   inputCounter();
   data.input = Number(userInput.value);
   if (data.counter === 1) {
      data.val1 = data.input;
   } else if (data.counter === 2) {
      data.val2 = data.input;
      computeData();
   }
   userInput.value = "";
   console.log(data.input, typeof data.input);
}

const inputCounter = () => {
   if (data.counter < 0 || data.counter >= 2) {
      data.counter = 1;
   } else {
      data.counter += 1;
   }
}

const setOperator = (sign) => {
   let operator = sign;
   data.operator = operator;
}

const computeData = () => {
   if (data.counter === 2) {
      let operator;
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
            console.log("missing operator.");
      } 
   } else {
      console.log(data.result);
   }
}

userInput.addEventListener("keydown", function(e) {
   const key = e;
   if (e.key === "Enter") {
      getInput();
      outputResult(data.result, data.input)
   }
   console.log(data);
});

addBtn.addEventListener("click", function() {
   setOperator("+");
   outputResult(data.result, data.operator)
});

subtractBtn.addEventListener("click", function() {
   setOperator("-");
   outputResult(data.result, data.operator)
});

multiplyBtn.addEventListener("click", function() {
   setOperator("*");
   outputResult(data.result, data.operator)
});

divideBtn.addEventListener("click", function() {
   setOperator("/");
   outputResult(data.result, data.operator)
});