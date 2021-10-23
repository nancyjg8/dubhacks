const startingMinutes20 = 0.2;
const startingMinutes50 = 0.4;
let time20 = startingMinutes20 * 60;

const countdownEl = document.getElementById('20-min-countdown');

function updateCountdown20() {
    var time = true;
    const minutes = Math.floor(time20 / 60);
    let seconds = time20 % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time20--;

    time20 = time20 < 0 ? 0 : time20;

    if(time20 == 0) {
        if(time){
            time20 = startingMinutes20 * 60;
        } else{
            time20 = startingMinutes50 * 60;
        }

    }
}

setInterval(updateCountdown20, 1000);
updateCountdown20();