const keyPresed = document.querySelector('.key')
// console.log(keyPresed);

document.addEventListener('keydown', function (e) {
    let result = e.key
    keyPresed.innerHTML = `${result}`
    // console.log(result);
})