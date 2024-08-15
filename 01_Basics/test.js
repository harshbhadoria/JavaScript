// 09-08-2024

// console.log("Hii, Harsh Bhadoria ")
// AccId = null
// AccNumber = 989898
// AccCity = "Bombay"
// // console.log(typeof AccId)
// console.table([ AccCity, AccId, AccNumber])

// 10-08-2024 -- To be Continue

// let score = NaN

// console.log(typeof score);
// let ConvertNum = Number(score)
// console.log(typeof ConvertNum);
// console.log( ConvertNum);

// let isloggedIn = 0.1

// console.log(typeof isloggedIn);


// // let boolIsLoggedIn  = Boolean(isloggedIn)
// let boolIsLoggedIn  = String(isloggedIn)
// console.log(boolIsLoggedIn);
// console.log(typeof boolIsLoggedIn);

// 11-08-2024 -- To be Continue...

let FName = "Harsh "
let LName = "Bhadoria"

FullName = FName + LName
// console.log(FullName);

// FullName = FName * LName
// console.log(1 + 2 + "3");
// console.log(true + 2.56 + 0.132);
// console.log(+3+4);

n1 = n2 = n3 = 100

// console.log(n1);
// console.log(n1++);
// console.log(++n1);
// console.log(n1--);
// console.log(--n1);

// 12-08-2024 


// console.log("2" > "12");
// console.log(3 > "12");

// console.log(91 == "a");
// console.log( "0" >= 0)

// console.log(43 < undefined);
// console.log();

// 14-08-2024 

// Datatypes In JS

// Primitive Datatype
   // 1. String
   // 2. Number
   // 3. Boolean
   // 4. Null
   // 5. Undefined
   // 6. Symbols
   // 7. BigInt

   const num = 100
   const Score = 2.4
   const Name = "Harsh"
   const Bool = true
   const empty = null
   const NoValue = undefined
   const Symbols = Symbol('Something') 
   const NewSymbols = Symbol('Something') 
   const BigNum = 495834342105n

   // console.log(Symbols == NewSymbols);
   // console.log(typeof(BigNum));  
   // console.log(typeof(empty));  
   // console.table([num, Score, Name, Bool, empty, NoValue, Symbols]);
   

// Non-Primitive Datatype (Reference Type)
   // 1. Array
   // 2. Object
   // 3. Function

   const Arr1 = [["Abhi", "Kabhi", "Nahi", "Aata", "21"],["Abhi", "Kabhi", "Nahi", "Aata", "21"]]
   // console.log(typeof Arr1);
   // console.log(Arr1);

   let myObj = {
      LineName : "harsh",
      age : 43,
      city : "Delhi" 
   }

   // console.log(typeof myObj);
   // console.log(myObj);
   
   const myFunc = function(){
      console.log("Welcome In Death Loop");
   }

   // console.log(typeof myFunc);
   // console.log( myFunc());

// 15-08-2024 -- To be Continue...

// Stack(Primitive types)  ----   Heap (Non-Primitive types)

// Stack(Primitive types) Example

   let Name1 = "Harsh"
   let Name2 = Name1

   // console.log(Name1);
   // console.log(Name2);

   Name1 = "Bhadoria"

   // console.log(Name1);
   // console.log(Name2);


   // Heap (Non-Primitive types) Example

   function swap(obj) {       
      console.log("Number Befor swap Num1 =" ,obj.Num1 ,"Num2 =" , obj.Num2);
      
      temp = obj.Num1
      obj.Num1 = obj.Num2
      obj.Num2 = temp

   console.log("Number After swap Num1 =" ,obj.Num1 ,"Num2 =" , obj.Num2);

   }

   let Num = {
      Num1 : 5,
      Num2 : 10
   }
   
   swap(Num)
   
