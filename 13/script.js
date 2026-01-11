// hosting and clouser 


//-------- FULL BACKCHODI 
// HOSTING 
// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // here we dont get arror as we call it before function declaration 

function addone(num){
    return num + 1
}

// here we get error and one more thing this is called expression not function 
// due to concept of hosting 

// In JavaScript, hoisting refers to the mechanism where variable and function declarations
//  are moved to the top of their containing scope during the compilation phase, before the 
// code is executed. This allows you to use functions and variables before they are explicitly 
// defined in the code. 

addTwo(5)  //--> error prone 
const addTwo = function(num){
    return num + 2
}

// concept of clouser 

// In JavaScript, a closure is a function that remembers and can access variables from its
//  surrounding (lexical) scope, even after the outer function has finished executing. 
// This unique ability is a fundamental feature of JavaScript, enabling powerful
//  programming patterns. 


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

// //Summary of your specific example:
// two() can access username: Yes, because it is in the outer scope.
// one() can access website: No, it will cause a ReferenceError.
// Result: Calling one() will successfully print "hitesh" to the console.
// Yes, this is exactly what is meant by closure and lexical scoping.
