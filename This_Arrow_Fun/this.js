const user={
    username:"Astha",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to Web development journey`);
        // console.log(this);
        
        
    }
}

user.welcomeMessage()
user.username="Astha Bhardwaj"
user.welcomeMessage()
console.log(this); //{} remember for interview this is output is diff in browser (window)



//++++++++++++++

// const person = {
//   name: "Astha",
//   function() {
//     console.log("Hello, " + this.name);
//   }
// };
// person.function();  // Output: Hello, Astha


// ❌ No, greet() {} is not a valid function syntax outside an object.
// ✅ It only works inside an object as a method.


//-------------------------------------

function chai(){
    let username="mukul"
    console.log(username.this);//undefined
    
}
chai()

function chaiorcode(){
   console.log(this) //show many things   
}
chaiorcode()