class Vehicle {
    constructor(make, model, year){
        this.model = model;
        this.make = make;
        this.year = year;
    }
    honk(){
        console.log("beep")
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`)
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels=4;
       
    }
}


class Motorcycle extends Car {
    constructor (make, model, year, numWheels){
        super (make, model, year, numWheels);
        this.numwheels= 2;
    }
    revEngine(){
        console.log("VROOOM")
    }
}

let test = new Vehicle("Honda", "Monster Truck", 1999);

let myFirstCar = new Car("Honda", "Monster Truck", 1999);


let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);