// KAM WALI BATT 
// ARROW FUNCTION AND THIS POINTER 

// ARROW FUNCTION IS GIFT OF ES6 UPDATE 
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  //hitesh , welcome to website
        console.log(this); // this will print full object 
    }
}
// ----------> sidi batt batu malik to this ka matlab hota ha current contex ko point krna isko baki sa matlab nhi 
console.log(this)  // {} --> this is fucking output  as current contex of node is empty 
// if i will run this in browser i will get window as object as that is my global or current contex agar as khali pili run kiya to 
// user.welcomeMessage()

// user.username = "sam"  // --> system update matlab abb iski value update 
// user.welcomeMessage()


// normal function with this 
function chaio(){
    let username = "hitesh"
    console.log(this.username); // ma asa functions ma use nhi kr sakta this ko 
    // console.log(this); // try this 
}
console.log("Flag-1")
chaio()

const chaiii = function () {  // function expression 
    let username = "hitesh"
    console.log(this.username);  // ma asa functions ma use nhi kr sakta this ko 
}
 console.log("Flag-2")
chaiii()

const chai =  () => {
    let username = "hitesh"
    console.log(this.username); // ma asa functions ma use nhi kr sakta this ko 
}

console.log("Flag - 3")
chai()
// --------------------------------------Arrow Function------------------------------

// () => {}
 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 ) 
// you might confuse ye kha sa aa gaya brackets that means we want to implicit this value and ye lagaya 
// bass isliya ha jasa agar kabi object return krna hua to vo to { } inma hota ha and isko lgte hi 
// hmko return word use krna hota ha pr agar nhi krna to value ko sinlge usma bound kerna ke liya ye use kr
// sakte ha example below or asa kuch jo bina return ke use kiya implicit way ma return ho  sakta ha pr usma kai values ha to ak ma bond krna ke liya 
// hm use krta ha isko 

// const addTwo = (num1, num2) => ({username: "hitesh"})  // exmple 


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()