//object.create== constructor or yahi hai singelton

//object literals

const mysym=Symbol("mykey")

const jsUser={
    name:"astha",
    // mysym:"mykey1",
    [mysym]:"mykey1",
    age:18,
    location:"salempur",
    email:"astha123@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Tuseday",'wednesday']
}

// console.log(jsUser.name);
// console.log(jsUser["age"]);
// // console.log(jsUser[age]);//age not define
// console.log(typeof jsUser["mysym"] )
// console.log(typeof jsUser[mysym])
// console.log( jsUser[mysym])
// console.log(jsUser);

jsUser.gretting=function() {
    console.log("Hello everyone");  
}
// console.log(jsUser.gretting);//[Function (anonymous)] it is a refrence

console.log(jsUser.gretting());

jsUser.gretting2=function(){
    console.log(`hello evryone my name is ${this.name}`);  
} 

console.log(jsUser.gretting2());


// jsUser.email="asthamicrosoft@gmail.com"
// console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.email="asthachatgpt@gmail.com"
// console.log(jsUser);


