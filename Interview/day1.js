console.log("---- VAR EXAMPLE ----");

// Declaration
var a;
console.log("After declaration:", a); // undefined

// Initialization
a = 10;
console.log("After initialization:", a); // 10

// Reassignment
a = 20;
console.log("After reassignment:", a); // 20

// Re-declaration
var a = 30;
console.log("After redeclaration:", a); // 30


console.log("\n---- LET EXAMPLE ----");

// Declaration
let b;
console.log("After declaration:", b); // undefined

// Initialization
b = 10;
console.log("After initialization:", b); // 10

// Reassignment
b = 20;
console.log("After reassignment:", b); // 20

// Re-declaration (will cause error)
// let b = 30; ❌ SyntaxError


console.log("\n---- CONST EXAMPLE ----");

// Declaration + Initialization together
const c = 10;
console.log("Initial value:", c); // 10

// Reassignment (will cause error)
// c = 20; ❌ TypeError

// Declaration without initialization (error)
// const d; ❌ SyntaxError


console.log("\n---- CONST OBJECT BEHAVIOR ----");

const obj = { name: "Astha" };
console.log("Before change:", obj);

// Mutation allowed
obj.name = "Developer";
console.log("After change:", obj);