// Converting a string into number-
try{
    function convertToNumber(strings){
    console.log(Number(strings));
}
convertToNumber("123");
}
catch{
    console.log("Invalid number");
}


// Building robust functions-
try{
class GetPerson{

     constructor(n,a){
this.name = n.toString();
this.age = a.toString();
     }
}
let details = new GetPerson("Tulsi",23);
console.log(details);
}
catch{
console.log("Error: Invalid Parameter Type");
}


// Car description class-
class Car{
    company = "skoda";
    model = "rapid";
    year = 2022;

    getDescription(){
        console.log("This is a " + this.year +" "+ this.company+" " + this.model + "." );
    }
}
const p = new Car();
p.getDescription();

// Employee Class Challenge-
class Employee{
    name = "Tulsi Gupta";
    position = "Web Developer";
    salary = "2 lakh"

    getSalary(){
        console.log("Salary of"+ " " + this.name + " " + "is" + " " +this.salary);
    }
}

let details = new Employee();
details.getSalary();


// Person class with default values-
class Person{
    constructor(n = "unknown" , a = 0){
        this.name = n;
        this.age = a;
    }
    getDetails(){
        console.log("Person's name is:" + " " +this.name+ " " + "and age is:"+ " "+ this.age);
    }
}
const person1 = new Person("Tulsi",23);
const person2 = new Person();
person1.getDetails();
person2.getDetails();


// Static method for adding two numbers-
class Calculator{
    static add(a,b){
        let sum = a+b;
        console.log(`Sum will be: ${sum}`);
    }
}
Calculator.add(7,3);


// Password Checker-
class User{
    #password;
    constructor(n,pass){
        this.name = n;
        this.#password = pass;
    }
    get passGet(){
        console.log(this.#password);
    }
    set passSet(newPassword){
if(this.#password.value >= 8 && this.#password.includes(toUpperCase) && this.#password.includes(Number)){
   this.#password = newPassword;
}else{
    console.log("Password must be atleast 8 characters long and must contain atleast one number and one uppercase letter.");
}
    }
}
const userpassword1 = new User("Tulsi", "Password123");
const userpassword2 = new User("Shubhi", "Password");
userpassword1.passGet;
userpassword2.passSet = this.pass;


// Adding a method to a prototype-
let student = {
    name : "Mithun"
}
Object.prototype.mithun;
function mithun(){
    console.log(`Hello, student is ${student.name}`);
}
mithun();


// Check the presence using closures-

array1 = [1,2,3,4,5,6,7];

function arrayFunction(num){
console.log(Array.isArray(array1));
}
arrayFunction(6);


let product = [
    {
name:"Shirts",
category:"Clothing"
    },
    {
     name:"Pants",
     category: "Clothing"
    },
    {
        name:"Hat",
        category:"Accessories"
    },
    {
        name: "Sunglasses",
        category: "Accessories"
    }
]
let newArray = product.filter(function(values){
   return values.category == "Clothing";
})
console.log(newArray);

