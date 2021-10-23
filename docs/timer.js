const startingMinutes20 = 0.2;
const startingMinutes50 = 0.4;
let time20 = startingMinutes20 * 60;
let time50 = startingMinutes50 * 60;

const countdownEl = document.getElementById('20-min-countdown');

function updateCountdown20() {
    const minutes = Math.floor(time20 / 60);
    let seconds = time20 % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time20--;

    time20 = time20 < 0 ? 0 : time20;

    if(time20 == 0) {
        time20 = startingMinutes20 * 60;
    }
}

setInterval(updateCountdown20, 1000);
updateCountdown20();

function updateCountdown50() {
    const minutes = Math.floor(time50 / 60);
    let seconds = time50 % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time50--;

    time50 = time50 < 0 ? 0 : time50;

    if(time50 == 0) {
        time50 = startingMinutes50 * 60;
    }
}

setInterval(updateCountdown50, 1000);
updateCountdown50();