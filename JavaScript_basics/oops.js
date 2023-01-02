class Person{
    constructor(name, age){
        this.name=name
        this.age=age
    }

    printPerson(){
        console.log(this.name, this.age);
    }
}

var p1 = new Person('Dhananajay', 21)

p1.printPerson()