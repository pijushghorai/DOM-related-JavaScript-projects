const typedText = document.querySelector('.typed-text');
let text = "Programming Language 💛";
let index = 0;

const typeWriter = () => {
    let newText = text.slice(0, index);
    typedText.innerHTML = newText;

    if (index >= text.length) {
        index = 0;
    } else {
        index++;
    }

    setTimeout(typeWriter, 180);
};

typeWriter();
