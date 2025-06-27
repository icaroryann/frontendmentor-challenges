// Store the form in a variable
const submit = document.querySelector('#form-signup')

// Define a pattern for valid email types
let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;

// Function that triggers when the user tries to submit the form
submit.addEventListener('submit', function(event) {

    // Loop through the length of the inputs
    for (let i=0; i<submit.length-1;i++) {
        // If the input value is empty, change the box visual
        if (submit[i].value == '') {
            event.preventDefault()
            submit[i].style.borderColor = 'var(--Red)'

            const msgError = submit.getElementsByTagName('p')
            msgError[i].style.display = 'block'

            const iconError = submit.getElementsByTagName('img')
            iconError[i].style.display = 'block'

            const placeHolder = submit.getElementsByTagName('input')
            placeHolder[i].removeAttribute('placeholder')

            submit[i].style.animation = '.2s linear 0s alternate error'

        // If the email does not match the regex, print an alternative message
        }else if (submit[i].type == 'email' && !emailRegex.test(submit[i].value)) {
            event.preventDefault()
            submit[i].style.borderColor = 'var(--Red)'

            const msgError = submit.getElementsByTagName('p')
            msgError[i].innerHTML = 'Looks like this is not an email'
            msgError[i].style.display = 'block'

            const iconError = submit.getElementsByTagName('img')
            iconError[i].style.display = 'block'

            const placeHolder = submit.getElementsByTagName('input')
            placeHolder[i].removeAttribute('placeholder')

            submit[i].style.animation = '.2s linear 0s alternate error'
        }
    }
})