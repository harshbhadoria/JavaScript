// 20-08-2024
//Dates in JavaScript

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());


let getDate = new Date(2024, 2, 12)
let newDate = new Date("2025-02-12")
// console.log(newDate.toLocaleString());
// console.log(getDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newDate.getTime());

console.log(Math.floor((Date.now())/1000));

console.log(myDate.toLocaleString('default',{
    weekday : "long",
    second :    "numeric"
}));




