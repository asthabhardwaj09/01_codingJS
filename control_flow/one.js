//if

// if(condition){
     
// }

//  < less than
// > greater than

// <=, >=, == , !=, ===(also check type) !==

const balance=1000

// if (balance>500) console.log("test 1"),console.log("test 2");   implict control flow


if (balance<500) {
    // console.log("less than 500");  
}
else if(balance<750){
    // console.log("less than 750");    
}
else if(balance>200){
    // console.log("less than 2000");
}
else{
    // console.log("it is 1000");  
}

const UserLoggedIn = true
const debitcard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (UserLoggedIn && debitcard && false) {
    console.log("Allow to buy the course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow user to enter in a website");
    
}