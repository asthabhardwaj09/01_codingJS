// array

const myArr=[1,2,3,4,5]

console.log(myArr);

const myArr1= myArr.slice(1,3)
console.log("slice ka actual value",myArr);
console.log("slice :",myArr1);


const myArr2=myArr.splice(1,3)
// console.log("splice ka actual value",myArr);
console.log("splice",myArr2);

// the main diff btw splice and slice is that splice remove the value from original array but not slice

//---------------------------------------

// Pop,push,indexof,includes,unshift,shift

// let pops=[1,2,3,4,5]
// pops.pop()
// console.log(pops);

// let pushs=[1,2,3,4,5]
// pushs.push(6)
// console.log(pushs);

// let indexs=[1,2,3,4,5]
// // check=indexs.indexOf(3)
// check=indexs.indexOf(10)
// console.log(check);

// let include=[1,2,3,4,5]
// console.log(include.includes(3));
// console.log(include.includes(0));

// let shifts=[1,2,3,4,5]
// shifts.shift()
// console.log(shifts);


// let unshifts=[1,2,3,4,5]
// unshifts.unshift(0)
// console.log(unshifts);

// pop(): Removes the last element from an array.
// push(element): Adds an element to the end of the array.
// includes(element): Returns a boolean indicating whether the element is present in the array.
// indexOf(element): Returns the index of the first occurrence of the element, or -1 if not found.
// unshift(element): Adds an element to the beginning of the array.
// shift(): Removes the first element from an array.

let myArray= new Array(1,2,3,4,5,6,7)
console.log(myArray);
