// let myName = "Harsh   "
// let myChai = "Channel   "

// console.log(myName.truelength());


let myHeros = ["Loki", "Hulk", "Raju"]

let heroPower = {
    loki : "teleportation",
    hulk : "Muscle Power",
    raju : "3 baal",

    getRajuPower: function(){
        console.log(`Raju power is ${this.raju}`);
    }
}

Object.prototype.harsh = function(){
    console.log(`harsh is present in all object!`);
}

Array.prototype.heyHarsh = function(){
    console.log(`Harsh says Hello!`);
}

// // heroPower.harsh()
// myHeros.harsh()
// myHeros.heyHarsh()

const user = {
    name : "harsh",
    email : "harsh@gmail.vom"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime: true,

    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//Modern  Approch---Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode        "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"harsh".trueLength()
"RajuNaan                     ".trueLength()