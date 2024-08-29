const coding = ["java", "js", "cpp", "rb", "py"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return (num > 4)
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )


// console.log(newNums);
// 

// const book = [
//     {
        
//     }
// ]


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums2 = myNumbers.map( (num) => num+10 )
// console.log(newNums2);


const newNums2 = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 2)
                    .filter( ( num ) => num%2 == 0)

// console.log(newNums2);


const array1  = [1, 2, 3]

const flag = 0

// const myTotal = array1.reduce(function (acc, currval) {
//     console.log((`acc: ${acc} and currval: ${currval}`));
//     return acc + currval
// }, flag )

const myTotal = array1.reduce( (acc, currval) => acc + currval, flag )


// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "Mobile Development Course",
        price : 12990
    },
    {
        itemName : "React Course",
        price : 5499
    },
    {
        itemName : "SAP Course",
        price : 25999
    },
]


const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0 )


console.log(priceToPay);























































