// {} :- scope

let a=10
const b=20
var c=30

if(true){
    let a=100
    const b=200
    var c=300

    console.log("inside scope: ",a);
    console.log("inside scope: " ,b);
}
// var d=12

console.log(a);
console.log(b);
console.log(c);

