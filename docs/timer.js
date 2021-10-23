const startingMinutes20 = 20;
const startingMinutes50 = 0.4;
let time20 = startingMinutes20 * 60;
var time = true;

const countdownEl = document.getElementById('20-min-countdown');

function updateCountdown20() {
    const minutes = Math.floor(time20 / 60);
    let seconds = time20 % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time20--;

    time20 = time20 < 0 ? 0 : time20;

    if(time20 == 0) {
        if(time){
            time20 = startingMinutes50 * 60;
            time = false;
        } else{
            time20 = startingMinutes20 * 60;
            time = true;
        }

    }
}

setInterval(updateCountdown20, 1000);
updateCountdown20();

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, time20 * 0.1);
}

var minute = 3000 * 60;
var images = [], x = -1;
images[0] = "https://cdn2.bulbagarden.net/upload/1/14/White_2_EN_boxart.png";
images[1] = "https://cdn2.bulbagarden.net/upload/7/78/194Wooper.png";
images[2] = "https://cdn2.bulbagarden.net/upload/2/21/001Bulbasaur.png";