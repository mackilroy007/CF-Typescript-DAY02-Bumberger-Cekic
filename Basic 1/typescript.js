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
//class creation
var Person = /** @class */ (function () {
    //a, b, c, d represent the ammount of var needed
    function Person(a, b, c, d) {
        this.firstName = "";
        this.lastName = "";
        this.age = "";
        this.jobTitle = "";
        this.firstName = a;
        this.lastName = b;
        this.age = c;
        this.jobTitle = d;
    }
    //one function is enough to be called apon when displaying
    Person.prototype.lidiar = function () {
        return "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " \n        years old and I work as an " + this.jobTitle + ".";
    };
    //we can chain multiple functions together
    Person.prototype.whoAreYou = function () {
        return "Hello there! " + this.lidiar();
    };
    return Person;
}());
//insert values into the class and display them
var fullName = new Person("Aaron", "Barbados", "45", "Easy Rider");
console.log(fullName.lidiar());
//extending the person class with new content
var Aaron = /** @class */ (function (_super) {
    __extends(Aaron, _super);
    function Aaron(a, b, c, d, e, f) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.salary = e;
        _this.jobLocation = f;
        return _this;
    }
    Aaron.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " My salary is " + this.salary + " every month and I work in a " + this.jobLocation + ".";
    };
    return Aaron;
}(Person));
var continuedFullName = new Aaron("Aaron", "Barbados", "45", "Easy Rider", "-1$", "basement");
console.log(continuedFullName.whoAreYou());
