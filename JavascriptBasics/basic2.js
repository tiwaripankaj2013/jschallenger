/* 
 Q - How many times does a character occur?
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b */
function myFunction(a, b) {
  let arr = b.split("");
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
      res += 1;
    }
  }
  return res;
}

/* Q - Check if a number is a whole number 
Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false */
function myFunction(a) {
  return Number.isInteger(a);
}
/* solution 2*/
function myFunction(a) {
  return a - Math.floor(a) === 0;
}
/* Q - Multiplication, division, and comparison operators
Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value */

function myFunction(a, b) {
  return a < b ? a / b : a * b;
}

/* Q - Check whether a string contains another string and concatenate
Write a function that takes two strings (a and b) as arguments
If a contains b, append b to the beginning of a
If not, append it to the end
Return the concatenation */
function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b;
}
 /* Q - Round a number to 2 decimal places
 Write a function that takes a number (a) as argument
 Round a to the 2nd digit after the comma
 Return the rounded number */
 function myFunction(a) {
  return Math.round(a * 100) / 100;
}
