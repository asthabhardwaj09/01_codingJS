const customer={
    customer_name:"astha",
    price:9
};

// function handel_object(getobject){ //to access the object from outside
//     return getobject.customer_name
// }

// console.log(handel_object(customer));

//also we can pass object through function
function handel_object(getobject){ 
    // return getobject.customer_name
    return getobject.age
}

console.log(handel_object(
    {
        customer_name:"rahul",
        age:18,
    }
))



const arr=[400,500,600]

// function handel_array(getArray){
//     // return getArray
//     return getArray[1]
// }

// console.log(handel_array(arr));


function handel_array(getArray){
    // return getArray
    return getArray[1]
}

console.log(handel_array([4,5,6]));

