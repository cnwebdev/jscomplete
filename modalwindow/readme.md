# Web Modal Components

## Tech used HTML/CSS/JavaScript

A simple example of a web modal component 

[Click here to see demo](https://tvn9.github.io/jsps/modalwindow/)

```javascript
'use strict';

// Pre-declare variables for DOM querySelector classes on index.html
const btnModal = document.querySelectorAll(".show-modal");
const model = document.querySelector(".model");
const hidden = document.querySelector(".hidden");
const btnClose = document.querySelector(".close-modal")
const overlay = document.querySelector(".overlay")

console.log(btnModal);

// Add addEventListener to all three Show modal buttons
for (let i = 0; i < btnModal.length; i++) {
   console.log(btnModal[i].textContent);
   btnModal[i].addEventListener("click", function() {
      console.log("Button Clien", i) 
      hidden.classList.remove("hidden");
      overlay.classList.remove("hidden");
   });
}

// Remove the modal and overlay by click on the modal X button
btnClose.addEventListener("click", function() {
   hidden.classList.add("hidden");
   overlay.classList.add("hidden");
});

// Remove the overlay, and the modal by click anywhere on the overlay 
overlay.addEventListener("click", function() {
   hidden.classList.add("hidden");
   overlay.classList.add("hidden");
});

```