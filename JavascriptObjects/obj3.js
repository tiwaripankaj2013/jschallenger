/* 
Q - Extracting information from objects
Write a function that takes an object as argument containing properties with personal information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in */
function myFunction(obj) {
  return;
}

/*
Q - Add property to each object in array
Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tipp: try not to mutate the original array */
function myFunction(arr, str) {
  arr.map((item) => {
    item.continent = str;
  });
  return arr;
}
/* 
Q - Convert array to object with counter
Write a function that takes an array of numbers as argument
Convert the array to an object
It should have a key for each unique value of the array
The corresponding object value should be the number of times the key occurs within the array */
function myFunction(a) {
  return;
}
