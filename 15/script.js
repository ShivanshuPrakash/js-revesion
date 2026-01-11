// Immediately invoked function 

// iska matlab jasa ki hmra program chalu ho wase hi ye start ho jaye jasa like ham constructor use krna ha class ke liya
// wase hi ha ye pure program ke liya 
 

// Immediately Invoked Function Expressions (IIFE)
 //  synatx is :  ()() o
// anonymous self-invoking function (function without name).
 (function () {
  // Code to run immediately
})();

// Why use a named IIFE?
// For self-recursion functions (calling itself repeatedly):
(function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // recursive call
})(5)


//  we  have to add parenthesis around the function to indicate that it is and IIEF
// HERE THE EXAMPLE WITHOUT PARAMETERS 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// HERE WITH PARAMETERS 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


// Application or main reason why we use 
// Avoid Polluting the Global Scope: 
// Variables inside an IIFE cannot be accessed from outside.
// matlab agar andar and bhar same name ke variable ha to bhar uss same name wale variable ke sath 
// kuch bi kro koi frk nhi prega 