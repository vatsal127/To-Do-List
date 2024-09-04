let countdownFunction;
let countdownDate;

function initializeCountdown(date) {
    countdownDate = new Date(date).getTime();
    startCountdown(countdownDate);
}

function startCountdown(date) {
    clearInterval(countdownFunction);
    countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = date - now;
        updateCountdown(distance);
    }, 1000);
}

function updateCountdown(distance) {
    if (distance >= 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        clearInterval(countdownFunction);
    }
}

function stopCountdown() {
    clearInterval(countdownFunction);
}

function handleStartButtonClick() {
    const datetimeInput = document.getElementById("datetime-input").value;
    if (datetimeInput) {
        initializeCountdown(datetimeInput);
        document.getElementById("target-date").innerText = `Countdown to: ${new Date(datetimeInput).toLocaleString()}`;
    } else {
        alert("Please select a valid date and time.");
    }
}

function handleResetButtonClick() {
    clearInterval(countdownFunction);
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
    document.getElementById("target-date").innerText = "";
}

document.getElementById("start").addEventListener("click", handleStartButtonClick);
document.getElementById("stop").addEventListener("click", stopCountdown);
document.getElementById("reset").addEventListener("click", handleResetButtonClick);


initializeCountdown('1 Jan, 2024 00:00:00');