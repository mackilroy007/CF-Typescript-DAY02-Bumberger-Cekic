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
    lidiar(){
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} 
        years old and I work as an ${this.jobTitle}.`;
    } 
    //we can chain multiple functions together
    whoAreYou(){
        return `Hello there! ${this.lidiar()}`;
    }
} 

//insert values into the class and display them
let fullName = new Person("Aaron", "Barbados", "45", "Easy Rider");
console.log(fullName.lidiar());

//extending the person class with new content
class Aaron extends Person{
    salary;
    jobLocation;
    constructor(a,b,c,d, e, f){
        super(a, b, c, d );
        this.salary = e;
        this.jobLocation = f;
    }
    whoAreYou(){
        return `${super.whoAreYou()} My salary is ${this.salary} every month and I work in a ${this.jobLocation}.`;
    }
}
let continuedFullName = new Aaron("Aaron", "Barbados", "45", "Easy Rider", "-1$", "basement");
console.log(continuedFullName.whoAreYou());
