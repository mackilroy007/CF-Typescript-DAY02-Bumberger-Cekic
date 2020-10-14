'use srtict';

let arr = [];
class Vehicles {
  price = '';
  kilometers = '';
  production = '';
  seats = '';
  fuel = '';

  constructor(b, c, d, e, f) {
    this.price = b;
    this.kilometers = c;
    this.production = d;
    this.seats = e;
    this.fuel = f;

    arr.push(this);
  }

  attributes() {
    return `  ${this.price}  ${this.kilometers} 
       ${this.production} ${this.seats} ${this.fuel}`;
  }
}
class motorbike extends Vehicles {
  vehicle;
  constructor(b, c, d, e, f, g) {
    super(b, c, d, e, f);
    this.vehicle = g;
  }
  attributes() {
    return ` ${this.vehicle} ${this.price}  ${this.kilometers} 
       ${this.production} ${this.seats} ${this.fuel}`;
  }
}
class car extends Vehicles {
  vehicle;
  color;
  constructor(b, c, d, e, f, g, h) {
    super(b, c, d, e, f);
    this.vehicle = g;
    this.color = h;
  }
  attributes() {
    return `  ${this.vehicle} ${this.color} ${this.price}  ${this.kilometers} 
       ${this.production} ${this.seats} ${this.fuel}`;
  }
}
class bus extends Vehicles {
  vehicle;
  size;
  constructor(b, c, d, e, f, g, h) {
    super(b, c, d, e, f);
    this.vehicle = g;
    this.size = h;
  }
  attributes() {
    return ` ${this.vehicle} ${this.size} ${this.price}  ${this.kilometers} 
       ${this.production} ${this.seats} ${this.fuel}`;
  }
}
class truck extends Vehicles {
  vehicle;
  owner;
  constructor(b, c, d, e, f, g, h) {
    super(b, c, d, e, f);
    this.vehicle = g;
    this.owner = h;
  }
  attributes() {
    return `  ${this.vehicle} ${this.owner} ${this.price}  ${this.kilometers} 
       ${this.production} ${this.seats} ${this.fuel}`;
  }
}
let display1 = new motorbike('10', '100', '99', '2', 'petrol', 'motorbike');
let display2 = new car('10', '100', '99', '2', 'benzin', 'car', 'blue');
let display3 = new bus('10', '100', '99', '2', 'diesel', 'bus', '0');
let display4 = new truck('10', '100', '99', '2', 'diesl', 'truck', 'Aaron');

for (let i of arr) {
  document.getElementById('result').innerHTML += `${i.attributes()} <br>`;
}
