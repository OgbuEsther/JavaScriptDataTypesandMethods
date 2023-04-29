//map methods

//test:Given an array of integers, create a new array in which the double of each integer in the first array is stored, and log it to the console.

const oldIntergars = [1, 2 ,3 ,4]
const getMap = oldIntergars.map((el) => el*2)
console.log(getMap)


let arr23 = [1, 2, 3, 4, 5, 6, 7, 8];
arr23.forEach((val) => console.log(val));
console.log(arr23)

let Studentss = [
    {
      physics: {
        name: "ola",
        age: 12,
      },
      chem: {
        name: "ola",
        age: 14,
      },
    },
  ];
  console.log(Studentss.map((e) => e.chem.age));

  const givenArray91 = [1, 2, 3, 4, 5, 6, 7, 8];
const reduced1 = givenArray91.reduce((acc, curr) => acc + curr);
console.log(reduced1);

const givenArray111 = [1, 2, 3, 4, 5, 6];
const givenArray121 = [1, 2, 3];
const some1 = givenArray111.every((el) => el >= 5);
console.log(some1);
