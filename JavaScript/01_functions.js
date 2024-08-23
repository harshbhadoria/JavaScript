// Functions in JavaScript

// function SayMyName(){
//     console.log(" ---- ");
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("S");
//     console.log("H");
    
// }

// console.log("H");
// console.log("A");
// console.log("R");
// console.log("S");
// console.log("H");

// SayMyName()

// function addTwoNumber(num1, num2){
//     return num1 + num2
// }

// console.log(addTwoNumber("a",6));


function loginUserMessage(username = "Poplu"){
    if(!username){
        return `User does not exist!!`
    }
    else{
        return `${username} Just logged in`
        // console.log("User does not exist!!");
        
    }
}
 
// console.log(loginUserMessage("Harsh"));
// console.log(loginUserMessage("Harsh"));


function calculateCaretPrice(...num1){
    return  num1
}

// console.log(calculateCaretPrice(43,89,78));

const user = {
    username : "Harsh",
    price : 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);   
}

// handleObject(user)


const myNewArray = [200, 100, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([2,5,4,6,21,56]));










