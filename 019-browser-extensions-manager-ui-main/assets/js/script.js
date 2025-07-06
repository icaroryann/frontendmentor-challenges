// Array to store all extensions
let extensions = [];
// Buttons for filtering
const btnAll = document.querySelector('#all');
const btnActive = document.querySelector('#active');
const btnInactive = document.querySelector('#inactive');
// Container for rendering extensions
const extensionsContainer = document.querySelector('.extensions');

// Fetch extensions data from JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Add an id to each extension for identification
        extensions = data.map((ext, idx) => ({ ...ext, id: idx }));
        showExtensions('all');
    });

// Returns filtered extensions based on type
function getFilteredExtensions(type) {
    if (type === 'active') return extensions.filter(e => e.isActive);
    if (type === 'inactive') return extensions.filter(e => !e.isActive);
    return extensions;
}

// Renders the extensions in the container
function showExtensions(type) {
    const list = getFilteredExtensions(type);
    extensionsContainer.innerHTML = '';
    list.forEach(element => {
        const extensionDiv = document.createElement('div');
        extensionDiv.classList.add('box-extension');
        // Card content
        extensionDiv.innerHTML = `
            <img src="${element.logo}" alt="Logo of ${element.name} extension">
            <h2>${element.name}</h2>
            <p>${element.description}</p>
            <button class="remove">Remove</button>
        `;
        // Toggle button for active/inactive
        const buttonActive = document.createElement('div');
        buttonActive.className = 'extension-toggle' + (element.isActive ? ' active' : '');
        buttonActive.innerHTML = '<div class="circle"></div>';
        buttonActive.addEventListener('click', function() {
            this.classList.toggle('active');
            element.isActive = this.classList.contains('active');
        });
        extensionDiv.appendChild(buttonActive);
        // Remove button event
        extensionDiv.querySelector('.remove').addEventListener('click', function() {
            removeExtension(element.id);
        });
        extensionsContainer.appendChild(extensionDiv);
    });
}

// Removes an extension by id and updates the view
function removeExtension(id) {
    extensions = extensions.filter(ext => ext.id !== id);
    showExtensions(document.querySelector('.filters .active')?.id || 'all');
}

// Event listeners for filter buttons
btnAll.addEventListener('click', () => {
    btnActive.classList.remove('active');
    btnInactive.classList.remove('active');
    btnAll.classList.add('active');
    showExtensions('all');
});

btnActive.addEventListener('click', () => {
    btnAll.classList.remove('active');
    btnInactive.classList.remove('active');
    btnActive.classList.add('active');
    showExtensions('active');
});

btnInactive.addEventListener('click', () => {
    btnAll.classList.remove('active');
    btnActive.classList.remove('active');
    btnInactive.classList.add('active');
    showExtensions('inactive');
});

document.querySelector('.mode').addEventListener('click', function() {
    const imgMode = this.querySelector('img')
    const logo = this.previousSibling()
    document.body.classList.contains('dark-mode')
    ?   console.log('off')
    :   console.log('on')
        imgMode.setAttribute('src', 'assets/images/icon-sun.svg')
        this.style.background = 'var(--Neutral-600)'
    document.body.classList.toggle('dark-mode')
})