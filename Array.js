/**
 * 
 * slice
 * splice
 * pop
 * push
 * shift
 * unshift
 * join
 * 

 */

let GlobalVariable = ["Global" , "local" , "private" , "public"]
console.log(GlobalVariable.pop())
//returns the removed item

//push
console.log(GlobalVariable.push("Static"))
//returns the length of the array

//shift
console.log(GlobalVariable.shift())
console.log(GlobalVariable.length)

//unshift
console.log(GlobalVariable.unshift("ReadOnly"))
console.log(GlobalVariable)

//toString
console.log(GlobalVariable.toString())
let me = ["name is esther"]
console.log(me.toString())


//slice
console.log(GlobalVariable.slice(0 , 2 + 1))

//inclues 
console.log(GlobalVariable.includes("Static"))


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newFruits =fruits.splice(2, 2, "Lemon", "Kiwi" , "Paw Paw");
console.log(newFruits)
//The splice() method returns an array with the deleted items:
/**The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added. */

let newFlat = [3, 2, [1, 4, [5]]] 
console.log(newFlat.flat().flat().sort())