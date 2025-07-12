document.querySelector('#form').addEventListener('submit', function(event) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const inputEmail = this.querySelector('input');

    if (!regexEmail.test(inputEmail.value)) {
        event.preventDefault();
        showError(inputEmail);
    }
})

function showError(input) {
    const errorMsg = document.querySelector('#error-mensage');
    const errorImg = document.querySelector('#icon-error');
    errorMsg.style.display = 'block';
    input.focus();
    errorImg.style.display = 'block';
}

function reportWindowSize() {
    const main = document.querySelector('main');
    const mainStyle = window.getComputedStyle(main);
    const marginLeftMain = mainStyle.marginLeft;
    document.documentElement.style.setProperty('--main-margin-left', marginLeftMain)
}

reportWindowSize()

window.onresize = reportWindowSize;