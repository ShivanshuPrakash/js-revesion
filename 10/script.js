// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // array ke starting ma element ko push kr deta ha 
// myArr.shift()    // array ke satating element ko pop kr deta ha 

// console.log(myArr.includes(9));   // return true/false 
// console.log(myArr.indexOf(3));    // if present then will return the index of element if not then return -1

const newArr = myArr.join()   

console.log(myArr);
console.log( newArr); // yha type change ho gya ha that is "string"
console.log(typeof newArr)


// slice, splice
// 1st difference that slice ma last wala element include nhi hota --> basic ans 
// eg - 1,3 ma 3rd  index wala element include nhi hoga 

// splice ma last wala element include hota ha 
// eg 1,3 ma 3rd index wala element inculde hoga 


// 2nd difference .
// in slice actual array ma koi change nhi ata 
// but in splice actual array  ma change ata ha 
// eg - in slice if we do 1,3 then array remain same but in splice we do ith the actual array become this  [ 0, 4, 5 ]
// i mean 1,3 index element cut ho jayge --> see output --> advance ans 
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


console.log('array -2nd part ')
console.log('array -2nd part ')
console.log('array -2nd part ')
console.log('array -2nd part ')
console.log('array -2nd part ')
console.log('array -2nd part ')
console.log('array -2nd part ')


// array video - 2  // actual video number -15 

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // yha ye dikkat ha isna new elemet jp push kiya ha vo ak array ha to array  ke andar array aa gya aha 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  // due to jo upper push wali harkat ha uski waja sa asa abb element retrive krna prega 

// const allHeros = marvel_heros.concat(dc_heros)  // this will return new array having mix elements not like push type wr did 
// console.log(allHeros); 

// spread operators 
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  //array ke andar array mil jaye to 

const real_another_array = another_array.flat(Infinity)  //  we use flat till point like i can write 4,5 and infinity also to give new array having all array ke andar array in just one array 
console.log(real_another_array);

// methoda used during time of data scraping means jab ham data ko nikla rhe ho and vo alag form ma ho like node and we want to have it in array form 

// isArray()--> is used to check is the data is in array form or not 

console.log(Array.isArray("Hitesh")) // checking "Hitesh" is this array 
// we use Array.from()  -> to convert data into a array 

console.log(Array.from("Hitesh"))  // now converting it to a array 
console.log(Array.from({name: "hitesh"})) // interesting case 
// actually yha samj nhi ata isko ki keys ka array bana kr du ya fir elements ka array bana kr du to ye sirf ak empty array return kr deta ha 

let score1 = 100
let score2 = 200
let score3 = 300
let str = " array making "
// Array.of() -> we use this to create a new array from a variable number of arguments
console.log(Array.of(score1, score2, score3, str));  // yha dhek number of argumnets ko hamne change kr diya ha array ma 