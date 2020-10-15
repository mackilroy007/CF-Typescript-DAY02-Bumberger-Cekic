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
    function Vehicles(a, b, c, d, e, f, g, img) {
        this.name = '';
        this.kilometers = '';
        this.production = '';
        this.seats = '';
        this.fuel = '';
        this.vehicle = '';
        this.img = '';
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
    Vehicles.prototype.attributes = function () {
        return " " + this.vehicle + " " + this.initialPrice + "  " + this.kilometers + " \n       " + this.production + " " + this.seats + " " + this.fuel + " " + this.img;
    };
    Vehicles.prototype.priceCalculation = function () {
        if (this.vehicle == 'car') {
            var pricing = 20;
        }
        else {
            var pricing = 10;
        }
        this.finalPrice = this.initialPrice * pricing;
        return this.finalPrice;
    };
    Vehicles.prototype.renderMore = function () {
        return " <div>here is the final price " + this.priceCalculation() + "</div>";
    };
    return Vehicles;
}());
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(a, b, c, d, e, f, g, img, h) {
        var _this = _super.call(this, a, b, c, d, e, f, g, img) || this;
        _this.extraCosts = h;
        return _this;
    }
    Motorbike.prototype.attributes = function () {
        return " \n    <div class=\"card col-md-6\">\n      <img class=\"card-img-top h-50\" src=\"" + this.img + "\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">" + this.vehicle + ": " + this.name + "</h5>\n        <p class=\"card-text\"> Base price: " + this.initialPrice + " <br> Millage: " + this.kilometers + " <hr>\n            Production year: " + this.production + " <br> Number of seats: " + this.seats + " <br> Fuel type: " + this.fuel + "</p>\n        <a href=\"#\" class=\"btn btn-primary pricebutton\">Calculate</a><p class=\"lastPrice\"></p>\n      </div> <br>\n    </div>\n     ";
    };
    return Motorbike;
}(Vehicles));
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(a, b, c, d, e, f, g, img, h) {
        var _this = _super.call(this, a, b, c, d, e, f, g, img) || this;
        _this.color = h;
        return _this;
    }
    car.prototype.attributes = function () {
        return "  \n    <div class=\"card col-md-6\">\n      <img class=\"card-img-top h-50\" src=\"" + this.img + "\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">" + this.vehicle + ": " + this.name + "</h5>\n        <p class=\"card-text\"> Base price: " + this.initialPrice + " <br> Millage: " + this.kilometers + " <hr>\n            Production year: " + this.production + " <br> Number of seats: " + this.seats + " <br> Fuel type: " + this.fuel + "</p>\n        <a href=\"#\" class=\"btn btn-primary pricebutton\">Calculate</a> <p class=\"lastPrice\"></p>\n      </div>\n    </div>\n    ";
    };
    return car;
}(Vehicles));
var display1 = new Motorbike('African Twin', 14200, '100km', '2020', '2', 'petrol', 'Motorbike', 'img/african-twin.jpg', '300');
var display2 = new car('Tesla Cybertruck', 40000, '50km', '2025', '5', 'electrical', 'car', 'img/cyber-truck.jpg', 'silver');
console.log(display1.priceCalculation());
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementById('result').innerHTML += i.attributes() + " <br>";
}
var btns = document.getElementsByClassName('pricebutton');
var _loop_1 = function (i) {
    btns[i].addEventListener('click', function () {
        document.getElementsByClassName('lastPrice')[i].innerHTML += arr[i].renderMore();
    });
};
for (var i in arr) {
    _loop_1(i);
}
