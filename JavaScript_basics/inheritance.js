class Parent{
    m1(){
        console.log('parent method');
    }
}

class Parent1{
    m1(){
        console.log('parent method 2');
    }
}

class Child extends Parent{
    m2(){
        console.log('child method');
    }
}

var ob = new Child()

ob.m1()