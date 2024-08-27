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




// +++++++++++++++++++++ For In Loop +++++++++++++++++++++




const myObj = {
  js : 'JavaScript',
  cpp : 'C++',
  rb : 'ruby',
  swift : 'Swift by Apple'
}

// for (const key in myObj) {
//   if (Object.prototype.hasOwnProperty.call(myObj, key)) {
//     const element = myObj[key];
//     console.log();
    
//   }
// }

for (const key in myObj) {
  // console.log(`${key} shortcut is for ${myObj[key]}`);
}

// const programming = ["java", "js", "cpp","rb","py"]

// for (const key in programming) {
//   // console.log(programming[key]);
// }


// for (const key in map) {
//   console.log(key)
// }


// +++++++++++++++++++++ For each loop +++++++++++++++++++++

const coding = ["java", "js", "cpp", "rb", "py"]

// coding.forEach( function (val) {
//   console.log(val);
  
// } )

// coding.forEach( (element) => {
//   console.log(element);
// });

// function printMe(item){
//   console.log(item);
// }

// coding.forEach(printMe())


// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr);
// } )


const myCoding = [
  {
    languageName : "javaScript",
    languageFileName : "js"
  },
  {
    languageName : "Java",
    languageFileName : "java"
  },
  {
    languageName : "Python",
    languageFileName : "py"
  }
]

myCoding.forEach( (item) => {
  console.log(item.languageName);
  
} )


