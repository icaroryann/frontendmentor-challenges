const form = document.querySelector('#form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    const day = document.querySelector('#day')
    const month = document.querySelector('#month')
    const year = document.querySelector('#year')
    const resultYears = document.querySelector('.result-year')
    const resultMonths = document.querySelector('.result-month')
    const resultDays = document.querySelector('.result-day')
    const dateNow = new Date()
    let isFormOk = true
    let isDayOk = false
    let isMonthOk = false
    let isYearOk = false

    // Checks if the year is a leap year
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    // Returns the max day for a given month and year
    const getMaxDay = (month, year) => {
        if ([4, 6, 9, 11].includes(month)) return 30;
        if (month === 2) return isLeapYear(year) ? 29 : 28;
        return 31;
    };

    // Day validation
    if (!day.value) {
        displayError(day, 'This field is required')
        isFormOk = false
    } else {
        setInputOk(day, 0)
        const maxDay = getMaxDay(Number(month.value), Number(year.value));
        if (Number(day.value) < 1 || Number(day.value) > maxDay) {
            isDayOk = false
            displayError(day, `Must be a valid day (1-${maxDay})`);
        } else {
            isDayOk = true
        }
    }

    // Month validation
    if (!month.value) {
        displayError(month, 'This field is required')
        isFormOk = false
    } else {
        setInputOk(month, 1)
        if (Number(month.value) > 12 || Number(month.value) < 1) {
            isMonthOk = false
            displayError(month, 'Must be a valid month');
        }  else {
            isMonthOk = true
        }
    }

    // Year validation
    if (!year.value) {
        displayError(year, 'This field is required')
        isFormOk = false
    } else {
        setInputOk(year, 2)
        if (Number(year.value) > dateNow.getFullYear()) {
            isYearOk = false
            displayError(year, 'Must be in the past');
        }  else if (Number(year.value) < 1909) {
            isYearOk = false
            displayError(year, "You're a Guinness Book record holder");
        }  else {
            isYearOk = true
        }
    }

    // If all fields are valid, calculate the difference
    if (isFormOk && isDayOk && isMonthOk && isYearOk) {
        const dayBirth = new Date(`${year.value}/${month.value}/${day.value}`)
        let age = dateNow.getFullYear() - dayBirth.getFullYear();
        let monthDiff = dateNow.getMonth() - dayBirth.getMonth();
        let dayDiff = dateNow.getDate() - dayBirth.getDate();

        if (dayDiff < 0) {
            monthDiff--;
            // Adjust for the number of days in the previous month
            const prevMonth = new Date(dateNow.getFullYear(), dateNow.getMonth(), 0);
            dayDiff += prevMonth.getDate();
        }
        if (monthDiff < 0) {
            age--;
            monthDiff += 12;
        }

        animateCountUp(resultYears, age, 700);
        animateCountUp(resultMonths, monthDiff, 700);
        animateCountUp(resultDays, dayDiff, 700);
    }
})


// Kassanikeo-style: animated count up/down to the final value
function animateCountUp(element, finalValue, duration = 700) {
    const startValue = parseInt(element.textContent) || 0;
    const startTime = performance.now();
    const isInt = Number.isInteger(finalValue);
    function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.round(startValue + (finalValue - startValue) * progress);
        element.textContent = isInt ? current : current.toFixed(0);
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = finalValue;
        }
    }
    requestAnimationFrame(animate);
}

// Shows the error message for the input
const displayError = (element, message) => {
    element.nextElementSibling.innerHTML = message
    element.nextElementSibling.style.display = 'block'
    element.previousElementSibling.style.color = 'var(--color-primary-Red-400)'
}

// Resets the input to the valid state
const setInputOk = (date, idx) => {
    const errorDiv = document.querySelectorAll('.messageError')
    const labelName = document.querySelectorAll('label')
    errorDiv[idx].style.display = 'none'
    labelName[idx].style.color = 'var(--color-neutral-Grey-500)'
}