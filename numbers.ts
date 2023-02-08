//JAVASCRIPT NUMBER METHODS

//toString
//return a number as a string

const x = 123;


console.log(`string value` ,(100 + 23).toString())
console.log(x.toString());

//The toExponential() Method
/**toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point: */

let y = 9.656;
y.toExponential(2);
y.toExponential(4);
y.toExponential(6);

console.log(y.toExponential(6));

//The toFixed() Method
/**toFixed() returns a string, with the number written with a specified number of decimals: */

let z = 9.656;
z.toFixed(0);
z.toFixed(2);
z.toFixed(4);
z.toFixed(6);

console.log(z.toFixed(2));

//this is for getting the significand of a number and round them up based on the value passed in the brackets
//note : the toFixed() method is best for working with money

//The toPrecision() Method
/*toPrecision() returns a string, with a number written with a specified length */

let i = 9.656;
i.toPrecision();
i.toPrecision(2);
i.toPrecision(4);
i.toPrecision(6);
console.log(i.toPrecision(2));
//this is for getting the rounding of a number based on the value passed in the brackets
//note toPrecision() takes from number 1-10 and can't accept 0 but the toFixed() method can accept 0


//The valueOf() Method
/*valueOf() returns a number as a number. */

let xx = 123;
xx.valueOf();
(123).valueOf();
(100 + 23).valueOf();
console.log(xx.valueOf());

//while toString() returns a string valueOf returns a number