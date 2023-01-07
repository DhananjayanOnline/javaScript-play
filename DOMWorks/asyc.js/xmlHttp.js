// creating an object
var request = new XMLHttpRequest()


request.open("get", "https://fakestoreapi.com/products")
request.send()
request.onreadystatechange=()=>{
    if(request.readyState==4){
        if(request.status > 199 && request.status < 300){
            let products = JSON.parse(request.responseText)
            console.log(products);
        }
    }
}