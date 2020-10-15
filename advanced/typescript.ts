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
class Motorbike extends Vehicles {
  extraprice;
  constructor(a, b, c, d, e, f, g, h, img) {
    super(a, b, c, d, e, f, g, img);
    this.extraprice = h;
  }
  attributes() {
    return ` 
    <div class="card col-md-6">
      <img class="card-img-top h-50" src="${this.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${this.vehicle}: ${this.name}</h5>
        <p class="card-text"> Base price: ${this.price} <br> Millage: ${this.kilometers} <hr>
            Production year: ${this.production} <br> Number of seats: ${this.seats} <br> Fuel type: ${this.fuel}</p>
        <a href="#" class="btn btn-primary">Calculate</a>
      </div> <br>
    </div>
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
    return `  
    <div class="card col-md-6">
      <img class="card-img-top h-50" src="${this.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${this.vehicle}: ${this.name}</h5>
        <p class="card-text"> Base price: ${this.price} <br> Millage: ${this.kilometers} <hr>
            Production year: ${this.production} <br> Number of seats: ${this.seats} <br> Fuel type: ${this.fuel}</p>
        <a href="#" class="btn btn-primary">Calculate</a>
      </div>
    </div>
    `;
  }
}

//price calculation
priceCalc(){
  if (this.vehicle == "Motorbike"){
    let displayPrice1 = this.price * 2;
    console.log(displayPrice1);
  } else {
    let displayPrice2 = this.price;
    console.log(displayPrice2);
  }
  console.log(displayPrice2);
};

let display1 = new Motorbike(
  'African Twin',
  '14200$',
  '100km',
  '2020',
  '2',
  'petrol',
  'Motorbike',
  //2000 is the extra price, which is used to calculate the final price
  '2000',
  'img/african-twin.jpg'
);
let display2 = new car('Tesla Cybertruck', '40000$', '50km', '2025', '5', 'electrical', 'car', 'img/cyber-truck.jpg', 'silver');

for (let i of arr) {
  document.getElementById('result').innerHTML += `${i.attributes()} <br>`;
}
