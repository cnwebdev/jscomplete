"use strict";

const videoEl = document.getElementById("media-video");
const btnStart = document.getElementById("btn-start");
const btnEl = document.querySelector(".btn");

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        }
    } catch (error) {
        console.log("fails to play file", error);
    }
}

// Start Button
btnEl.addEventListener("click", async () => {
    btnEl.disabled = true;

    await videoEl.requestPictureInPicture();

    btnEl.disabled = false;
});

// on load
selectMediaStream();