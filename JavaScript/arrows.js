const user = {
    username : "Harsh",
    price : 299,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to JavaScript Course.`); 
    }
}

// user.welcomeMessage()
// user.username = "Raju"
// user.welcomeMessage()

// console.log(this);


function chai(){
    let username = "Harsh"
    console.log(this.username);   
}

// chai()


// const code = function (){
//     let username = "Harsh"
//     console.log(this.username); 
// }

const code = () => {
    let username = "Harsh"
    console.log(this); 
}

// code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>   (num1 + num2)

// console.log(addTwo(4,5));

const addTwo = (num1, num2) => ({username : "Harsh"})
console.log(addTwo(4,5));


const myArray = [2,4,5,6,7,33,6]

// myArray.forEach




















































