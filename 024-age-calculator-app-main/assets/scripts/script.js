const form = document.querySelector('#form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    const day = document.querySelector('#day')
    const month = document.querySelector('#month')
    const year = document.querySelector('#year')
    const time = [day, month, year]
    const errorDiv = document.querySelectorAll('.messageError')
    const labelName = document.querySelectorAll('label')
    const resultYears = document.querySelector('.result-year')
    const resultMonths = document.querySelector('.result-month')
    const resultDays = document.querySelector('.result-day')
    const dateNow = new Date()
    let isFormOk = false

    time.map((date, idx) => {
        if (!date.value) {
            displayError(date, 'This fild is required')
            isFormOk = false
        } else {
            isFormOk = true
            date.classList.remove('none')
            errorDiv[idx].style.display = 'none'
            labelName[idx].style.color = 'var(--color-neutral-Grey-500)'
        }

        (parseInt(day.value) > 31 || parseInt(day.value) < 1) && displayError(day, 'Must be a valid day')
        (parseInt(month.value) > 12 || parseInt(month.value) < 1) && displayError(month, 'Must be a valid month')
        parseInt(year.value) > dateNow.getFullYear() && displayError(year, 'Must be in the past')
        parseInt(year.value) < 1909 && displayError(year, "You're a Guinness Book record holder")
    })

    if (isFormOk) {
        resultYears.innerHTML = dateNow.getFullYear - parseInt(year.value)
    }
})

const displayError = (element, message) => {
    element.classList.add('none')
    element.nextElementSibling.innerHTML = message
    element.nextElementSibling.style.display = 'block'
    element.previousElementSibling.style.color = 'var(--color-primary-Red-400)'
}