console.log(c)
var c= 20
var b=10
console.log(b+c);

console.log(a);
var a = 10;

sayHi();

function sayHi() {
  console.log("Hello");
}


let val1=10
let val2= 5

function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)

// console.log("result 1 value",result1=addNum(val1,val2))


function getVal() {
  console.log("getVal chala");
  return 10;
}

function add(a, b) {
  console.log("add chala");
  let d=a+b;
  return d;
}
add(getVal(), 5)

// console.log(add(getVal(), 5));
