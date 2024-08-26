// Control Flow in JavaScript


//+++++++++++++++++ if - else +++++++++++++++++

let a =5
let b ="5"


// if (a != b) {
//     console.log("Not checking types");
// }
// else if (a == b) {
//     console.log("Phir nhi pata kya hua!!"); 
// } else {
//     console.log("Checking Datatypes!!"); 
// }


// const balance = 1000

// if (balance < 500) {
//     console.log("less than");

// } else if (balance < 750) {
//     console.log("less than 750");
    
// }else if (balance <= 1000) {
//     console.log("1000 hai !!!!");
    
// }


const userLoggedIn = true
const debitCard = false

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy courses!");
// }

// if (userLoggedIn || debitCard) {
//     console.log("Allow to buy courses!");
// }



//+++++++++++++++++ Switch Case +++++++++++++++++




// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const months = 5

// switch(months){
//     case 1 :
//         console.log("January");
//         break;
//     case 2 :
//         console.log("February");
//         break;
//     case 3 :
//         console.log("March");
//         break;
//     case 4 :
//         console.log("April");
//         break;
//     case 5 :
//         console.log("May");
//         break;
//     case 6 :
//         console.log("June");
//         break;
//     default:
//         console.log("Pata nhi kya hai!!");
//         break;
// }


//+++++++++++++++++ truthy or falsey Value +++++++++++++++++

//  <===============<:>~

// false values
// ------------> false, 0, -0, BigIn 0n, "", null, undefined, NaN

// Truthy values
// ------------> "0", 'false', " ", [], {}, function(){}

// const userEmail = []

// if(userEmail.length == 0){
//     console.log("Array is empty!");
    
// }

// const emptyobj = {}

// if(Object.keys(emptyobj).length == 0){
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 23
// val1 = undefined ?? 54
// val1 = null ?? 10 ?? 32

// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice =100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");
;








































