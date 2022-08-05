"use strict";

// const quotesObj = {};
const quoteBox = document.getElementById("quote-box");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author-name");
const twitter = document.getElementById("twitter");
const btnNewQuote = document.getElementById("new-quote");
const loader = document.getElementById("loader");
const btnTwitter = document.querySelector(".btn-twitter");
const btnQuote = document.querySelector(".btn-quote");

let apiQuotes = [];

// Loader visible
const loaderVisible = () => {
   loader.hidden = false;
   quoteBox.hidden = true;
}

// Loader hide
const loaderHidden = () => {
   quoteBox.hidden = false;
   loader.hidden = true;
}

// Get quote from API
const getRanNum = () => {
   const nums = apiQuotes.length;
   const num = Math.floor(Math.random() * nums) + 1; 
   return num;
}

// getting quotes from type.fit/api/quotes
async function getQuoutes() {
   loaderVisible();
   const apiUrl = "https://type.fit/api/quotes";
   try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      console.log(apiQuotes);
      loaderHidden();
      newQuote();
   } catch (error) {
      // Catch Error Here
      console.error("fails to get api data", error);
   }
}


// New Quote
const newQuote = () => {
   loaderVisible();
   const ranNum = getRanNum();
   const quote = apiQuotes[ranNum];
   console.log(ranNum);
   console.log(quote);

   if (!quote.author) {
      authorName.textContent = "Unknown";
   } else {
      authorName.textContent = quote.author;
   }
   
   if (quote.text.length > 100) {
      quoteText.classList.add("long-quote");
   } else {
      quoteText.classList.remove("long-quote");
   }
    
   quoteText.textContent = quote.text;
   loaderHidden();
}


// Tweet Quote
const tweetQuote = () => {
   const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorName.innerText}`;
   window.open(twitterURL, "_blank");
}

// All addEventListener(s) are here
btnNewQuote.addEventListener("click", newQuote);
btnTwitter.addEventListener("click", tweetQuote);

// On Load
getQuoutes();

