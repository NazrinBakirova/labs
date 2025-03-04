// const container = document.querySelector(".news_data");
// const input = document.querySelector("#searchInput");
// const categorySelect = document.querySelector("#categorySelect");
// let apiKey = "beb65c997adf4140955696f257963401";



// async function getNews() {
//     let searchTerm = input.value;
//     let category = categorySelect.value;
    
//     let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchTerm}&apiKey=${apiKey}`);
//     let data = await res.json();
    
//     container.innerHTML = ""; // Очищаем контейнер перед загрузкой новых данных
    
//     data.articles.forEach(article => {
//         let newsItem = document.createElement("div");
//         newsItem.classList.add("news-item");
//         newsItem.innerHTML = `
//             <h2 class="title">${article.title}</h2>
//             <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="News Image">
//             <p class="description">${article.description || "Описание отсутствует"}</p>
//             <a class="read-more" href="${article.url}" target="_blank">Читать далее</a>
//         `;
//         container.appendChild(newsItem);
//     });
// }


// let newsSection = document.querySelector(".news");


const searchInput=document.getElementById('searchInput');
const categoryFilter=document.getElementById('categoryFilter');
const newsList=document.getElementById('newsList');
const apiKey="beb65c997adf4140955696f257963401";

async function fetchNews() {
    const searchItem= searchInput.value.toLowerCase();
    const category= categoryFilter.value;
    const url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&q=${searchItem}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.articles);
    } 
    catch(error) {
        console.log("error with loading news",error);
    }
    
}

function displayNews(articles){
    newsList.innerHTML = '';
    if(articles.lenth === 0){
        newsList.innerHTML='<p>Nothing found.</p>';
    }
    articles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.innerHTML = `
                   <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="${article.title}" />
                           <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                           <p>${article.description || "image is disable"}</p>
                           <div class="date">${new Date(article.publishedAt).toLocaleDateString()}</div>
        `;
        newsList.appendChild(newsCard);
    });
}

searchInput.addEventListener('input',fetchNews);
categoryFilter.addEventListener('change',fetchNews);

fetchNews();