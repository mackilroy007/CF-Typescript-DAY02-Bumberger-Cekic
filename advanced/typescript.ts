'use srtict';

let arr = [];
class Vehicles {
  name = '';
  initialPrice: number;
  kilometers = '';
  production = '';
  seats = '';
  fuel = '';
  vehicle = '';
  img = '';
  finalPrice: number;
  constructor(a, b, c, d, e, f, g, img) {
    this.name = a;
    this.initialPrice = b;
    this.kilometers = c;
    this.production = d;
    this.seats = e;
    this.fuel = f;
    this.vehicle = g;
    this.img = img;

    arr.push(this);
  }

  attributes() {
    return ` ${this.vehicle} ${this.initialPrice}  ${this.kilometers} 
       ${this.production} ${this.seats} ${this.fuel} ${this.img}`;
  }
  

  priceCalculation() {

    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    if (this.vehicle == 'car') {
      var pricing = 20;
    } else {
      var pricing = 10;
    }
    this.finalPrice = this.initialPrice * pricing;
    return formatter.format(this.finalPrice);
  }

  renderMore() {
    return ` <br> <div>here is the final price ${this.priceCalculation()}</div>`;
  }
}

class Motorbike extends Vehicles {
  extraCosts: number;
  // help agian
  constructor(a, b, c, d, e, f, g, img, h) {
    super(a, b, c, d, e, f, g, img);
    this.extraCosts = h;
  }
  attributes() {
    return ` 
    <div class="card m-1  col-lg-5">
      <img class="card-img-top mt-1" src="${this.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"><span class=" text-danger">${this.vehicle}:</span> ${this.name}</h5>
        <p class="card-text"> Base price: ${this.initialPrice} <br> Millage: ${this.kilometers} <hr>
            Production year: ${this.production} <br> Number of seats: ${this.seats} <br> Fuel type: ${this.fuel}</p>
        <a  class="btn btn-dark pricebutton text-white">Calculate</a><p class="lastPrice"> <br> <br></p>
      </div> <br>
    </div>
     `;
  }
  priceCalculation() {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    if (this.vehicle == 'car') {
      var pricing = 20;
    } else {
      var pricing =  this.extraCosts /200;
    }
    this.finalPrice = this.initialPrice * pricing;
    return formatter.format(this.finalPrice);
  }
}
class Car extends Vehicles {
  color;
  constructor(a, b, c, d, e, f, g, img, h) {
    super(a, b, c, d, e, f, g, img);

    this.color = h;
  }
  attributes() {
    return `  
    <div class="card m-1 col-lg-5">
      <img class="card-img-top mt-1" src="${this.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"><span class=" text-success">${this.vehicle}:</span> ${this.name}</h5>
        <p class="card-text"> Base price: ${this.initialPrice} <br> Millage: ${this.kilometers} <hr>
            Production year: ${this.production} <br> Number of seats: ${this.seats} <br> Vehicle color: ${this.color} <br> Fuel type: ${this.fuel}</p>
        <a  class="btn btn-dark pricebutton text-white">Calculate</a> <p class="lastPrice"> <br> <br> </p>
      </div>
    </div>
    `;
  }
}

let display1 = new Motorbike(
  'African Twin',
  14200,
  '100km',
  '2020',
  '2',
  'petrol',
  'Motorbike',
  'img/african-twin.jpg',
  '300',
);
let display2 = new Car(
  'Tesla Cybertruck',
  40000,
  '50km',
  '2025',
  '5',
  'electrical',
  'Car',
  'img/cyber-truck.jpg',
  'silver',
);

new Car(
  'Tesla Cybertruck',
  30000,
  '5000km',
  '2025',
  '5',
  'electrical',
  'Car',
  'img/cyber-truck.jpg',
  'silver',
);

new Motorbike(
  'African Twin',
  7200,
  '100km',
  '2020',
  '2',
  'petrol',
  'Motorbike',
  'img/african-twin.jpg',
  '300',
);

for (let i of arr) {
  document.getElementById('result').innerHTML += `${i.attributes()}`;
}

let btns = document.getElementsByClassName('pricebutton');

for (let i in arr) {
  btns[i].addEventListener('click', function () {
    document.getElementsByClassName('lastPrice')[i].innerHTML = arr[
      i
    ].renderMore();
  });
}
