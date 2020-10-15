'use srtict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(b, c, d, e, f, g) {
        this.price = '';
        this.kilometers = '';
        this.production = '';
        this.seats = '';
        this.fuel = '';
        this.vehicle = '';
        this.price = b;
        this.kilometers = c;
        this.production = d;
        this.seats = e;
        this.fuel = f;
        this.vehicle = g;
        arr.push(this);
    }
    Vehicles.prototype.attributes = function () {
        return " " + this.vehicle + " " + this.price + "  " + this.kilometers + " \n       " + this.production + " " + this.seats + " " + this.fuel;
    };
    return Vehicles;
}());
var motorbike = /** @class */ (function (_super) {
    __extends(motorbike, _super);
    function motorbike(b, c, d, e, f, g, h) {
        var _this = _super.call(this, b, c, d, e, f, g) || this;
        _this.extraprice = h;
        return _this;
    }
    motorbike.prototype.attributes = function () {
        return " <img class=\"card-img-top\" src=\"./img/african.twin.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">" + this.vehicle + "</h5>\n      <p class=\"card-text\"> " + this.price + "  " + this.kilometers + " \n      " + this.production + " " + this.seats + " " + this.fuel + "</p>\n      <a href=\"#\" class=\"btn btn-primary\">Calculate</a>\n    </div> <br>\n     ";
    };
    return motorbike;
}(Vehicles));
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(b, c, d, e, f, g, h) {
        var _this = _super.call(this, b, c, d, e, f, g) || this;
        _this.color = h;
        return _this;
    }
    car.prototype.attributes = function () {
        return "  <img class=\"card-img-top\" src=\"\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">" + this.vehicle + "</h5>\n      <p class=\"card-text\"> " + this.price + "  " + this.kilometers + " \n      " + this.production + " " + this.seats + " " + this.fuel + " " + this.color + "</p>\n      <a href=\"#\" class=\"btn btn-primary\">Calculate</a>\n    </div>\n    ";
    };
    return car;
}(Vehicles));
var display1 = new motorbike('10', '100', '99', '2', 'petrol', 'motorbike', '2000');
var display2 = new car('10', '100', '99', '2', 'benzin', 'car', 'blue');
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementById('result').innerHTML += i.attributes() + " <br>";
}
