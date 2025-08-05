
const dessertsDiv = document.querySelector('.desserts')

let dessertsList = []
let cartList = []

fetch('./data.json')
.then(response => response.json())
.then(data => {
    dessertsList = data
    
    showDesserts(dessertsList)
})

const showDesserts = (array) => {
    dessertsDiv.innerHTML = ''
    array.forEach((element, index) => {
    
        const dessertDiv = document.createElement('div')
        dessertDiv.classList.add('dessert')
        dessertDiv.innerHTML = `
            <div class="image" tabindex="0">
                <picture>
                    <source srcset="${element.image.mobile}" media="(max-width: 600px)">
                    <source srcset="${element.image.tablet}" media="(max-width: 900px)">
                    <img src="${element.image.desktop}" alt="Waffle's image">
                </picture>
            <button class="add active" onclick=showAmount(${index})><img src="assets/images/icon-add-to-cart.svg" alt="">Add to Cart</button>
            <button class="amount">
                <div><img src="assets/images/icon-decrement-quantity.svg" alt=""></div>
                <span>0</span>
                <div><img src="assets/images/icon-increment-quantity.svg" alt=""></div>
            </button>
            </div>
            <h2>${element.category}</h2>
            <p class="description">${element.name}</p>
            <span class="price">$${element.price.toFixed(2)}</span>
        `
        dessertsDiv.appendChild(dessertDiv)

    })
}

// async function showAmount(numberChildren) {
//     const selectDiv =  await dessertsDiv.children[numberChildren]
//     selectDiv.querySelector('.image').focus()
//     selectDiv.querySelector('add').innerHTML = ''
//     selectDiv.querySelector('amount').classList.toggle('active')
// }