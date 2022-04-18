/* Q - Check if value is present in Set
Write a function that takes a Set and a value as arguments
Check if the value is present in the Set */
function myFunction(set, val) {
  return set.has(val);
}

/* Q - Convert a Set to Array
 Write a function that takes a Set as argument
Convert the Set to an Array
Return the Array */
function myFunction(set) {
  return Array.from(set);
}

/* 
Q - Creating Javascript Sets
Write a function that takes three elements of any type as arguments
Create a Set from those elements
Return the result */
function myFunction(a, b, c) {
   return new Set([a, b, c]);
 }

/* 
Q - Delete element from Set
Write a function that takes a Set and a value as argument
If existing in the Set, remove the value from the Set
Return the result */
function myFunction(set, val) {
   let setq = set;
   let res = setq.delete(val);
   return setq;
 }
 console.log(myFunction(new Set([1, 2, 3]), 1));


/* 
 Q - Add multiple elements to Set
Write a function that takes a Set and an array as arguments
If not already existing, add each element in the array to the Set
Return the modified Set */
function myFunction(set, arr) {
   let res = new Set(arr.concat([...set]));
   return res;
 }
 