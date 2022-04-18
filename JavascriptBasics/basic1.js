/* 
Q Sum two numbers

Write a function that takes two numbers (a and b) as argument
Sum a and b
Return the result */

function myFunction(a, b) {
  return a + b;
}

/* 
Q Comparison operators, strict equality
 Write a function that takes two values, say a and b, as arguments
 Return true if the two values are equal and of the same type 
 */
function myFunction(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

/* 
Q Get type of value
Write a function that takes a value as argument
 Return the type of the value */
function myFunction(a) {
  return typeof a;
}

/* 
Q Get nth character of string
 Write a function that takes a string (a) and a number (n) as argument
 Return the nth character of 'a' */
function myFunction(a, n) {
  return a.charAt(n - 1);
}

/* 
Q Remove first n characters of string
Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result */
function myFunction(a) {
  return a.slice(3);
}

/* Q  Get last n characters of string
Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result */
function myFunction(str) {
  return str.slice(-3);
}

/* Q Get first n characters of string
Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result */
function myFunction(a) {
  return a.slice(0, 3);
}

/* Q  Extract first half of string
Write a function that takes a string (a) as argument
Extract the first half a
Return the result */

function myFunction(a) {
  let lengthhalf = a.length / 2;
  return a.slice(0, lengthhalf);
}

/* Q Return the percentage of a number
Write a function that takes two numbers (a and b) as argument
Return b percent of a */
function myFunction(a, b) {
  return (b * a) / 100;
}

/* Q - Basic JavaScript math operators

Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tipp: mind the order */

function myFunction(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}

/* Q - Check if a number is even
Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false */
function myFunction(a) {
  if (a % 2 == 0) {
    return true;
  }
  return false;
}

/* 
 Q - How many times does a character occur?
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b */

function myFunction(a, b) {
  let a = a.split("");
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b) {
      res += 1;
    }
  }
  return res;
}
