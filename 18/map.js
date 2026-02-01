const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let vari = myNumers.map((num )=> num+10)  // same scope things works here also 
console.log(vari)

//CHAINING IN JAVA SCRIPT 

const newNums = myNumers
                     .map((num)=> num*10)  // here we get array as 10,20,30,40....
                     .map((nums)=> nums+1)  // the new array is passed here so operions performed will be like 10+1 =11 ......
                    .filter((value) => value==51)   // this is called chaining 

console.log(newNums)


// Key Differences

// Feature             	             map()	                                                                 filter()
// Primary Purpose	:Transformation Change every element in the array.	       Selection: Keep only elements that meet a certain condition.

// New Array Length	:Always the same length as the original array.	           Usually smaller; contains only elements that passed the test.

// Callback Return	:Returns the new value for that element.	               Returns a boolean (true to keep, false to discard).
