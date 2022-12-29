var mobiles=[
    {id:1,name:"oneplusnord2t",price:30000,brand:"oneplus",band:5,colors:["black","grey"]},
    {id:2,name:"oneplusnord2ce",price:25000,brand:"oneplus",band:5,colors:["black","grey"]},
    {id:3,name:"redminote12",price:40000,brand:"mi",band:5,colors:["black","grey","white"]},
    {id:4,name:"redminote12pro",price:50000,brand:"mi",band:5,colors:["black","grey","green"]},
    {id:5,name:"smasunga52",price:30000,brand:"samsung",band:5,colors:["black","grey","blue"]},
]


// mobiles.map(m=> m.name).forEach(name=>console.log(name))

// mobiles.filter(m=> m.brand=="oneplus").map(m=>m.name).forEach(n=>console.log(n))


// print white color phone brand :
// mobiles.filter(m=> m.colors.includes("white")).forEach(n=>console.log(n.name))

// is apple brand available ?: user some()
// console.log(mobiles.some(m=> m.brand=="apple"));

// fetch a specific object from a list : use find()
// var data = mobiles.find(m=> m.id==4)
// console.log(data);

// fetch highest price mobile :
// var data = mobiles.reduce((m1,m2)=> m1.price>m2.price?m1:m2)
// console.log(data);

// fetch cheapest product :
var data = mobiles.reduce((m1,m2)=> m1.price<m2.price?m1:m2)
console.log(data);





