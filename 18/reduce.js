const myNums = [1, 2, 3,4,5,6,7]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval   // every iteration updates acc = acc+ currval  therefoure it will be like 0 ,1,2
}, 0)

// by using arrow function 
const mybotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// reduce on array of objects 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const bill = shoppingCart.reduce((accu, curr)=>{
  return accu + curr.price
},0)

console.log(`your bill of shopping is : ${bill}`)
 