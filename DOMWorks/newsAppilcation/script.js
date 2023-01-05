class NewsService{
    getTopHeadlines(){
        return fetch("https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=b31e8293bc454e95afb0d45939915c19")
    }

    getNewsByCategories(){
        return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b31e8293bc454e95afb0d45939915c19")
    }
}

var service = new NewsService()

service.getTopHeadlines().then(res=> res.json()).then(data=> populateAllArticles(data.articles))

function populateAllArticles(articles){
    console.log(articles);
    let htmlData=""
    for(article of articles){
        htmlData+=`
        <div class="col-4">
            <div class="card mt-3" style="width: 18rem;">
                <img src="${article.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${article.author}</li>
                    <li class="list-group-item">${article.publishedAt}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
        </div>
        `
        document.querySelector("#result").innerHTML = htmlData
    }

}