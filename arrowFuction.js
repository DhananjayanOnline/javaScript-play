var numCheck = (number) => number%2==0? "even": "odd"

console.log(numCheck(6));

var fact = (number) => {
    f = 1
    for(var i=1; i<=number;i++){
        f = f*i
    }
    return f
}

console.log(fact(5));