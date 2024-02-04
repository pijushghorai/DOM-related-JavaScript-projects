const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Love", "Jhakaas", "Mast", "Dhinchak", "Weird"];

let wordIndex = 0;
let charIndex = 0;
let typing = true;
let typingInterval;
let erasingInterval;

function type() {
  typedText.textContent += words[wordIndex][charIndex];
  charIndex++;

  if (charIndex === words[wordIndex].length) {
    clearInterval(typingInterval);
    setTimeout(() => {
      startErasing();
    }, 1000);
  }
}

function erase() {
  typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
  charIndex--;

  if (charIndex === 0) {
    clearInterval(erasingInterval);
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(() => {
      startTyping();
    }, 500);
  }
}

function startTyping() {
  typingInterval = setInterval(type, 200);
}

function startErasing() {
  erasingInterval = setInterval(erase, 100);
}

startTyping();
