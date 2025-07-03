let extensions = []

const extensionsContainer = document.querySelector('.extensions')

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        extensions = data;
        showExtensions(extensions);
    });

function showExtensions(list) {
    extensionsContainer.innerHTML = '';
    list.forEach(element => {
        const extensionDiv = document.createElement('div');
        extensionDiv.classList.add('box-extension')
        extensionDiv.innerHTML = `
            <img src=${element.logo} alt="Logo of ${element.name} extension">
            <h2>${element.name}</h2>
            <p>${element.description}</p>
            <button class="remove">Remove</button>
            <div class="extension-toggle ">
                <div class="cicle active"></div>
            </div>
        `;
        extensionsContainer.appendChild(extensionDiv);
    });
    
    document.querySelectorAll('.extension-toggle').forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active')
        })
    })
}
