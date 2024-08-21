// Arrays in JavaScript

const myArray = [1,2,3,4,5,6]

const myHeros  = ["Shakitman","Nobita", "Raju", "Chutki"]
const myArray2 = new Array(31,41,42,53,53,53)

// console.log(myArray);
// console.log(myHeros);
// console.log(myHeros[-1]);
// console.log(myHeros[0]);
// console.log(myHeros[-3]);
// console.log(myHeros[3]);
// console.log(myArr[]);


// Arrays Methods

// const myArr = [11,22,33,44,55,66]


// console.log(myArray);
// myArray.push(7)
// myArray.pop()
// console.log(myArray);

// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(44));
// console.log(myArr.includes(900));

// const newArr = myArr.join('-')


//slice  splice

const myArr = [11,22,33,44,55,66]


console.log(myArr);
const newArr = myArr.slice(1,3)
console.log(newArr);

console.log(myArr);
const newArr1 = myArr.splice(1,3)
console.log(newArr1);

console.log("Any changes :", myArr);
