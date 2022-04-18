/* 
Q - Sort array by object property
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array */
function myFunction(arr) {
  return;
}

/* 
Q - - Merge two arrays with duplicate values
Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array */
function myFunction(a, b) {
  let merge = [...a, ...b];
  let uniqueChars = merge.filter((item, index) => {
    return merge.indexOf(item) === index;
  });
  return uniqueChars.sort((a, b) => a - b);
}

/* 
Q - Sum up all array elements with values greater than
Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum */
function myFunction(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b) {
      sum += a[i];
    }
  }
  return sum;
}

/* 
Q - Create a range of numbers
Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max */
function myFunction(min, max) {
  let res = [];
  for (let i = min; i <= max; i++) {
    res.push(i);
  }
  return res;
}

/* 
Q - Group array of strings by first letter
Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']} */
function myFunction(arr) {
  return;
}

/* 
Q - Define an array with conditional elements
Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array */
function myFunction(arr, num) {
  if (arr.length == num) {
    arr = [0, ...arr];
  } else if (arr.length < num) {
    arr = [num, ...arr];
  }
  return arr;
}
