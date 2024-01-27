let colorButtons = document.querySelectorAll(".button")
// console.log(colorButtons);
let body = document.querySelector("body")
// console.log(body);

colorButtons.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", ((evant) => {
        // console.log(evant);
        // console.log(evant.target);
        if (evant.target.id === "purple") {
            body.style.backgroundColor = "purple"
            body.style.color = "white"
        }
        if (evant.target.id === "violet") {
            body.style.backgroundColor = "violet"
            body.style.color = "white"
        }
        if (evant.target.id === "yellow") {
            body.style.backgroundColor = "yellow"
            body.style.color = "black"
        }
        if (evant.target.id === "green") {
            body.style.backgroundColor = "green"
            body.style.color = "white"
        }
    }))
})

let defbtn = document.querySelectorAll(".defult-btn")
// console.log(defbtn);
defbtn.forEach((defColBtn) => {
    // console.log(defColBtn);
    defColBtn.addEventListener("click", ((defBtnEvent)=>{
        // console.log(defBtnEvent);
        // console.log(defBtnEvent.target);
        if (defBtnEvent.target.id === "white") {
            body.style.backgroundColor = "white"
            body.style.color = "black"
        }
    }))
})