// function test(){
//   console.log(a);
//   let a = 20;
// }

// function test(){
//   try {
//     console.log(a);
//   } catch(e) {
//     console.log("Error:", e.message);
//   }
//   let a = 20;
// }

// test();

// var a = 10;

// function test() {
//   console.log(a);
//   a = 20;
//   console.log(a);
//   var a = 30;
//   console.log(a);
// }

// test();


// var a = 10;

// function test() {
//   a = 20;
// }

// test();

// console.log(a);

// function test() {
//   var a = 50;
// }

// test();
// console.log(a);

// var a = 10;

// function test() {
//   console.log(a);
//   a = 20;
//   console.log(a);
//   var a = 30;
//   console.log(a);
// }

// test();


// var a = 5;

// function test() {
// //   console.log(a);
//   var a = 10;
// }

// test();

// console.log(a);


// var a = 1;

// function test() {
//   console.log(a);}


// var a = 1;

// function test() {
// }

// test();

// console.log(a);


// case1

// var a = 1;

// function test() {
//   console.log(a);
// }

// test();

// var a = 10;

// function test() {
//   console.log(a);

//   if (true) {
//     var a = 20;
//   }

//   console.log(a);
// }

// test();

// console.log(a);


// var a=20
// function test(){
//     // var a=20
//     console.log(a);
    
// }
// test()
// // var a=20


var a = 10;

function test() {
  console.log(a);

  var a = 20;

  function inner() {
    console.log(a);
  }

  inner();
}

test();
console.log(a);