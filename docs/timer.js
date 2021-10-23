const startingMinutes = 0.2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('20-min-countdown');

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    time = time < 0 ? 0 : time;

    if(time == 0) {
        time = startingMinutes * 60;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();