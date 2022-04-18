/* 
Q - Accessing object properties one
Write a function that takes an object with two properties as argument
It should return the value of the property with key country */
function myFunction(obj) {
  return obj.country;
}

console.log(myFunction({ continent: "Asia", country: "Japan" }));

/* 
Q - Accessing object properties two
Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tipp: you might want to use the square brackets property accessor */
function myFunction(obj) {
  return obj["prop-2"];
}

/* 
Q - Accessing object properties three
Write a function that takes an object with two properties and a string as arguments
It should return the value of the property with key equal to the value of the string */
function myFunction(obj, key) {
  return obj[key];
}

/* 
Q - Check if property exists in object
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise */
function myFunction(a, b) {
  return a.hasOwnProperty(b);
}

/* 
Q - Creating Javascript objects one
Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object */
function myFunction(a) {
  return { key: a };
}

/*
Q - Creating Javascript objects two
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object */
function myFunction(a, b) {
  return { [a]: b };
}

/* 
 Q - Creating Javascript objects three
Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object */
function myFunction(a, b) {
  let res = {};
  for (let i = 0; i < a.length; i++) {
    res[a[i]] = b[i];
  }
  return res;
}
console.log(myFunction(['a','b','c'],[1,2,3]));


