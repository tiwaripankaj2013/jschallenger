/* Q - Sort an array of numbers in descending order
Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order */
function myFunction(arr) {
  return arr.sort().reverse();
}

/* 
Q - Sort an array of strings alphabetically
Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result */
function myFunction(arr) {
  return arr.sort();
}

/* 
 Q - Return the average of an array of numbers
Write a function that takes an array of numbers as argument
It should return the average of the numbers */
function myFunction(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

/* 
Q - Return the longest string from an array of strings
Write a function that takes an array of strings as argument
Return the longest string */
function myFunction(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }
  return word;
}

/* 
Q - Check if all array elements are equal
Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise */
function myFunction(arr) {
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      res = true;
    } else {
      res = false;
    }
  }
  return res;
}

/* 
Q - Merge an arbitrary number of arrays
Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays */
function myFunction(...arrays) {
  return Array.prototype.concat.apply([], [...arrays]);
}

