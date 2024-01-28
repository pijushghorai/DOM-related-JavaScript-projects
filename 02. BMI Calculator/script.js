const form = document.querySelector("form")
// console.log(form);
form.addEventListener("submit", ((event) => {
    event.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    
    
    if (height === "" || height <0 || isNaN(height)) {
        results.innerHTML = `Please enter valid height`;
    }
    else if (weight === "" || weight <0 || isNaN(weight)) {
        results.innerHTML = `Please enter valid weight`;
    }
    else {
        const bmi = (weight / ((height * height)/10000)).toFixed(1)
        const resultsGuide = document.querySelector("#results-guide")
        // result
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`
        if (bmi < 18.6) {
            resultsGuide.innerHTML = `<span>Under Weight</span>`
        }
        if (bmi < 24.9 && bmi > 18.6) {
            resultsGuide.innerHTML = `<span>Normal weight</span>`
        }
        if (bmi > 24.9) {
            resultsGuide.innerHTML = `<span>Overweight</span>`
        }
        
    }
}))

