const startingMinutes50 = 0.4;
let time50 = startingMinutes50 * 60;

const countdownEl = document.getElementById('50-min-countdown');

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