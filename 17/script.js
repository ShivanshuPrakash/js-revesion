// for of loop 

const arr = [1,2,3,4,5]

for (const i  of arr) {
     console.log(i);
}
const name  = "Shivanshu Prakash "
for (const n of name) {
    console.log(n);
}

// Maps 
const mappp = new Map();
// a map holds key value player and remember the insertion order of the keys
// no duplicates values in this 
mappp.set("IN" , +91 )
mappp.set("USA" , +11 )
mappp.set("AUS" , +911 )
mappp.set("IN" , +91 )

console.log(mappp) //Map(3) { 'IN' => 91, 'USA' => 11, 'AUS' => 911 }

for (const key of mappp) {
    console.log(key) // this we get complete array 
}

// Destructuring of array 
for (const [key , val] of mappp) {
    console.log(key, "and value for this ", val) 
}

// for of loop on object 

const myObject = {
    game_1  : 'NFS',
    game_2 : 'COD',
    game_3  : 'Ludo',
    game_4 : 'FF'
}
// this will  show error as myObject is not iterable by this 
// for (const its of myObject) {
//   console.log(its)    
// }
// ---------------------------------------------------------------------------------------
// new type of loop for in loop 

for(const keys in myObject){
    console.log(keys)
    // for printing values 
    console.log(myObject[keys])
}


// THIS  LOOP IS GENERALLY USED TO PRINT KEYS 
// LETS UNDERSTAND  ITS BEHAVIOUR BY PRINTING ARRAY 

const nums = ["100" , "200" , "300" , "400", "500"]

for (const key in nums) {
    console.log(key)   // we will have index of array which is kind of key for array 
}

// lets try it on map 
const map = new Map();
map.set("IN" , +91 )
map.set("USA" , +11 )
map.set("AUS" , +911 )
map.set("IN" , +91 )

for(itr in map){
    console.log(itr) 
    // NON ITERABLE 
    console.log("NON ITERABEL")
}

const coding = ["js" , "cpp" ,  "Go" , "py" , "ruby"]


// for each loop - HIGH ORDER FUNCTIONS 
// THIS ACCEPTS CALLBACK FUNCTION IN IT 
// CALL BACK FUNCTION HAVE NO NAME 
// SYNAX
coding.forEach(function(val){
     console.log(val)  // this will print all values
})  

// Now arrow function as a callback function 
// we just have to remove name of function as callback function is a function that call himself
// again and again 

// SYNTAX
// ()=>{}  FOR ARROW FUNCTION 

coding.forEach( (varr) => {
    console.log("Printing by using forEach loop + Arrow function ")
    console.log(varr)
}
)

//3rd way of printing by using forEach loop 

function printMe (lol){
    console.log(lol)
}
// note we just need to give a function refernce not to execute a function there thats 
// why we only write printMe instead of printMe()
coding.forEach(printMe)

// forEach is not limited to value its receive many things in as the argument 

coding.forEach((val , index ,  arr)=>{
    console.log("You got value , and its index , and the complete array as well")
    console.log(val ,  index ,  arr);
})


// Array of objects 
const obj  = [
    {
        language : "cpp"
    },
    {
        language : "React js",
        frameWork : "React",
        Library : "React js "
    },
    {
          Database : "MySQL",
          language : "SQL"


    }
]

// accesing it by forEach loop 
obj.forEach( (item)  =>{
    console.log(item.language)
} )