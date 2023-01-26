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

class Garage {
    constructor(cap){
        this.cap = cap
        this.vehicles = []

    }
    add(vehicle){
        if(this.cap <= this.vehicles.length){
            console.log("Sorry we`re full!")
        }else if (!(vehicle instanceof Vehicle)){
            console.log("Sorry only vehicles allowed")
        }else {
            this.vehicles.push(vehicle)
        }

    }
}

let test = new Vehicle("Honda", "Monster Truck", 1999);

let myFirstCar = new Car("Honda", "Monster Truck", 1999);

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

let mySecondMotorcycle = new Motorcycle("Hondaaa", "Nighthawk", 2000);

let garage = new Garage (3);