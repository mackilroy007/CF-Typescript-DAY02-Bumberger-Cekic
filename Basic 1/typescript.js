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
    Person.prototype.lidia = function () {
        return "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " \n        years old and I work as a " + this.jobTitle + ".";
    };
    //we can chain multiple functions together
    Person.prototype.whoAreYou = function () {
        return "Hello there! " + this.lidia();
    };
    return Person;
}());
//insert values into the class and display them
var fullName = new Person("Aaron", "Barbados", "45", "Easy Rider");
console.log(fullName.lidia());
//extending the person class with new content
