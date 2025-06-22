// Altura da viewport multiplicada por 1% para obter o valor em vh
let vh = window.innerHeight * 0.01

// Salva o valor --vh no :root do css
document.documentElement.style.setProperty('--vh', `${vh}px`)

const button = document.querySelector('#toggle-social-medias')
const footer = document.querySelector('#share')
const data = document.querySelector('.data')
const ballon = document.querySelector('.floating-social-medias')

button.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        footer.classList.toggle('activate');
    
        data.style.display == 'none'
        ? data.style.display = 'flex'
        : data.style.display = 'none'
    } else {
        /*ballon.style.display = 'flex'*/

        ballon.style.display === 'flex'
        ? ballon.style.display = 'none'
        : ballon.style.display = 'flex'
    }
})

window.addEventListener('resize', () => {
    data.style.display = 'flex'
    footer.classList.contains('activate')
    ? footer.classList.toggle('activate')
    : console.log('ok')
    ballon.style.display = 'none'
})