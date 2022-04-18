/* Q - Split a number into its digits
Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tipp: you might want to change the type of the number for the splitting */
function myFunction(a) {
  let arr = Array.from(String(a), Number);
  return arr;
}

/*  Q - Clear up the chaos behind these strings
It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc */
function myFunction(a, b) {
  let rev = b.split("").reverse().join("");

  let first = a.charAt(0).toUpperCase() + a.slice(1, a.length);
  return (first + rev).replace("%", "");
}

console.log(myFunction("c%ountry", "edis"));

/* - Return the next higher prime number
This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number */

function myFunction(a) {
  for (let i = 2; i < a; i++) {
    if (i % 2 == 0) {
      break;
    }
    return i;
  }
}

/* Q - Return the next higher prime number
Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y */
function myFunction(x, y) {
  while (x % y !== 0) {
    x++;
  }
  return x;
}

/* Q - Insert character after every n characters (backwards)
Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string */
function myFunction(a, b) {
  let arr = a.split('');
 for (let i = arr.length - 3; i > 0; i -= 3) {
   arr.splice(i, 0, b)
 }
 return arr.join('')
}
console.log(myFunction('1234567','.'));