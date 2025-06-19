const button = document.querySelector('#toggle-social-medias')
button.addEventListener('click', function() {
    const footer = document.querySelector('#share')
    const data = document.querySelector('.data')

    footer.classList.toggle('activate');
    data.style.display == 'none'
    ? data.style.display = 'flex'
    : data.style.display = 'none'
})