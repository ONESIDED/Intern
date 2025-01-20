
// window.onload = function() {
//   console.log('Script loaded');
// }

// window.onbeforeunload = function() {
//   console.log('Script unloaded');
//   return "Are you sure you want to leave?";
// }

// const num = 1234;
// if (num === 1234) {
//     const grettingName = "apple";
//     var greeting = "Hello"; // U can use var here
//     let greeting1 = "Hello1";
// }
// console.log(grettingName); 
//console.log(greeting); 
//  console.log(greeting);
// var food;
// console.log("Apple", food);
// food = "fruit";
// console.log("Orange", food);

// let person1 = "abc";
// function greet() {
//     console.log(`hello ${person1}`); // U can use variable which have outside of function
//     var person2 = "xyz"; // U can`t use variable which have declared in function 
//     // and cannot use from outside of function
// }

// greet();
// console.log(person2, "Is that can load?");

// console.log("Waiting 2.5 seconds for the page to load");
// setTimeout(function() { // This is a callback function
//     console.log("Page loaded and Do this thing.");
// }, 2500);
// console.log("Page loaded last line."); // This will load first because it is not waiting for the page to load

// "use strict"; //(Typo) This will show error if you use undeclared variable 
// let x = 10;
// y = 20;
// console.log(x); 

// let count = 0;
// const myInterval = setInterval(function() {
//     console.log("This will run every 2 seconds for checking..");
//     count++;

//     if (count === 3) {
//         clearInterval(myInterval);
//         console.log("Interval cleared"); // This will run after 6 seconds
//     }
// }, 2000);

// Destructuring an array
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const [jan, feb] = months;
// // console.log(jan, feb);
// console.log(months);

// Destructuring an Object
// const person3 = {
//     "name": "John",
//     "age": 25,
//     "height": "6`0\""
// }
// const {name, age, height} = person3;
// if (true) {
//     const {age, height} = person3;
// }

// Delete a property from an object
// "use strict";
// const person4 = {
//     name: "John",
//     age: 25
// }
// delete person4; // can delete one of those properties
// //  but can`t delete the entire variable
// console.log(person4.name);

// Guess a number game
// while (true) {
//     let num = prompt("Guess a number");
//         num = Number(num);
//     const randomNum = Math.floor(Math.random() * 10);
//     if (num === randomNum) {
//         alert("You guessed it right!");
//         break;
//     } else {
//         alert("Try again!", num, " The correct number was ", randomNum);
//     }
// }

// try/catch/finally testing
// const num = 1234;
// try {
//     num.toUpperCase();
// } catch (error) {
//     console.warn("Error LOGGING", error);
// }finally {
//     console.log("This will run no matter what", "Final number is ", num);
// }
// console.log("This will run after the try/catch/finally block");


//this
// function counter() {
//     if (this.total === undefined) {
//         this.total = 1;
//     } else {
//         this.total++;
//     }
//     console.log("Running counter. Total is " ,this.total);
// }

// arrow function             // Standard function အတွက် this က div or main element ကို ရည်ရွယ်တာပါ
// const counter = () => {  //Arrow function "This" က console ရဲ့ properties ကိုဆိုလိုပြီး
//     if (this.total === undefined) {
//         this.total = 1;
//     } else {
//         this.total++;
//     }
//     console.log("Running counter. Total is ", this.total);
// }
// counter();

// class
// class MyClassName {
//     setName(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// const myClass = new MyClassName();
// myClass.setName("John", 25);
// myClass.greet();

// constructor
// class MyClassName {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
//     setName(name) {
//         this.name = name;
//     }
// }
// const myClass = new MyClassName("John", 25);
// myClass.greet();
// myClass.setName("Jane");
// myClass.greet();




// fetch
fetch('https://swapi.py4e.com/api/people/1/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })