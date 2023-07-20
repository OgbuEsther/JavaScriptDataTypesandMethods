//trim 
/**removes the white spaces at the begining and ending of a sting  */
const whiteSpaces = " i am a software developer"
console.log(whiteSpaces.trim())

//STARTS WITH
/**Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false */

const start = "this is testing"
console.log(start.startsWith("this"))

//ENDS WITH
/**Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false. */

const end = "this is also testing "
console.log(end.endsWith(" "))

//charat 
/**Returns the character at the specified index. */
const zero = "this is testing"
console.log(zero.charAt(0))

//charCodeat
const codeAT = "this is testing"
console.log(codeAT.charCodeAt(1))

const CodeAt = "ABCDE"
console.log(CodeAt.charCodeAt(0))

const CodeAt1 = "abcde"
console.log(CodeAt1.charCodeAt(0))

/**NOTE :    the difference between between chatAT and charCodeAt is charAt takes a number(the index position) and return the value of that index position 
 * while charCodeAt takes a number but returns a unicode of the value  and return value differs at different case (upper case and lowercase)
 */


//AT
const test = "this is testing string methods"
console.log(test.at(-2))

const zero1 = "this is testing string methods"
console.log(zero1.charAt(-2))
/**the difference between AT and CHARAT is AT can take a negative integar (and it counts from behind) but the CHARAT can't take a negative integar at an argument */

//

const test1 = "This is testing string methods"
console.log(test1.includes("t" ,0))






//SEARCH STRINGS METHODS 


/*

*/