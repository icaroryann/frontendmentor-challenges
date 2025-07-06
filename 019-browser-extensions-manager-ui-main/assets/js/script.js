let extensions = []
let extensionsActives = []
let extensionsInactives = []
const btnAll = document.querySelector('#all')
const btnActive = document.querySelector('#active')
const btnInactive = document.querySelector('#inactive')

const extensionsContainer = document.querySelector('.extensions')

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        extensions = data;
        extensions.forEach((element, index) => {
            element.id = index
            element.isActive === true
                ? extensionsActives.push(element)
                : extensionsInactives.push(element)
        })
        showExtensions(extensions);
    })

function showExtensions(list) {
    extensionsContainer.innerHTML = '';
    list.forEach(element => {
        const extensionDiv = document.createElement('div');
        extensionDiv.classList.add('box-extension')
        const buttonActive = document.createElement('div')
        buttonActive.classList.add('extension-toggle')
        element.isActive === true
            ? buttonActive.classList.add('active')
            : buttonActive.classList.remove('active')
        buttonActive.innerHTML = `<div class="circle"></div>`

        extensionDiv.innerHTML = `
            <img src=${element.logo} alt="Logo of ${element.name} extension">
            <h2>${element.name}</h2>
            <p>${element.description}</p>
            <button class="remove">Remove</button>
            `;
        extensionDiv.appendChild(buttonActive)
        extensionsContainer.appendChild(extensionDiv);
    });
    
    document.querySelectorAll('.extension-toggle').forEach((toggle, index) => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active')
            //this.classList.contains('active') ? extensionsActives.pop()
        })
    })
}

const listAllExt = document.querySelector('#all').addEventListener('click', () => {
    btnActive.classList.remove('active')
    btnInactive.classList.remove('active')
    btnAll.classList.add('active')
    showExtensions(extensions)
})

const listActiveExt = document.querySelector('#active').addEventListener('click', () => {   
    btnAll.classList.remove('active')
    btnInactive.classList.remove('active')
    btnActive.classList.add('active')
    showExtensions(extensionsActives)
});

const listInactiveExt = document.querySelector('#inactive').addEventListener('click', () => {
    btnAll.classList.remove('active')
    btnActive.classList.remove('active')
    btnInactive.classList.add('active')
    showExtensions(extensionsInactives)
})