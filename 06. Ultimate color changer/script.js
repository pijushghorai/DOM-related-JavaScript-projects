const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const body = document.querySelector('body')

let timeInterval;

startBtn.addEventListener('click', changingColor)
stopBtn.addEventListener('click', stopChanging)

function randomColor() {
    let colorCode = Math.random().toString(16).slice(2, 8);
    body.style.backgroundColor = `#${colorCode}`
}

function changingColor() {
    timeInterval = setInterval(randomColor, 1000);
}

function stopChanging() {
    clearInterval(timeInterval);
  }




