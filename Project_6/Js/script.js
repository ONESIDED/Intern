
// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const name = document.getElementById("name"); // Fill this in 
const age = document.getElementById("age"); // Fill this in.
const dogYears = document.getElementById("dogyears"); // Fill this in. 

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here
name.innerText = 'PST'
age.innerText = '29'

function showDogYears(age) {
  // Step 3. Cast `age` as a number
  const numberAge = Number(age);
  dogYears.innerText = age * 7;
  return age * 7
}

// Step 4. Set the parameter of showDogyears()
dogYears.innerText = showDogYears('15')

// Step 5. Select all the .fake-input classes 
// and give them the class of .real-input. 
// This may take a little "googling" to find the solution, 
// but that's half of what web development is all about. 

document.addEventListener("DOMContentLoaded", () => {
    const fakeInputs = document.querySelectorAll(".fake-input");
    fakeInputs.forEach(node => {
        node.classList.remove("fake-input");
        node.classList.add("real-input");
    });
    console.log("Classes updated!");
});



// function addNumbers(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }

// const sumtotal = addNumbers(15, 17);


// function addNumbers1(greetingName, ...numbers) {
//     let total = 0;
//     for (index in numbers) {
//         total = total + numbers[index];
//     }
//     return `${greetingName}: the total is ${total}`;
// }

// const newTotal = addNumbers1("apple", 15, 17, 19, 21);
// console.log(newTotal);

// const person2 ={
//     name: "Jane",
//     age: 26,
//     height: "5`8\"",
//     address: {
//         street: "123 Main St",
//         city: "New York"
//     }
// }
// console.log(person2['name'])
// console.log(person2['address']['city'])

// const person = {
//     name: "John",
//     age: 25,
//     height: "6`0\"",
//     address: {
//         street: "123 Main St",
//         city: "New York"
//     },
//     speak: function(want="apple") {
//         console.log(`Hello, i want to get an ${want}`);
//     },
//     talk(tp = "phone") {
//         console.log(`I am talking to you on the ${tp}`);
//     }
// }
// person.talk();
// console.log(person['address']['city'])

