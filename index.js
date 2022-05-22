// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

// TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test' or calling the function in console.

// DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.
// Each question below has an EXAMPLE of what would be returned if you invoke/call the function.  
// To invoke/call the function for debugging, simply console.log("testing out my function for Q#: ", functionName(anyInput)) and click the green Run button at the top of the screen.  
// You will then see the output of your called functions in the Console tab to the right of this screen.  
// Check to make sure that the output you get in your Console is the expected output.


// QUESTION 1. Write a function that takes a String as a parameter and logs that parameter to the console (hint: use console.log).

// EXAMPLE:
// console.log("testing out my function for Q1: ", logString('hello'));
//    should result in the next line appearing in your console...
// hello

function logString(String) {
  console.log(String)
}


// QUESTION 2. Write a function definition that returns today's date in unix format (https://www.unixtimestamp.com/).

// EXAMPLE:
// console.log("testing out my function for Q2: ", today());
//     should result in the next line appearing in your console...
// 1622131798770  
// NOTE: for this function, you will get a different number every second you run the function, but it should be a 13 digit number

function today() {
  return Date.now()
}


// QUESTION 3. Write a function definition that takes 2 String parameters and returns a new string that concatenates both parameters.

// EXAMPLE:
// console.log("testing out my function for Q3: ", concat('foo', 'bar'));
//     should result in the next line appearing in your console...
// foobar

function concat() {
  let h = 'Hello'
  let g = ' Goodbye'
  return `${h}` + `${g}`
}


// QUESTION 4. Write a function definition that takes a String parameter and returns that string with the first letter capitalized.

// EXAMPLE:
// console.log("testing out my function for Q4: ", capitalizeFirstLetter('bob malarky'));
//     should result in the next line appearing in your console...
// Bob malarky

function capitalizeFirstLetter(String) {
  return String.charAt(0).toUpperCase() + String.slice(1)
}


// QUESTION 5. Write a function definition that takes 2 Number parameters and returns the modulus of parameter 1 by parameter 2. 

// EXAMPLE:
// console.log("testing out my function for Q5: ", mod(13, 4));
//     should result in the next line appearing in your console...
// 1

function mod(num1, num2) {
  return num1 % num2
}

// QUESTION 6. Write a function definition that takes 2 whole Number (integer) parameters and returns their average (hint: there is no built-in average operator in JavaScript).

// EXAMPLE:
// console.log("testing out my function for Q6: ", avg(1, 10));
//     should result in the next line appearing in your console...
// 5.5

function avg(num1, num2) {
  return (num1 + num2) / 2
}

// QUESTION 7. Write a function definition that takes 2 Number parameters and returns the absolute difference between those numbers. For example, if the first parameter is smaller than the second, the first parameter will be subtracted from the second. If the first parameter is larger than the second, the second parameter will be subtracted from the first. If they are both equal, return the first parameter subtracted by the second.

// EXAMPLES:
// console.log("testing out my function for Q7: ", absoluteDifference(3, 5));
//     should result in the next line appearing in your console...
// 2
//
// OR if you pass a large then small number as arguments...
// console.log("testing out my function for Q7: ", absoluteDifference(10, 1));
// 9
//
// OR if you pass the same number as both arguments...
// console.log("testing out my function for Q7: ", absoluteDifference(7,7));
// 0

function absoluteDifference(num1, num2) {
  return Math.abs(num1 - num2)
}

// QUESTION 8. Write a function definition that takes 2 String parameters and returns the length of the longest string. If they are of equal length, just return that length.

// EXAMPLES:
// console.log("testing out my function for Q8: ", longestStringLength('supercalafragalisticexpialadoshus', 'neat'));
//     should result in the next line appearing in your console...
// 33
//
// OR if the strings have the same length...
// console.log("testing out my function for Q8: ", longestStringLength('hello', 'world'));
// 5

function longestStringLength(str1, str2) {
 if(str1.length >= str2.length) {
   return str1.length;
 } else {
   return str2.length;
 }
}



// DO NOT EDIT BELOW THIS LINE

module.exports = {
  logString, today, concat, capitalizeFirstLetter, mod, avg, absoluteDifference, longestStringLength
}