let allProd = document.querySelector("#allProd");
let electronics = document.querySelector("#electronics");
let jewelry = document.querySelector("#jewelery");
let menCloth = document.querySelector("#menCloth"); // id исправлен на 'menCloth'
let womenCloth = document.querySelector("#womenCloth"); // id исправлен на 'womenCloth'
const container = document.querySelector('.table_cards');

let productsData = [];


fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
        productsData = data;
        renderProducts(productsData);
    });

// Функция для рендеринга товаров
function renderProducts(products) {
    container.innerHTML = products.map((product) => 
        `<div class="table_card">
            <div class="card_img"><img src="${product.image}" alt="${product.title}"></div>
            <div class="card_text">${product.title}</div>
            <div class="card_price">${product.price} $</div>
        </div>`
    ).join('');
}

allProd.addEventListener("click", () => renderProducts(productsData));
electronics.addEventListener("click", () => filterProducts("electronics"));
jewelry.addEventListener("click", () => filterProducts("jewelery"));
menCloth.addEventListener("click", () => filterProducts("men's clothing"));
womenCloth.addEventListener("click", () => filterProducts("women's clothing"));


function filterProducts(category) {
    const filteredProducts = productsData.filter(product => product.category === category);
    renderProducts(filteredProducts);
}
