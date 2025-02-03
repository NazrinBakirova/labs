let productsContainer = document.querySelector(".container")
let favoriteList = document.querySelector(".favoriteList")
 let favorites=[];

const products = [
    {
        id:1,
        name:" tenderr",
        brand:" chanel",
        productType:" perfume",
        price:150,
        valute:"USD"
    },

    {
        id:2,
        name:"lostCherry",
        brand: "tomFord",
        productType:" perfume",
        price:350,
        valute:"USD"
    },

    {
        id:3,
        name:"Flora",
        brand: "Gucci",
        productType: "perfume",
        price:110,
        valute:"USD"
    },

    {
        id:4,
        name:"missDior",
        brand:" dior",
        productType: "perfume",
        price:90,
        valute:"USD"
    },

    {
        id:5,
        name:"tobaccoVanile",
        brand: "tomFord",
        productType: "perfume",
        price:300,
        valute:"USD"
    },
]




productsContainer.innerHTML = products.map((item)=>
    `<div class="products_item" data-id="${item.id}">
  <h2>${item.name} -${item.brand} </h2>
    </div>`).join("");


let productsItem = document.querySelectorAll(".products_item")

productsItem.forEach((product)=>(
    product.addEventListener("click",()=>{
    let productId = Number(product.getAttribute("data-id"));

    let myFavProduct= products.find((pr)=>pr.id==productId);
   let isExist = favorites.some((pr)=>pr.id==productId);


    if(isExist){
        favorites=favorites.filter((pr)=>pr.id!==productId);
    }else{
        favorites.push(myFavProduct)
    }
    wishlist()
    
    })
))
function wishlist(){
    favoriteList.innerHTML = favorites.map((a)=>`<div class="products_item" data-id="${a.id}">
    <h2>${a.name} -${a.brand} </h2>
      </div>`).join("");
  }










//  function findProduct(id){

// let product = products.find((e)=> e.id==id)
// favorites.push(product);
// }

// findProduct(2);
// console.log(favorites);































// document.addEventListener('DOMContentLoaded', () => {
//     const favorites = [];
//     const productsData = [
//         { id: 1, name: 'Məhsul 1' },
//         { id: 2, name: 'Məhsul 2' },
//         { id: 3, name: 'Məhsul 3' }
//     ];

//     const app = document.createElement('div');
//     app.style.padding = '20px';
//     document.body.appendChild(app);

//     const productsContainer = document.createElement('div');
//     productsContainer.style.display = 'flex';
//     productsContainer.style.gap = '15px';
//     app.appendChild(productsContainer);

//     productsData.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.textContent = product.name;
//         productElement.dataset.id = product.id;
//         productElement.classList.add('product');
//         productElement.style.display = 'inline-block';
//         productElement.style.padding = '10px';
//         productElement.style.border = '1px solid #ccc';
//         productElement.style.cursor = 'pointer';
//         productElement.style.textAlign = 'center';
//         productElement.style.width = '100px';
//         productElement.style.borderRadius = '5px';
//         productElement.style.transition = 'background 0.3s';

//         productElement.addEventListener('click', () => {
//             const productId = productElement.dataset.id;
//             const index = favorites.indexOf(productId);
            
//             if (index > -1) {
//                 favorites.splice(index, 1);
//                 productElement.style.backgroundColor = '';
//             } else {
//                 favorites.push(productId);
//                 productElement.style.backgroundColor = 'yellow';
//             }
            
//             favoritesSection.innerHTML = '';
//             favorites.forEach(id => {
//                 const favoriteItem = document.createElement('div');
//                 favoriteItem.textContent = `Məhsul ${id}`;
//                 favoriteItem.style.padding = '5px';
//                 favoriteItem.style.borderBottom = '1px solid #ddd';
//                 favoritesSection.appendChild(favoriteItem);
//             });
//             console.log(favorites);
//         });

//         productsContainer.appendChild(productElement);
//     });

//     const favoritesTitle = document.createElement('h3');
//     favoritesTitle.textContent = 'Favorilər';
//     favoritesTitle.style.marginTop = '20px';
//     app.appendChild(favoritesTitle);

//     const favoritesSection = document.createElement('div');
//     favoritesSection.style.padding = '10px';
//     favoritesSection.style.border = '1px solid #ccc';
//     favoritesSection.style.minHeight = '50px';
//     favoritesSection.style.borderRadius = '5px';
//     app.appendChild(favoritesSection);
// });
