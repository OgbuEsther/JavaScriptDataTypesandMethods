//JAVASCRIPT NUMBER METHODS 


//toString
//return a number as a string

const x = 123
console.log(x.toString())

//The toExponential() Method
/**toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point: */


let y = 9.656;
y.toExponential(2);
y.toExponential(4);
y.toExponential(6);

console.log(y.toExponential(6))

//The toFixed() Method
/**toFixed() returns a string, with the number written with a specified number of decimals: */

let z = 9.656;
z.toFixed(0);
z.toFixed(2);
z.toFixed(4);
z.toFixed(6);

console.log(z.toFixed(4))

//note : the toFixed() method is best for working with money