// declaring a variable to store my age
const myAge = 25;

//declaring a variable to store early years
let earlyYears = 2;
earlyYears *= 10.5;

// assigning my Age - 2 to a variable
let laterYears = myAge - 2;
// multiplication of later years by 4
laterYears *= 4;

// printng earlyYears and laterYears
console.log(earlyYears ) ;
console.log(laterYears);

//creating a variable to store dog age 
let myAgeInDogYears = earlyYears + laterYears;

// assigning my name to myName 
let myName = 'Samuel Essuman'.toLowerCase();

// printing my age, my name and my dog age 
console.log(`My name is ${myName} . I am ${myAge} years old in human years which is ${ myAgeInDogYears} years old in dog years.`);