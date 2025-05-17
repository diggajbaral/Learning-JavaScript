const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
    }, 10)

    startButton.disabled = true;
    stopButton.disabled = false;
}

function formarTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10)
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 100)
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
    const hour = Math.floor(elapsedTime / (1000* 60*60));
}