class NewsService{

    getArticleAboutBitcoin(){
        return fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=b31e8293bc454e95afb0d45939915c19")
    }

    getTopHeadlines(countryCode){
        return fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=b31e8293bc454e95afb0d45939915c19`)
    }

    getNewsByCategories(){
        return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b31e8293bc454e95afb0d45939915c19")
    }

    getNewsDetailIndia(){
        return fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=b31e8293bc454e95afb0d45939915c19')
    }
}

// Objects
var service = new NewsService()

// End of objects



// preload News from india
service.getTopHeadlines("in").then(res=> res.json()).then(data=> getTopHeadlinesIndia(data.articles))
service.getTopHeadlines("gb").then(res=> res.json()).then(data=> getTopHeadlinesUk(data.articles))

service.getArticleAboutBitcoin().then(res=> res.json()).then(data=> bitcoinArticles(data.articles))

// Funtion calls
service.getTopHeadlines("in").then(res=> res.json()).then(data=> headerBlock(data.articles))



// End of Function calls



// Event functions
function getTopNews(event){
    countryCode = event.target.name
    console.log(countryCode);
    service.getTopHeadlines(countryCode).then(res=> res.json()).then(data=> populateAllArticles(data.articles))
}

// End of event functions




// Function Defenitions


    function headerBlock(articles){
        let htmlData=""

        a=1

        for(article of articles.slice(0, 4)){
            if(a==1){
                htmlData+=`
                <div class="carousel-item active">
                    <img src="${article.urlToImage}" class="d-block w-100" alt="..." style="width: 100%; height: 25em; object-fit: cover;">
                    <div class="carousel-caption d-none d-md-block">    
                        <h5>${article.title}</h5>
                    </div>
                </div>
                `
            }else{
                htmlData+=`
                <div class="carousel-item">
                    <img src="${article.urlToImage}" class="d-block w-100" alt="..." style="width: 100%; height: 25em; object-fit: cover;">
                    <div class="carousel-caption d-none d-md-block">    
                        <h5>${article.title}</h5>
                    </div>
                </div>
                `
            }
            

            document.querySelector("#inner-carousel").innerHTML=htmlData
            a+=1
        }
    }


    function bitcoinArticles(articles){
        let htmlData = ""

        for(article of articles.slice(0,4)){
            htmlData+=`
            <div class="col-6 ">
            <div class="card text-bg-dark" style="width:111%;height:11em; margin-left:-2em; border-radius:0;">
            <img src="${article.urlToImage}" style="width:100%; height:12em; object-fit: cover;" class="card-img" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title">${article.title}</h5>
            </div>
            </div>
            </div>
            `

            document.querySelector("#article").innerHTML = htmlData
        }
    }


    // Top Headlines - India
    function getTopHeadlinesIndia(articles){
        let htmlData=""
        for(article of articles.slice(0, 4)){
            htmlData+=`

            <div class="card border-0 text-bg-dark" style="border-radius:0">
            <img src="${article.urlToImage}" class="card-img" style="width: 19.5em; height: 13em; object-fit: cover;" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title bg-dark opacity-90 shadow">${article.title}</h5>
                <p class="card-text"><small>${article.publishedAt}</small></p>
            </div>
            <a href="./news-detail.html" type="submit" style="z-index: 0;" class="btn text-bg-dark" onclick="getDetailNews(event)" name="${article.title}">read more</a>
            </div>
            
            
            `
            document.querySelector("#TopNewsIndia").innerHTML = htmlData
        }

    }
    // End of Headlines - India


    // Top Headlines - US
    function getTopHeadlinesUk(articles){
        let htmlData=""
        for(article of articles.slice(0, 4)){
            htmlData+=`

            <div class="card border-0 text-bg-dark" style="border-radius:0">
            <img src="${article.urlToImage}" class="card-img" style="width: 19.5em; height: 13em; object-fit: cover;" alt="...">
            <div class="card-img-overlay opacity-75">
                <h5 class="card-title bg-dark opacity-100">${article.title}</h5>
                <p class="card-text"><small>${article.publishedAt}</small></p>
            </div>
            </div>
            
            `
            document.querySelector("#TopNewsUk").innerHTML = htmlData
        }

    }
    // End of Headlines - US


    // getDetail News
    function getDetailNews(event){
        window.location.assign("news-detail.html")
        title = event.target.name
        service.getNewsDetailIndia().then(res=> res.json()).then(data=> details(data.articles))
        
         function details(articles){
            let news = articles.filter(f=> f.title == title)
            localStorage.setItem(news)

            console.log(news);

            let htmlData = `
            <div class="card" style="width: 18rem;">
            <img src="${news.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
            </div>
            `
            document.querySelector("#detail-news").innerHTML = htmlData
        }
        
    }


    // End of get Detail News







// End of function definitions




