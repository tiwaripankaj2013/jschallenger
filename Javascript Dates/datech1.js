/* Q - Check if two dates are equal 
Sounds easy, but you need to know the trick
Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise */
function myFunction(a, b) {
  return Math.abs(a) == Math.abs(b) ? true : false;
}

/* solution 2  */

function myFunction(a, b) {
  let res;
  if (Math.abs(a - b) == 0) {
    res = true;
  } else {
    res = false;
  }
  return res;
}
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);

/* Q - Return the number of days between two dates

Write a function that takes two date instances as argument
It should return the number of days that lies between those dates */
function myFunction(a, b) {
  return Math.abs(a - b) / (1000 * 60 * 60 * 24);
}

/* Q - Check if two dates fall on the exact same day

Sounds easy, but you need to know the trick
Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise */
function myFunction(a, b) {
  let res;
  if (Math.abs(a - b) == 0) {
    res = true;
  } else {
    res = false;
  }
  return;
}
console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
