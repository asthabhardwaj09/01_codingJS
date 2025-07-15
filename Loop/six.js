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


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter(function(bk) {
    return bk.genre === 'History';
});

userBooks = books.filter(function(bk) {
    return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);




// What happens internally:
// userBooks = books.filter(...) // genre === 'History' → Result is saved.

// Next line: userBooks = books.filter(...) // publish >= 2000 → This replaces the previous value.

// You print userBooks → It shows only the second filter's result.

//use diffrent variable to get both values
