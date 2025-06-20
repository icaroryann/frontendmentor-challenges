// Altura da viewport multiplicada por 1% para obter o valor em vh
let vh = window.innerHeight * 0.01

// Salva o valor --vh no :root do css
document.documentElement.style.setProperty('--vh', `${vh}px`)

const button = document.querySelector('#toggle-social-medias')
button.addEventListener('click', function() {
    const footer = document.querySelector('#share')
    const data = document.querySelector('.data')

    footer.classList.toggle('activate');
    data.style.display == 'none'
    ? data.style.display = 'flex'
    : data.style.display = 'none'
})