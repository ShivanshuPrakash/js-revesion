// objects 

//  2 ways to construct an object 1) literal 
                                //    2)  By constructor


// literal sa jo banta ha vo singleton nhi hota object 
 const obj = {
    name: "shivanshu",
    roll : 25,
    bramch : "Information teq"
 }// object created by literal and this is not singleton object 


// object created by constructor 
// const newObj = Object.create(proto, [propertiesObject]);   // this is single ton 

// A singleton object is a design pattern in programming that ensures a class has only one instance
//  throughout the application's lifecycle, providing a single, global point of access to it


// symbol data structure ki backchodi 
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  // bc-1
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  this a one way of accesing data but by this way u can't acces full name key of object 
// console.log(JsUser["email"])  // thats why we use this method to acces it and this is recomended
// console.log(JsUser["full name"])  // see here
// console.log(JsUser[mySym])  // bc-1a

JsUser.email = "hitesh@chatgpt.com"

// .freeze() is used to freeze object 

// Object.freeze(JsUser)  // this method is used to freeze the value in an object so that no one can change it 
JsUser.email = "hitesh@microsoft.com" // this will not throw erro but no change in value 
// console.log(JsUser);  --> checking freeze method 

// adding greetings in js object and it holds a function 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// same obj ko ref krna ha to hm log this use krta ha its kinda pointer that holds the value of obj within scope 
console.log(JsUser.greeting());
console.log(JsUser.greeting); // [Function (anonymous)]  ---> ggl it by writing explain this behaviour 

console.log(JsUser.greetingTwo());

// object -2 // video number -17 
// ----------------------------------------------------------------------------------------
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// chainning in objects 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// accesing chaining objects 
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 // combining 2 objects 

const objM = { obj1, obj2 }   //--> object ke andar object aa jayga instead ak object ke andar sab kuch 
console.log(objM) 

// Correct method -1 by using Object.assign()

console.log("by using Object.assign()")
// const obj333 = Object.assign( obj1, obj2, obj4)  // {NOT A GOOD PRACTSIE }
// console.log(obj33/)
//console.log(obj1) // --> see here our obj1 got changed baby because Object.assign(target, source) ye actual syntax hota ha and iski iwaja sa sab obj1 ma change hua ha 
//  thats why best practise is to make new obj rather than changing in 1 and we do that by adding empty obj at target place 

const obj33 = Object.assign( {},obj1, obj2, obj4)  
console.log(obj33)

console.log("Method 2 by SPREAD OPERATOR")
  console.log("spread operator like we use in array to merge, same we use to merge objects here in one single objects all  keys with there value ")
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// Array of objects we generally face this while fetching data 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// method of accesing array of objects as samj le jasa 2d matrix ma acces krta ha row and then particular cloumb wase hi isma 
// bi particular row ma sa ak value ko asa fetch krta ha 
users[1].email


// console.log(tinderUser);
console.log(Object.keys(tinderUser));  // accesing all keys of object tinder user and return type is ARRAY 
console.log(Object.values(tinderUser)); // accesing all values and return type is array 

console.log(Object.entries(tinderUser)); // isma backchodi hoti ha daba kr har key value ko array ma return kr deta ha 
 

// checking a particular object having idientity or not -- return type will be a bool value
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 // video -3 on objects // De- structuring  
//KAM WALI BATT-1
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  // asa print kab tak krega  lala isliya 
// ye harkat kr di mene 
const {courseInstructor} = course
// dono cheza same ha agr terko courseInstructor likhna bhot bada lag rha ha to ye name de sakta ha jasa masterJi by adding : name
const {courseInstructor: masterJi} = course


console.log(courseInstructor);
console.log(masterJi);
// JAB hma data fetch krte ha tab hamko data asa 2 forms ma mil sakta ha ya to JSON ya fir array of objects and we simply convert them in objects beacuse hmko whi samj ata ha

   // JASON LOOK LIKE THIS  --> sab key value string ma hota ha ***T&C applied 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//  type -2 array of objects 
[
    {},
    {},
    {}
]
