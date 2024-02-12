const inputField = document.querySelector('#input-field')
const outputField = document.querySelector('#output-field')
const uppercase = document.querySelector('.uppercase')
const lowercase = document.querySelector('.lowercase')
const capitalize = document.querySelector('.capitalize')
const bold = document.querySelector('.bold')
const italic = document.querySelector('.italic')
const underline = document.querySelector('.underline')

uppercase.addEventListener('click', function () {
    outputField.innerHTML = inputField.value.toUpperCase();
})

lowercase.addEventListener('click', function () {
    outputField.innerHTML = inputField.value.toLowerCase();
})

capitalize.addEventListener('click', function () {
    let inputvalue = inputField.value;
    let capitalize = inputvalue[0].toUpperCase() + inputvalue.slice(1)
    outputField.innerHTML = capitalize
})

bold.addEventListener('click', function () {
    outputField.innerHTML = inputField.value.bold();
})

italic.addEventListener('click', function () {
    outputField.innerHTML = inputField.value.italics();
})

underline.addEventListener('click', function () {
    outputField.innerHTML = '<u>' + inputField.value + '</u>';
});





