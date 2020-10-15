'use srtict';

let arr = [];
class Vehicles {
  name= '';
  price = '';
  kilometers = '';
  production = '';
  seats = '';
  fuel = '';
  vehicle = '';
  img= '';
  constructor(a, b, c, d, e, f, g, img) {
    this.name= a;
    this.price = b;
    this.kilometers = c;
    this.production = d;
    this.seats = e;
    this.fuel = f;
    this.vehicle = g;
    this.img = img;

    arr.push(this);
  }

  attributes() {
    return ` ${this.vehicle} ${this.price}  ${this.kilometers} 
       ${this.production} ${this.seats} ${this.fuel} ${this.img}`;
  }
}
class motorbike extends Vehicles {
  extraprice;
  constructor(a, b, c, d, e, f, g, h, img) {
    super(a, b, c, d, e, f, g, img);
    this.extraprice = h;
  }
  attributes() {
    return ` <img class="card-img-top" src="${this.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${this.vehicle} ${this.name}</h5>
      <p class="card-text"> ${this.price}  ${this.kilometers} 
      ${this.production} ${this.seats} ${this.fuel}</p>
      <a href="#" class="btn btn-primary">Calculate</a>
    </div> <br>
     `;
  }
}
class car extends Vehicles {
  color;
  constructor(a, b, c, d, e, f, g, img, h) {
    super(a, b, c, d, e, f, g, img);

    this.color = h;
  }
  attributes() {
    return `  <img class="card-img-top" src="${this.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${this.vehicle} ${this.name}</h5>
      <p class="card-text"> ${this.price}  ${this.kilometers} 
      ${this.production} ${this.seats} ${this.fuel} ${this.color}</p>
      <a href="#" class="btn btn-primary">Calculate</a>
    </div>
    `;
  }
}

let display1 = new motorbike(
  'African Twin',
  '14200$',
  '100km',
  '2020',
  '2',
  'petrol',
  'motorbike',
  '2000',
  'img/african-twin.jpg'
);
let display2 = new car('Tesla Cybertruck', '40000$', '50km', '2025', '5', 'electrical', 'car', 'img/cyber-truck.jpg', 'silver');

for (let i of arr) {
  document.getElementById('result').innerHTML += `${i.attributes()} <br>`;
}
