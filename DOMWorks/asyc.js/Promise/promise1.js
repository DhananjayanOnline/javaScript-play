var lotPro = new Promise((res, rej)=>{
    let ticketNum = 1;
    let priceNum = Math.floor(Math.random()*10)
    if(ticketNum==priceNum){
        res("won")
    }
})



lotPro.then(res=> console.log("buy a car")).catch(err=>console.log("You have to buy a lottery"))


