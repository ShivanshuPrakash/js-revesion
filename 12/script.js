// functions 
// no arguments 
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()  // as no return type i will work without variable and just by this 

// function with parameters   
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  // passing arguments 

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//  both spread and rest opereator are same they named according to there use case 
//KAM WALI BATT-2
// like here in parameters i use rest operator which simply means it will take all values and return in array type
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

// object as a parameter 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)  --> object can be passed in this way and we can creat it at that time also and pass it 
handleObject({  // created on the spot and passed to function 
    username: "sam",
    price: 399
})
 // initialized array 
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  --> passed previously initialized array 
console.log(returnSecondValue([200, 400, 500, 1000]));  // passed on the spot made array 