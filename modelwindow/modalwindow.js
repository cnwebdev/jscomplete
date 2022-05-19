'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

const showModal = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnOpen.length; i++)
btnOpen[i].addEventListener("click", showModal);
overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

document.addEventListener("keydown", function(event) {
    const keyName = event.key;
    console.log(keyName);
    if (keyName === "Escape") {
        closeModal();
    }
});