'use srtict';

let arr = [];
class Vehicles {
  vehicle = '';
  price = '';
  kilometers = '';
  production = '';
  seats = '';
  fuel = '';

  constructor(a, b, c, d, e, f) {
    this.vehicle = a;
    this.price = b;
    this.kilometers = c;
    this.production = d;
    this.seats = e;
    this.fuel = f;

    arr.push(this);
  }

  attributes() {
    return ` ${this.vehicle} ${this.price}  ${this.kilometers} 
       ${this.production} ${this.seats} ${this.fuel}`;
  }
  //we can chain multiple functions together
  // whoAreYou() {
  //   return `Hello there! ${this.lidiar()}`;
  // }
}

let fullName = new Vehicles(
  'F200',
  'Aud9411',
  'BMW5500',
  'mnA4kk',
  'mnA4kk',
  'mnA4kk',
);
let fullName1 = new Vehicles(
  'W200',
  'Aud8811',
  'BMW3000',
  'pAas4kk',
  'pAas4kk',
  'pAas4kk',
);
let fullName2 = new Vehicles(
  'X204',
  'Aud7411',
  'BMW3400',
  'gd4kk',
  'pAas4kk',
  'pAas4kk',
);
let fullName3 = new Vehicles(
  'KTt0',
  'Aud31',
  'BMW5500',
  'ge4kk',
  'pAas4kk',
  'pAas4kk',
);
console.table(arr);
console.log(arr[0].attributes());
for (let i of arr) {
  document.getElementById('result').innerHTML += `${i.attributes()} <br>`;
}
