const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result')

const checkLeapYear = (year) => {
    // A leap year is divisible by 4 but not by 100 unless it is divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

const leapYearResult = () => {
    const year = document.querySelector('#year').value;
    if (checkLeapYear(year)) {
        result.innerHTML = `${year} is a Leap Year`;
    } else {
        result.innerHTML = `${year} is not a Leap Year`;
    }
}

checkBtn.addEventListener('click', leapYearResult);
