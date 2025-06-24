const submit = document.querySelector('#form-signup')

submit.addEventListener('submit', function(event) {
    for (let i=0; i<submit.length-1;i++) {
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
        }
    }

    //event.preventDefault()
})