/* 
Q - Extract keys from Javascript object
Write a function that takes an object (a) as argument
Return the sum of all object values */
function myFunction(a) {
  let sum = 0;
  for (val in a) {
    sum += a[val];
  }
  return sum;
}

/* Q - Remove a property from an object
Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b' */
function myFunction(obj) {
  let res = obj;
  obj = delete obj.b;
  return res;
}

/* 
Q - Merge two objects with matching keys
Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
It should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e' */
function myFunction(x, y) {}

/* 
Q - Multiply all object values by x
Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object */
function myFunction(a, b) {
  return;
}
/* 
Q - Swap object keys and values
Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object */
function myFunction(obj) {
  let res = {};
  Object.keys(obj).forEach((key) => {
    res[obj[key]] = key;
  });
  return res;
}

/* 
Q - Replace empty strings in object with null values
Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object */
function myFunction(obj) {
  Object.keys(obj).map((key) => {
    if (obj[key] == "" || obj[key] == " ") {
      obj[key] = null;
    }
  });
  return obj;
}
console.log(myFunction({ a: "", b: "b", c: " ", d: "d" }));
