const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);  //--> now u can use string functions too 

console.log(balance.toFixed(2));  //-- used in E- commerce website give decimal upto which place 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //--> precison up which length like here we get 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//--> commas in indian style 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); try it in console 
// console.log(Math.abs(-4));  //-> gives mod value 
// console.log(Math.round(4.6));  //->  roudoff 
// console.log(Math.ceil(4.2));  //-> gives max value after roundoff
// console.log(Math.floor(4.9));  //-> gives low value after roundoff
// console.log(Math.min(4, 3, 6, 8));  //-> gives min value 
// console.log(Math.max(4, 3, 6, 8));  //-> gives max value 

console.log(Math.random());   // generate random number 
console.log((Math.random()*10) + 1);   // 0.984433  -> 9.84433 asa value ho jaygi 
console.log(Math.floor(Math.random()*10) + 1);  // 9 as print hogi min possible value 
// +1 we do to avind 0 as random value 
const min = 10   
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)