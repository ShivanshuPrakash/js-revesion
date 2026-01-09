let number = "235"
console.log(number)
console.log(typeof number)
// typeconversion 
let typeconv  = Number(number)
console.log(typeconv)
console.log(typeof typeconv)
// NaN case 
let a = "33abs"
console.log(a)
console.log(typeof a)
let Sa = Number(a)
console.log(typeof Sa)
// NaN
console.log(Sa)
// Type conversion of null
let score = null 
console.log(typeof score)
let target = Number(score)
console.log(typeof target)
console.log(target)

// type conversion of undefined
let b = undefined
console.log(typeof b)
let apla = Number(b)
console.log(typeof apla)
console.log(apla)

// boolean conversion 
// true -- > 1 ; false --> 0 

// speacial case 
//  when empty --> false ; when some value --> true 