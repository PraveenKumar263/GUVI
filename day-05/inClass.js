// Classes and Objects..
// A class is a blue Print
// it consist of properties ,methods etc...

// Abstraction, Encapsulation, Inheritance, Polymorphism...
// OOP:

// Absrtaction:Hiding The implementation Details from the user
// Encapsulation: protecting the data
// Inheritance: copying the properties from the parent to children..
// Polymorphism: A method that can perform different actions/operations similar to actor doing multiple roles

class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    print_carname() {
        return `The name of the car is ${this.name}`
    }

    getyear() {
        return this.getyear;
    }

    setyear() {
        this.year = year;
    }
}

// Real time Entity Called Objects:
// Syntax: var objectname = new Classname();
var c1 = new Car("bmw", 2020);
// this is a reference which will be pointing to freshly created Objects..
// Constructor:
// The purpose of the constructor is to store the data inside the freshly created Objects..
console.log(c1.print_carname);
c1.setyear(2023);
console.log(c1.getyear());

// Example of creating a class called Bike and decalring 2 objects
class Bike {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    
}

var b1 = new Bike("bmw", "black");
var b2 = new Bike("honda", "red");

// For the task, for each qn create a .js file
// class-circle.md conver UML diagram to class and objects


