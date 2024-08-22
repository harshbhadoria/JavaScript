// Objects in JavaScript

// Singleton
// Object.create


// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Harsh",
    "Full Name" : "Harsh Bhadoria",
    [mySym] : "Mykey1",
    age : 23,
    city : "New Delhi",
    email : "harsh.google.com",
    isloggedIn : false,
    lastLoginDay : ["Monday","Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "harsh.microsoft.com"
// console.log(JsUser);
// Object.freeze(JsUser)
// JsUser.email = "harsh.onlyfans.com"

JsUser.greetings = function(){
    console.log("Hello From Kalyug");
}

JsUser.greetings()

JsUser.Newgreetings = function(){
    console.log(`Hello From Kalyug ${this.name}`);
}

JsUser.Newgreetings()