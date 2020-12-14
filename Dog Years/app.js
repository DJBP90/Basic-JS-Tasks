//Declaring a CONST named 'myAge' with a value of 30
const myAge = 10;
//This let variable is named 'earlyYears' with a value of 2 (this variable will be changed hence using LET)
let earlyYears = 2;
//This changes the value of earlyYears by invoking it 
earlyYears *= 10.5;
//This variable will change later! 
let laterYears = myAge - 2;
//calculate dog years accounted by laterYears
laterYears *= 4;
//This variable is assigned to both early & laterYears
let myAgeInDogYears = earlyYears + laterYears;
//This creates a variable with the name of myName and value of 'David' the method at the end makes all characters lowercase
let myName = 'David'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);