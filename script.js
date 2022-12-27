console.log('hey there!')

var name = 'Heythere'
var type = 'social media'

console.log(`${name} is a ${type} platform`);

var age = 45
var year = "45"

console.log(age==year);

var num = 12

// if (num>0){
//     console.log(`${num} is positive`);
// }else if (num<0){
//     console.log(`${num} is negative`);
// }else{
//     console.log("number is zero");
// }


if (num%3 === 0 && num%5===0){
    console.log("FizzBuzz");
}else if(num%5 === 0){
    console.log("Buzz")
}else if(num%3 === 0){
    console.log("Fizz");
}

// ternary operator

console.log(num%2==0?"Even":"Odd");

// larget number using ternary 

num1=10
num2=12

console.log(num1>num2?`${num1} is largest`:`${num2} is largest`);