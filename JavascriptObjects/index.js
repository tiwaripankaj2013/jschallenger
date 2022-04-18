/* 
Q - Merge two objects with matching keys
Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
It should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e' */
function myFunction(x, y) {
  let res = {};
  Object.keys(x).map((item) => {
    let merge = { ...x[item], ...y[item] };
    res[item] = merge;
  });
  return res;
}

console.log(myFunction({ a: 1, b: 7, c: 3 }));
