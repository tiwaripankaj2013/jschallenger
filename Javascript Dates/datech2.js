/* 
Q - Check if one date is earlier than another
Write a function that takes two date instances (a and b) as arguments
It should return true if a is earlier than b
It should return false otherwise */
function myFunction(a, b) {
  if (Math.abs(a) < Math.abs(b)) {
    return true;
  }

  return false;
}

/* Q - Add n days to an existing date
Write a function that takes as argument a date instance (a) and a number (b)
It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC */
function myFunction(a, b) {
  return Math.abs(a) + b * 1000 * 60 * 60 * 24;
}


/*  Q - Calculate difference between two dates in hours, minutes, and seconds
This is a more difficult challenge
Write a function that takes two date instances as arguments
It should return an object with the properties 'hrs', 'min', and 'sec'
The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
 */

function myFunction(a, b) {
  let dif = Math.abs(a - b);
  let Totalsec = Math.ceil(dif / 1000);

  let hr = Math.floor(Totalsec / (60 * 60));
  let devMin = Totalsec % (60 * 60);
  let minute = Math.floor(devMin / 60);
  let devSec = devMin % 60;
  let second = Math.ceil(devSec);

  let res = {
    hrs: hr,
    min: minute,
    sec: second,
  };
  return res;
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
);


// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction(a, b) {
  let res;
  if (Math.abs(a - b) == 0) {
    res = true;
  } else {
    res = false;
  }
  return res;
}


