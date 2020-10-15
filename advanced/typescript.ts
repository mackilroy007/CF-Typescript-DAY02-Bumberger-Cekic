'use srtict';

let arr = [];
class Vehicles {
  price = '';
  kilometers = '';
  production = '';
  seats = '';
  fuel = '';
  vehicle = '';

  constructor(b, c, d, e, f, g) {
    this.price = b;
    this.kilometers = c;
    this.production = d;
    this.seats = e;
    this.fuel = f;
    this.vehicle = g;

    arr.push(this);
  }

  attributes() {
    return ` ${this.vehicle} ${this.price}  ${this.kilometers} 
       ${this.production} ${this.seats} ${this.fuel}`;
  }
}
class motorbike extends Vehicles {
  extraprice;
  constructor(b, c, d, e, f, g, h) {
    super(b, c, d, e, f, g);
    this.extraprice = h;
  }
  attributes() {
    return ` <img class="card-img-top" src="./img/african.twin.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${this.vehicle}</h5>
      <p class="card-text"> ${this.price}  ${this.kilometers} 
      ${this.production} ${this.seats} ${this.fuel}</p>
      <a href="#" class="btn btn-primary">Calculate</a>
    </div> <br>
     `;
  }
}
class car extends Vehicles {
  color;
  constructor(b, c, d, e, f, g, h) {
    super(b, c, d, e, f, g);

    this.color = h;
  }
  attributes() {
    return `  <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${this.vehicle}</h5>
      <p class="card-text"> ${this.price}  ${this.kilometers} 
      ${this.production} ${this.seats} ${this.fuel} ${this.color}</p>
      <a href="#" class="btn btn-primary">Calculate</a>
    </div>
    `;
  }
}

let display1 = new motorbike(
  '10',
  '100',
  '99',
  '2',
  'petrol',
  'motorbike',
  '2000',
);
let display2 = new car('10', '100', '99', '2', 'benzin', 'car', 'blue');

for (let i of arr) {
  document.getElementById('result').innerHTML += `${i.attributes()} <br>`;
}
