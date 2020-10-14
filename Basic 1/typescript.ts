//class creation
class Person{
    firstName = "";
    lastName = "";
    age = "";
    jobTitle = "";
    //a, b, c, d represent the ammount of var needed
    constructor (a, b, c, d){
        this.firstName = a;
        this.lastName = b;
        this.age = c;
        this.jobTitle = d;
    }
    //one function is enough to be called apon when displaying
    lidia(){
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} 
        years old and I work as a ${this.jobTitle}.`;
    } 
    //we can chain multiple functions together
    whoAreYou(){
        return `Hello there! ${this.lidia()}`;
    }
} 

//insert values into the class and display them
let fullName = new Person("Aaron", "Barbados", "45", "Easy Rider");
console.log(fullName.lidia());

//extending the person class with new content
