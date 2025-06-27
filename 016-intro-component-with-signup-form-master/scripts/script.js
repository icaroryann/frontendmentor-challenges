// Armazena o formulário em uma variável
const submit = document.querySelector('#form-signup')

// Define um modelo para os tipos de emails válidos
let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;

// Função que dispara quando o usuário tenta conluir o formulário
submit.addEventListener('submit', function(event) {

    // Loop com comprimento dos inputs
    for (let i=0; i<submit.length-1;i++) {
        //
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