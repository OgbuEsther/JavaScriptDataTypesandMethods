//covverting variables to Numbers

/*there are 3 javasript methods that can be used to convert a variable to a number and they are not number methods but javascript global methods */


//Number() :Returns a number converted from its argument.
/*The Number() method can be used to convert JavaScript variables to numbers: */


console.log(Number(true)) //output : 1
console.log(Number(false)) //output :0
console.log(Number("20"))
console.log(Number("esther")) //output :NaN

//If the number cannot be converted, NaN (Not a Number) is returned.

//The Number() Method Used on Dates
// Number() can also convert a date to a number.

//example
console.log(Number(new Date("2023-02-07"))) //The Date() method returns the number of milliseconds since 2023-02-07


//the second global javascript number method is the parseInt() Method
/*parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned: */

console.log(parseInt("-20")) //output : 20
console.log(parseInt("years 30")) //output : NaN because the string value came before the number
console.log(parseInt(" 20.33 ")) //output : 20 it wont look at the decimals
console.log(parseInt("40years  ")) //output : 40


///the third global javascript number method is the parseFloat() Method


