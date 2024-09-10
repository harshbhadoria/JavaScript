// const promiseOne = new Promise(function(resolve, reject){
//     //Do an sync task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Asunc task is complete!');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed!!");
// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "chai", email:"bhai@gmail.xom"})
//     },1000)
// })

// promiseThree.then(function(user) {
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "harsh", password:"bhai321"})
//         }else{
//             reject('Error: Something went wrong!')
//         }
//     },100)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error);
// }).finally(() =>{
//     console.log("The promise is either or rejected");
    
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Raju", password:"bhai321"})
//         }else{
//             reject('Error: JS went wrong!')
//         }
//     },100)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUser()



// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error)=> console.log(error))





























