"use strict";

function Vehicle(mark, module, year) {
    this.mark = mark;
    this.module = module;
    this.year = year;
    this.getAllInform = function () {
        return this.mark + ' ' + this.module + ' ' + this.year;
    }
}

function Car(mark, module, year) {
    Vehicle.apply(this, arguments);
    this.getAllInform = function() {
        return 'Автомобиль ' + this.mark + ' ' + this.module + ' ' + this.year;
    }
}

Car.prototype.signal = function () {
    alert('Сиганлит');
}

Airplane.prototype.fly = function () {
    let tepyV = 'Plane';
    alert('А эти могут летать');
    console.log(tepyV + ' ' + this.mark + ' ' + this.module + ' ' + this.year + ' года');
}

Ship.prototype.swim = function () {
    alert('А они ходят по морю');
    console.log(this.mark + ' ' + this.module + ' ' + this.year + ' года');
}

function Airplane(mark, module, year) {
    Vehicle.apply(this, arguments);
}

function Ship(mark, module, year) {
    Vehicle.apply(this, arguments);
}

let uCar = new Car('Honda', 'Civic', 1998);
let uAirplane = new Airplane('Airbus', '319', 2012);
let uShip = new Ship('The World', 'C6RW4', 2001);

let aCar = new Car('Ford', 'GT-40', 1968);

console.log(uCar.getAllInform())
console.log(uShip.getAllInform());
console.log(uAirplane.getAllInform());
console.log(aCar.getAllInform());
// console.log(uCar.signal());
// console.log(uAirplane.fly());
// console.log(uShip.swim())
// console.log(uCar.isRocket);
// console.log(uAirplane.isRocket);
// console.log(uShip.isRocket);
// console.log(Vehicle);
// console.log('\n');






// class newCar extends Car {
//     getAllInform() {
//         super.getAllInform();
//         alert('Auto');
//     }
// }


// console.log(new newCar('Porcs