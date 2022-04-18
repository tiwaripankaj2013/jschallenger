/* Q - Find the correct word by incrementing letters in alphabet 
Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word */
function myFunction(str) {
   let result = "";
   for (let i = 0; i < str.length; i++) {
     let curr = String.fromCharCode(str.charCodeAt(i) + 1);
     result = result + curr;
   }
   return result;
 }
 
 console.log(myFunction("bgddrd"));
 
 
 