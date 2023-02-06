console.log(`compilig typescript`)

//for loops
for(let i = 0; i<=10; i++ ){
    console.log(`this is a loop` , i)
}

function repeatLog(n : any){
    for(let i = 0; i<=n; i++){
        console.log(`this is another loop`, i)
    }
}

repeatLog(10)

function repeat(n : any , action:any){
    for(let i = 0; i<=n; i++){
        action(i)
}
}

repeat(10, (i:any) => console.log(i))


//map methods


//test:Given an array of integers, create a new array in which the double of each integer in the first array is stored, and log it to the console.

const givenArray = [2, 4, 6, 8]
const mappedArray = givenArray.map(el => el *2)
console.log(mappedArray)

//test2: Given an array of singular nouns, create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').

const givenArray2 = ["boy" , "girl" , "book"]
const mappedArray2 = givenArray2.map(el => el + "s")
console.log(mappedArray2)

//use for loop and map methods to create a new array that stores the triped values of each of the

//forloop
const arr = [1,2,3]

for(let x =0 ; x<arr.length; x++){
    console.log(arr[x] *3)
}

//map method
const arr2 = [1,2,3]

const givenArray3 = arr.map(el => el * 3)
console.log(givenArray3)



//FILTER METHOD
/**this  method also returns a new array when the condition set is met .... this is done by exceuting the call back on each and every element in that array
 * 
 * the call back passed to the filter function accepts the following of the three arguments: item , index , array same as the map method
 */

//test1: Given an array of cost of different products, create a new array that stores the values if the cost is less than 350

const givenArray4 = [100, 200, 300 , 400 , 500 , 600 , 900]
const filteredArray = givenArray4.filter(el => el < 350)
console.log(filteredArray)

const givenArray5 = [100, 200, 300 , 400 , 500 , 600 ,900]
const mappedArray5 = givenArray5.map(el => el <350)
console.log(mappedArray5)

// note that when a condition is set , the filter method iterates over the array and returns the true value in that array but  the map method just tells you the true values is that array but the filter prints out the true value in another array


//TEST2 : Given an array of objects with the city name and population, create an array with objects from the first array if the population of that particular city is >= 5 million.
const givenArray6 = [
    {
        city: "New York",
        population: 1000000
    },
    {
        city: "Los Angeles",
        population: 2000000
    },
    { "name": "Chicago", "population": 2695598 },
    { "name": "Houston", "population": 2100263 },
    { "name": "New Delhi", "population": 21800000 },
    { "name": "Mumbai", "population": 18400000 }
    ]

const filteredArray2 = givenArray6.filter(el => el.population >= 5000000)

console.log(filteredArray2)



//REDUCE METHOD 

/**The reduce() method creates a new array, executing the callback passed into it on every element, and outputs a single value. It does something on every element and keeps a record of the calculations in an accumulator variable and when no more elements are left, it returns the accumulator. */
const givenArray7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reducedArray = givenArray7.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(reducedArray)

const givenArray8 = [1 ,2, 3, 4]
const reduce = givenArray8.reduce((a , b) => a+ b)
console.log(reduce)

/**TEST1 :Given an array of numbers, find the sum of every element in the array, starting with 8, and log the result to the console */
const givenArray9 = [1 ,2, 3,4,5,6,7,8]
const reduced = givenArray9.reduce((acc , curr) => acc + curr , 8 )
console.log(reduced)

console.log(36 + 8)

/**Given an array of numbers, find the average of them, and log it to the console. */
const givenArray10 = [1,2,3,4,5]
const average = givenArray10.reduce((a , b)=> a + b) / givenArray10.length
console.log(average)


// Array.prototype.forEach
/**The forEach method is similar to the for(let i = 0; i < array.length, i++){} syntax. It loops through the array and runs the given callback for each of the elements of the array.

The callback function passed to the forEach function can accept the currentItem, index, array. */

//example
let arrs = [1,2,3,4,5,6,7,8]
arrs.forEach((val) => console.log(val))


/**Array.prototype.some and Array.prototype.every
The some method tests whether at least one element of the array complies with the given test in the callback, and returns true or false.

The callback function passed to the some function can accept the currentItem, index, array. */

//example :Given two arrays of numbers, test whether each of the arrays have at least one number that is > 5, and log the result to the console.

const givenArray11 = [1,2,3,4,5 ,6]
const givenArray12 = [1,2 , 3]
const some = givenArray11.some((el) => el >=5)
console.log(some)
const someArray = givenArray12.some((el) => el >= 5)
console.log(someArray)

/** The every method is pretty similar to the some method, but it tests whether all the elements of the array complies with the given test in the callback, and returns true or false.

The callback function passed to the every function can accept the currentItem, index, array.*/

