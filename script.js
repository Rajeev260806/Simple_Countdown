const startingMinute = 10;
let time = startingMinute * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);   

function updateCountdown() {
const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}
