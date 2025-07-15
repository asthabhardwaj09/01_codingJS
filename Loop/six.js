// const coading=["js","py","java","ruby","html"]

// const value= coading.forEach(function(item){
//     // console.log(item);
//     return item
// })

// console.log(value);


const mynum=[1,2,3,4,5]

// let newmynum=mynum.filter(function(num){
//     return num>2
// })
// console.log(newmynum);

const mynewnum = [];

mynum.forEach(function(num) {
    if (num > 2) {
        mynewnum.push(num);  // ✅ push the current number
    }
});

// console.log(mynewnum);




