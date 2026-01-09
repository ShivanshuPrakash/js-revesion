// Type Conversion:-
// > from to Numbers:
//  "33" => 33
//  "33abc" => NaN
//  true => 1; false => 0

// > from to Boolean:
//   1 => true; 0 => false;
//   NaN => false;
//   "" => false;
//   "hitesh" => true;

// >convert during operations
// =>if string is written first then convert all after it to string:
//               "2" + 2 + 2 = 222
//                "1" + 2 = 12
// =>if string comes after then the conversion occurs at last 
//                2 + 2 + "2" = 42
//                1 + 1 + "2" + 2 + 1  = 2221


// Questions 
console.log("2" > 1); // true 
console.log("02" > 1)  // true 

// Special Checking 
 console.log(null > 0);   //f
 console.log(null == 0);   //f
 console.log(null >= 0)    //t
 
 console.log(undefined == 0);  //f
 console.log(undefined > 0);  //f
 console.log(undefined < 0);   //f
 
 // === {Strict checking }
 
 console.log("2" === 2);  //f