 const user = {
    username : "Harsh",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function (data) {
        console.log(`Got user Details from database ${data}`);
        console.log(`Got user Details from database ${this.username}`);
        console.log(this);

    }
}

// console.log(user.username);
// console.log(user.getUserDetails("From Kalyug"));
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("harsh","12",true)
const userTwo = new User("RajuNaan",11,false)

console.log(userOne.constructor)
console.log(userTwo.constructor)