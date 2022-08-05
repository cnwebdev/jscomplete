"use strict";

// const quotesObj = {};
const quoteBox = document.getElementById("qoute-box");
const quoteText = document.getElementById("quote");
const authurName = document.getElementById("authur-name");
const twitter = document.getElementById("twitter");
const btnNewQuote = document.getElementById("new-quote");

const btnTwitter = document.querySelector(".btn-twitter");
const btnQuote = document.querySelector(".btn-quote");

let apiQuotes = [];

// Get quote from API
const getRanNum = () => {
   const nums = apiQuotes.length;
   const num = Math.floor(Math.random() * nums) + 1; 
   return num;
}

async function getQuoutes() {
   const apiUrl = "https://type.fit/api/quotes";
   try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      console.log(apiQuotes);
   } catch (error) {
      // Catch Error Here
      console.error("fails to get api data", error);
   }
}
// On Load
getQuoutes();

// New Quote
const newQuote = () => {
   const ranNum = getRanNum();
   const quote = apiQuotes[ranNum];
   console.log(ranNum);
   console.log(quote);
   quoteText.textContent = quote.text;
   authurName.textContent = quote.author;
}

btnNewQuote.addEventListener("click", newQuote);



/*
const postQuote = () => {
   let nums = quotesObj.length;
   let ranNum = getRanNum(nums);
   const quote = quotesObj[ranNum];
   console.log(quote);
}
*/



/*
// Not working at this time
const parseJSON = (jsonQuotes) => {
   const quotesObj = JSON.parse(jsonQuotes);
   console.log("From parseJSON", quotesObj);
}
*/