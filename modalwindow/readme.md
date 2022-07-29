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

// openModals open popup modal
const openModals = () => {
   hidden.classList.remove("hidden");
   overlay.classList.remove("hidden");
}

// closeModals open of close modals
const closeModals = () => {
   hidden.classList.add("hidden");
   overlay.classList.add("hidden");
}

// Add addEventListener to all three Show modal buttons
for (let i = 0; i < btnModal.length; i++) {
   console.log(btnModal[i].textContent);
   btnModal[i].addEventListener("click", openModals);
}

// Remove the modal and overlay by click on the modal X button
btnClose.addEventListener("click", closeModals);

// Remove the overlay, and the modal by click anywhere on the overlay 
overlay.addEventListener("click", closeModals);
});

```