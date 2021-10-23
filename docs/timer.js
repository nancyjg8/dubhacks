const startingMinutes20 = 0.2;
let time20 = startingMinutes20 * 60;

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