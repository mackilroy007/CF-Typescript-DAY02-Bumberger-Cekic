'use srtict';

let arr = [];
class Vehicles {
  name = '';
  initialPrice = '';
  kilometers = '';
  production = '';
  seats = '';
  fuel = '';
  vehicle = '';
  img = '';
  finalPrice = '';
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
  renderMore() {
    return ` <div>here is the final price ${this.finalPrice}</div>`;
  }
}
class Motorbike extends Vehicles {
  extraCosts;
  constructor(a, b, c, d, e, f, g, img, h) {
    super(a, b, c, d, e, f, g, img);
    this.extraCosts = h;
  }
  attributes() {
    return ` 
    <div class="card col-md-6">
      <img class="card-img-top h-50" src="${this.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${this.vehicle}: ${this.name}</h5>
        <p class="card-text"> Base price: ${this.initialPrice} <br> Millage: ${this.kilometers} <hr>
            Production year: ${this.production} <br> Number of seats: ${this.seats} <br> Fuel type: ${this.fuel}</p>
        <a href="#" class="btn btn-primary pricebutton">Calculate</a><p class="lastPrice"></p>
      </div> <br>
    </div>
     `;
  }
  priceCalculation() {
    if (this.vehicle == 'car') {
      var pricing = 20;
    } else {
      var pricing = 10;
    }
    this.finalPrice = this.initialPrice * pricing;
    return this.finalPrice;
  }
}
class car extends Vehicles {
  color;
  constructor(a, b, c, d, e, f, g, img, h) {
    super(a, b, c, d, e, f, g, img);

    this.color = h;
  }
  attributes() {
    return `  
    <div class="card col-md-6">
      <img class="card-img-top h-50" src="${this.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${this.vehicle}: ${this.name}</h5>
        <p class="card-text"> Base price: ${this.initialPrice} <br> Millage: ${this.kilometers} <hr>
            Production year: ${this.production} <br> Number of seats: ${this.seats} <br> Fuel type: ${this.fuel}</p>
        <a href="#" class="btn btn-primary pricebutton">Calculate</a> <p class="lastPrice"></p>
      </div>
    </div>
    `;
  }
}

let display1 = new Motorbike(
  'African Twin',
  '14200$',
  '100km',
  '2020',
  '2',
  'petrol',
  'Motorbike',
  'img/african-twin.jpg',
  '300',
);
let display2 = new car(
  'Tesla Cybertruck',
  '40000$',
  '50km',
  '2025',
  '5',
  'electrical',
  'car',
  'img/cyber-truck.jpg',
  'silver',
);

for (let i of arr) {
  document.getElementById('result').innerHTML += `${i.attributes()} <br>`;
}

//price calculation
// priceCalc(){
//   if (this.vehicle == "Motorbike"){
//     let displayPrice1 = this.price * 2;
//     console.log(displayPrice1);
//   } else {
//     let displayPrice2 = this.price;
//     console.log(displayPrice2);
//   }
//   console.log(displayPrice2);
// };

let btns = document.getElementsByClassName('pricebutton');

for (let i in arr) {
  btns[i].addEventListener('click', function () {
    document.getElementsByClassName('lastPrice')[i].innerHTML += arr[
      i
    ].renderMore();
  });
}
