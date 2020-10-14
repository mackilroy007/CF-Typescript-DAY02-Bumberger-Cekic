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
    function Vehicles(b, c, d, e, f) {
        this.price = '';
        this.kilometers = '';
        this.production = '';
        this.seats = '';
        this.fuel = '';
        this.price = b;
        this.kilometers = c;
        this.production = d;
        this.seats = e;
        this.fuel = f;
        arr.push(this);
    }
    Vehicles.prototype.attributes = function () {
        return "  " + this.price + "  " + this.kilometers + " \n       " + this.production + " " + this.seats + " " + this.fuel;
    };
    return Vehicles;
}());
var motorbike = /** @class */ (function (_super) {
    __extends(motorbike, _super);
    function motorbike(b, c, d, e, f, g) {
        var _this = _super.call(this, b, c, d, e, f) || this;
        _this.vehicle = g;
        return _this;
    }
    motorbike.prototype.attributes = function () {
        return " " + this.vehicle + " " + this.price + "  " + this.kilometers + " \n       " + this.production + " " + this.seats + " " + this.fuel;
    };
    return motorbike;
}(Vehicles));
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(b, c, d, e, f, g, h) {
        var _this = _super.call(this, b, c, d, e, f) || this;
        _this.vehicle = g;
        _this.color = h;
        return _this;
    }
    car.prototype.attributes = function () {
        return "  " + this.vehicle + " " + this.color + " " + this.price + "  " + this.kilometers + " \n       " + this.production + " " + this.seats + " " + this.fuel;
    };
    return car;
}(Vehicles));
var bus = /** @class */ (function (_super) {
    __extends(bus, _super);
    function bus(b, c, d, e, f, g, h) {
        var _this = _super.call(this, b, c, d, e, f) || this;
        _this.vehicle = g;
        _this.size = h;
        return _this;
    }
    bus.prototype.attributes = function () {
        return " " + this.vehicle + " " + this.size + " " + this.price + "  " + this.kilometers + " \n       " + this.production + " " + this.seats + " " + this.fuel;
    };
    return bus;
}(Vehicles));
var truck = /** @class */ (function (_super) {
    __extends(truck, _super);
    function truck(b, c, d, e, f, g, h) {
        var _this = _super.call(this, b, c, d, e, f) || this;
        _this.vehicle = g;
        _this.owner = h;
        return _this;
    }
    truck.prototype.attributes = function () {
        return "  " + this.vehicle + " " + this.owner + " " + this.price + "  " + this.kilometers + " \n       " + this.production + " " + this.seats + " " + this.fuel;
    };
    return truck;
}(Vehicles));
var display1 = new motorbike('10', '100', '99', '2', 'petrol', 'motorbike');
var display2 = new car('10', '100', '99', '2', 'benzin', 'car', 'blue');
var display3 = new bus('10', '100', '99', '2', 'diesel', 'bus', '0');
var display4 = new truck('10', '100', '99', '2', 'diesl', 'truck', 'Aaron');
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementById('result').innerHTML += i.attributes() + " <br>";
}
