class NewsService{

    getArticleAboutBitcoin(){
        return fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=b31e8293bc454e95afb0d45939915c19")
    }

    getTopHeadlines(countryCode){
        return fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=b31e8293bc454e95afb0d45939915c19`)
    }

    getNewsDetailIndia(){
        return fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=b31e8293bc454e95afb0d45939915c19')
    }

    getTopHeadlinesSports(){
        return fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b31e8293bc454e95afb0d45939915c19')
    }

    getNewsByCategories(category){
        return fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b31e8293bc454e95afb0d45939915c19`)
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

service.getTopHeadlinesSports().then(res=> res.json()).then(data=> getSportsHeadlines(data.articles))



// End of Function calls



// Event functions
function allNews(event){
    countryCode = event.target.name
    console.log(countryCode);
    service.getTopHeadlines(countryCode).then(res=> res.json()).then(data=> getAllNews(data.articles))
}

function categoryNewsAll(event){
    category = event.target.name
    console.log(category);
    service.getNewsByCategories(category).then(res=> res.json()).then(data=> getAllNews(data.articles))
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

            <a href="${article.url}" style="color:black; text-decoration:none;">
            <div class="card" border-0 text-bg-dark" style="border-radius:0; width:99%; height: 19em;overflow: hidden;">
                <img src="${article.urlToImage}" class="card-img" style="width:100%; border-radius:0; height: 13em; object-fit: cover;" alt="image not found">
                <div class="card-body">
                    <p class="card-text">${article.title}</p>
                    <span class="card-text"><small>${article.publishedAt}</small></span>
                </div>
            </div>
            </a>
            
            
            
            
            
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

            <a href="${article.url}" style="color:black; text-decoration:none;">
            <div class="card" border-0 text-bg-dark" style="border-radius:0; width:99%; height: 19em;overflow: hidden;">
                <img src="${article.urlToImage}" class="card-img" style="width:100%; border-radius:0; height: 13em; object-fit: cover;" alt="image not found">
                <div class="card-body">
                    <p class="card-text">${article.title}</p>
                    <span class="card-text"><small>${article.publishedAt}</small></span>
                </div>
            </div>
            </a>
            
            `
            document.querySelector("#TopNewsUk").innerHTML = htmlData
        }

    }
    // End of Headlines - US


    // Top Headlines-Sports
    function getSportsHeadlines(articles){
        let htmlData = ""

        for(article of articles.slice(0,5)){
            htmlData+=
            `
            <div class="card mb-3" style="max-width: 99%; max-height: 7em;overflow:hidden">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${article.urlToImage}" class="img-fluid rounded-start" style="height:7em; object-fit:cover;" alt="Image not available">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h6 class="card-title" style="margin-top:-0.5em">${article.title}</h6>
                </div>
                </div>
            </div>
            </div>

            `

            document.querySelector("#sports-news").innerHTML = htmlData
        }


    }





    // Top News display
    function getAllNews(articles){
        let htmlData = ""

        for(article of articles){
            htmlData+=
            `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${article.urlToImage}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text"><small class="text-muted">${article.publishedAt}</small></p>
                </div>
                </div>
            </div>
            </div>

            `

            document.querySelector("#all-news").innerHTML = htmlData
        }


    }






    // getDetail News
    function getDetailNews(event){
        title = event.target.name
        service.getNewsDetailIndia().then(res=> res.json()).then(data=> details(data.articles))
        
         function details(articles){
           articles.filter(f=> f.title == title).forEach(element => {

            // let serialized_data = JSON.stringify(element)
            
            // localStorage.setItem("element", serialized_data)

            // let deserialiezd_data = JSON.parse(localStorage.getItem("element"))

            // console.log(deserialiezd_data);

            let htmlData = `
            <div class="card" style="width: 100%;">
            <img src="${element.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>

                <p class="card-title" ><small>Author : ${element.author}</small></p>
                <p class="card-title" ><small>Published At : ${element.publishedAt}</small></p>

                <p class="content">${element.content}</p>
                <p class="content">Read More..</p>
                <a href="${element.url}" class="card-link">${element.url}</a>
            </div>
            </div>
            `
            document.querySelector("#detail-news").innerHTML = htmlData


           });
            
            
        }
        
    }


    // End of get Detail News







// End of function definitions




