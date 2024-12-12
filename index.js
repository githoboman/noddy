// fetch = function used for making Http requests to fetch resources.
// (Json style data, images, files)
// simplifies asynchronous data fetching in javascript and
// used for interacting with apis to retrieve and send.
// data asynchronousnsly over the web.
//fetch ( url, {method: options})


fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then (response => response.json());
  //.then (response => console.log(response));
  //.then(data => console.log(data.weight));
  //.catch(error => console.error(error));



  /// javascript apply
  let kelvin = 0;
//celsius is similar to kelvin -the only // difference is that celsius is 273 degrees less than kelvin .
//lets convert kelvin to celsius by subtracting 273 from the kelvin variable. store the result in another variable, named celsius.
const celsius = kelvin - 273;
//Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

let fahrenheit = celsius * (9/5) + 32;

//In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.
//When you convert from Celsius to Fahrenheit, you often get a decimal number.

//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

fahrenheit = Math.floor(fahrenheit)

console.log(`the temperature is ${fahrenheit} degrees Fahrenheit`);


// second project
const myAge = 23
let earlyYears = 2 * 10.5;
 let laterYears = myAge-2;
 laterYears*=4;

  
console.log(earlyYears);
console.log(laterYears);
var myAgeInDogYears = earlyYears + laterYears;

var myName = 'AYOMIDE'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years, whicj is ${myAgeInDogYears} years old in dog years.`)


if (true) {
  console.log('This message will print!'); 
}
let sale = false
if (sale){ console.log('Time to buy!')}


10 < 12;
'apples' === 'oranges';

let hungerLevel = 7;
if (hungerLevel=7){
  console.log('Time to eat!');
}else{
  console.log('We can eat later!')
}


// logical operator
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
//
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}
//the and operator (&&)
//the or operator (||)
//the not operator, otherwise known as the bang operator (!)
//When we use the && operator, we are checking that two things are true:

//Logical operators are often used in conditional 
//Preview: Docs In JavaScript, a statement is a unit of code that performs a specific action or task.
//statements
//to ad
if (mood=== 'sleepy' && tirednessLevel > 8 ) {
  console.log('time to sleep')
}else {
  console.log('not bed time yet')
}


// truthy falsy value
let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}
 

/*0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number/*

/*
Let’s consider how non-boolean 
Preview: Docs Data types are used to classify eight fundamental values used for programming in JavaScript, including primitive and object types.
data types
, like 
Preview: Docs Loading link description
strings
 or numbers, are evaluated when checked inside a condition.

Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value.
*/


//truth falsy assignmeng


let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger



let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);