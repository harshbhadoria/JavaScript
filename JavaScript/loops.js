// +++++++++++++++++++++ For loops +++++++++++++++++++++

// for(let i = 0; i <= 7; i++){
//     // const element = i;
//     if (i == 5) {
//         console.log("5 is best number!!");
//         break;
//     }
//     console.log(i);
// }



// num1 = 4
// num2 = 8

// for (let i = num1; i <= num2; i++) {
//     for (let j = 1; j <= 10 ; j++) {
//         console.log(`${i}  ${j} =`, i*j);
//     }
//     console.log("!");
// }


let myArray = ["Superman", "spiderman", "sonic"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// let n = 5; // number of rows

// for (let i = 1; i <= n; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += j + ' ';
//   }
//   console.log(row);
// }




// +++++++++++++++++++++ For Of +++++++++++++++++++++




const arr = [1,2,3,4,5]

// for (const i of arr) {
//   console.log(i);
// }

const greetings = "Hello World!!"

for (const greet of greetings) {
  if(greet == " "){
    // break;
    // continue;

  }
  // console.log(`Each char is ${greet}`);

}


// +++++++++++++++++++++ Maps +++++++++++++++++++++

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('JP', "Japna")

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':-' , value);
}



// for (const [key , value ] of myObj) {
//   console.log();
// }



