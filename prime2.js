var isPrime = true

for (let i=15; i<=56; i++){
    for(let j=2; j<i;j++){
        if (i%j==0){
            isPrime=false
            break
        }
    }

    if (isPrime == true){
        console.log(i);
    }

    isPrime = true
}

