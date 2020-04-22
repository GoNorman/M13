"use strict";

class Vehicle {
    constructor(mark, module, year) {
        this.mark = mark;
        this.module = module;
        this.year = year;
        this.getAllInform = () => `${this.mark} ${this.module} ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(mark, module, year){
        super(mark, module, year);
        this.getAllInform = () => `Автомобиль ${this.mark} ${this.module} ${this.year}`;
    }
}

Car.prototype.signal = () => { 
    alert(`Эти сигналят`);
}

class Airplane extends Vehicle { 
    constructor(mark, module, year){
        super(mark, module, year);
    }
}

class Ship extends Vehicle {
    constructor(mark, module, year) {
        super(mark, module, year);
    }
}


const newCar = new Car('Honda', 'Civic', 1999);
const newCarS = new Car('Ford', 'GT-40', 1968);
const newAir = new Airplane('Airbus', '319', 2012);
const newShip = new Ship('The World', 'C6RW4', 2001);

alert(`${newCar.getAllInform()}`);
newCar.signal();
alert(`${newCarS.getAllInform()}`);
alert(`${newAir.getAllInform()}`);
alert(`${newShip.getAllInform()}`);