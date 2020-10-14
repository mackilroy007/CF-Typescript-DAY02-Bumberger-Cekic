'use srtict';
var arr = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(a, b, c, d, e, f) {
        this.vehicle = '';
        this.price = '';
        this.kilometers = '';
        this.production = '';
        this.seats = '';
        this.fuel = '';
        this.vehicle = a;
        this.price = b;
        this.kilometers = c;
        this.production = d;
        this.seats = e;
        this.fuel = f;
        arr.push(this);
    }
    Vehicles.prototype.attributes = function () {
        return " " + this.vehicle + " " + this.price + "  " + this.kilometers + " \n       " + this.production + " " + this.seats + " " + this.fuel;
    };
    return Vehicles;
}());
var fullName = new Vehicles('F200', 'Aud9411', 'BMW5500', 'mnA4kk', 'mnA4kk', 'mnA4kk');
var fullName1 = new Vehicles('W200', 'Aud8811', 'BMW3000', 'pAas4kk', 'pAas4kk', 'pAas4kk');
var fullName2 = new Vehicles('X204', 'Aud7411', 'BMW3400', 'gd4kk', 'pAas4kk', 'pAas4kk');
var fullName3 = new Vehicles('KTt0', 'Aud31', 'BMW5500', 'ge4kk', 'pAas4kk', 'pAas4kk');
console.table(arr);
console.log(arr[0].attributes());
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementById('result').innerHTML += i.attributes() + " <br>";
}
