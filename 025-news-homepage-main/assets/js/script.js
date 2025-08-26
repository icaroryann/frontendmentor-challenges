const openBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close-btn')
const navDiv = document.querySelector('nav')

openBtn.addEventListener('click', function() {
    navDiv.classList.add('visible')
})

closeBtn.addEventListener('click', function() {
    navDiv.classList.remove('visible')
})