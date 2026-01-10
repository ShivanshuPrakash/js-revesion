// Strings
// string interpolation 
const gmail = "shivanshuprakash02@gmail.com"
// use of backticks 
console.log(`Hello my name is Shivanshu and  i am very smart my g-mail is ${gmail} you can contact me here`)

// string is array of characters 

// functions of strings 
// toUpperCase
// length 
let name = 'shivanshu'
console.log(name.charAt(7));

console.log(name.indexOf('s')); //--> give me 1st possible index 


// imp method 
 const metOne = name.substring(0,5)
 console.log(metOne)

 const metTwo = name.slice(-6,8) // negative value means start from end 
 console.log(metTwo)

 const metThree = "      S     H       I       V         "
console.log(metThree.trim())   // --> remove staring and ending space

const metFour = " S  h   i  v   77"
console.log(metFour.replace('77', ' :) '))
console.log(metFour.replace('77', ' :) '))
console.log(metFour.replace('77', ' :) '))
console.log(metFour.replace('77', ' :) '))

console.log(metFour.includes(' :) '))
console.log(metFour.includes('   77'))  // equal spacing 


// strings to array 
name = 'shiv,ansh,hu'
console.log(name.split(','))