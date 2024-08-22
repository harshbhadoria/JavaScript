// 02 Objects in JavaScript

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = 4321
tinderUser.name = "Raju"
tinderUser.isloggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "sime@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Harsh",
            lastname : "Bhadoria"
        }
    } 
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1 , ...obj2}


// console.log(obj3);

const user = [
    {
        id : "12IP",
        email : "ra@gmail.com"
    },
    {
        id : "21IP",
        email : "raj@gmail.com"
    },
    {
        id : "32IP",
        email : "raju@gmail.com"
    }
]
// console.log(user[2].email);
// console.log(Object.values(tinderUser));
// console.log(Object.values(user));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));
  

const course = {
    Cname : " Java in Hindi",
    price : "999",
    Cinstructor : "Harsh"
}

const {Cinstructor} = course

console.log(Cinstructor);

// {
//     "Cname" : " Java in Hindi",
//     "price" : "999",
//     Cinstructor : "Harsh"
// }