// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We are creating a variable "name" and setting it equal to "Dane"
// We are checking if the "name" is Mary, if so we console log "Hello, Mary"
// Otherwise we console log 'How do you do?'
// We console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We start with two variables -- 'secret' and 'code' code is set to 123
// We check if code is strictly = to 123 'secret'is set to 'super' and 'code' is set to'code multiplied by 2'
// Then we check if 'code' is > 250 'secret' would = 'duper'
// code is not greater than 250 so the console log (secret) logs 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We start with three variables -- isStudent is set to true, age is set to 34, zip is set to 55407
// We have three parameters we would like to check in the following order
// If isStudent is set to true and zip is greater than 80000 then console log 'You're on the West Coast!'
// Otherwise isStudent is set to false or age is less than 30 then console log 'What are your hobbies'
// Otherwise isStudent is set to true then console log 'Welcome to Prime!'
// alternate conditions entered console log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?')
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?');
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// FIX -colorTwo-- it is missing and not set equal to purple
// should include colorTwo = 'purple';  on the line after colorOne ='purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// Fix -logic operator- the OR operator is used instead of the AND operator
//  we should replace || with &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - comparison operator- the less than operator is used instead of the greater than
// we should replace <= with >=
// it would still console log enter because 21=21 but we want to check for 21 or greater
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
