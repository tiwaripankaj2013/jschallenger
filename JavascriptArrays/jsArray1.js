/* Q - Get nth element of array 
Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array */
function myFunction(a, n) {
  for (let i = 1; i <= a.length; n+i) {
   return a[i-1];
  }
  
}

console.log(myFunction([1,2,3,4,5,6,7,8,9,10],3));

/* 
Q - Remove first n elements of an array
Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result */
function myFunction(a) {
  a.splice(0, 3);
  return a;
}
console.log(myFunction([1,2,3,4]));

/* 
Q - Get last n elements of an array
Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array */
function myFunction(a) {
  return a.slice(-3);
}

/* 
 Q - Get first n elements of an array
Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array */
function myFunction(a) {
  return a.slice(0, 3);
}

/* Q  - Get first n elements of an array 
Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a */
function myFunction(a, n) {
  return a.slice(-n);
}

/* 
Q - Remove a specific array element
Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array */
function myFunction(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      a.splice(i, 1);
    }
  }
  return a;
}


/* 
Q - Count number of elements in JavaScript array
Write a function that takes an array (a) as argument
Return the number of elements in a */
function myFunction(a) {
  return a.length;
}

/* 
Q - Count number of negative values in array
Write a function that takes an array of numbers as argument
Return the number of negative values in the array */
function myFunction(a) {
  let count = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      count += 1;
    }
  }
  return count;
}