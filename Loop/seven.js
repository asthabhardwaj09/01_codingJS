const mynums =[1,2,3,3,4,4,4,5,65]

const newnums=mynums.map(function(num) {return num+10})
// console.log(newnums);

// diff btw map and filter

const newNums =mynums
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=>num>=40)

console.log(newNums);


