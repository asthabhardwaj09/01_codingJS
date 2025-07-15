const myNums=[1,2,3,4]

const myTotal= myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval: ${currval}`);
    
    return acc+currval
},3)

// console.log(myTotal);


const shoppingCart=[
    {
        itemname:'js course',
        price:2999
    },
    {
        itemname:'py course',
        price:299
    },
    {
        itemname:'java course',
        price:29
    },
    {
        itemname:'ruby course',
        price:2
    }
]

const pricetopay= shoppingCart.reduce((acc,item)=> acc+item.price,0)

console.log(pricetopay);

