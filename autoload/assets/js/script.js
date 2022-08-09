"use strict";

// HTML elements variables
const spinner = document.getElementById("spinner");
const spinnerEl = document.querySelector(".spinner");
const imagesGroup = document.getElementById("images-group");

let imagesArray = [];
let ready = true;
let imagesLoaded = 0;
let totalImages = 0;

// unsplash API 
const count = 30;
const apiKey = "yvi0lX3SoIIShjKJWcawq5URAylUrXZKcixy3xkf7qY";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// imageLoaded confirm when the images are loaded
const imageLoaded = () => {
    imagesLoaded++;
    console.log("Image loaded", imagesLoaded);
    if (imagesLoaded === totalImages) {
        console.log("ready =", ready);
    }
}

// show spinner
const spinnerVisible = () => {
    spinner.classList.remove("hidden");
}

// hide spinner
const spinnerHidden = () => {
    spinner.classList.add("hidden");
}

// Get photos
async function getImages() {
    spinnerVisible();
    try {
        const response = await fetch(apiURL);
        imagesArray = await response.json();
        console.log(imagesArray);
        displayImages();
        spinnerHidden();
        ready = true;
    } catch (error) {
        // catch error
        console.log("fails to get images from api", error);
    }
}
// on load
getImages();

// set attributes
const setAttributes = (tag, attributes) => {
    for (const key in attributes) {
        tag.setAttribute(key, attributes[key]);
    }
}

// displayImages 
const displayImages = () => {
    imagesLoaded = 0;
    totalImages = imagesArray.length;
    console.log("total images", totalImages);
    imagesArray.forEach((image) => {
        // Create html tags, and set attributes
        const aEl = document.createElement("a");
        setAttributes(aEl, {
            href: image.links.html, 
            target: "_blank",
        });
        
        // Creat <img> tag
        const imgEl = document.createElement("img");
        setAttributes(imgEl, {
            src: image.urls.regular, 
            atl: image.alt_description, 
            title: image.alt_description,
        });

        // Check for image loaded
        imgEl.addEventListener("load", imageLoaded);
        // insert <img> inside <a>
        aEl.appendChild(imgEl);
        imagesGroup.appendChild(aEl);
    });
}

// Check if scroll has reached the end of the images stacks
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getImages();
        console.log("load more");
    }
});
