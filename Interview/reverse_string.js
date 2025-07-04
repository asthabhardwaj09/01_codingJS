// reverse string

// split('') converts the string into an array of characters.
// reverse() reverses the array.
// join('') converts the array back into a string.

function reverse_string(str){
    let converst=str.toString()
    let reversed_string= converst.split("").reverse().join("");
    return reversed_string
}
str= 123
let num= Number(str)
console.log(num);


let reversed = reverse_string(str);
console.log(reversed);


if(num === Number(reversed)) {
    console.log("isPalindrome");
}
else{
    console.log("not a palindrome");
    
}
// console.log(reverse_string(str))
//array

let nums=123
console.log(nums);

