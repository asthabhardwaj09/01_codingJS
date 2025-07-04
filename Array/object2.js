// const tinderuser= new Object //this is singleton
// console.log(tinderuser);
const tinderusers={} //this is non singleton
tinderusers.id='123abc'
tinderusers.email="astha123@gmail.com"
console.log(tinderusers);

//object inside object

const user_detail={
    email:"astha123@gmail.com",
    username:{
        userfullname:{
            fist_name:"astha",
            last_name:"bhardwaj",
    }
}
}
// console.log(user_detail["username"])
// console.log(user_detail["username"]["userfullname"]);

const obj1={1:2,3:4}
const obj2={5:6,7:8}

// let obj3= {obj1,obj2}
// console.log(obj3);

// let obj3=Object.assign({},obj1,obj2)//(target,value if we do not use {} then all the value will go to obj1 that's why we use target)
// console.log(obj3);

const obj3={...obj1, ...obj2}
// console.log(obj3);

console.log(Object.keys(tinderusers));//will return the value in array
console.log(Object.values(tinderusers))//will return the value in array

// "JavaScript returns an array from Object.values() for convenience, so we can easily loop through it or use array methods like .map(), .forEach(), or .filter()."

// console.log(typeof tinderusers);
console.log(Object.entries(tinderusers));//array inside array

console.log(tinderusers.hasOwnProperty('email'))


// inside object there is an array
// const user=[
//     {

//     },
//     {

//     },
//     {

//     },
// ]

//-------------------------------------

// object de-structure

const customer={
    customer_name:"astha bhardwaj",
    material:"Sugar",
    shop_name:"Customatic shop"
}

// console.log(customer["material"]);
// console.log(customer.material);

//above code is correct for when we want to acces less thing but we want to access more thing it is not suitable

// const {customerInstructor}=customer
// console.log(customerInstructor);

const { customer_name,material } = customer;
console.log(customer_name);
console.log(material);

// const { customer_name,material:instructor } = customer;
// console.log(instructor);//sugar beacause can instructor only one at a time it is overide like here instructor is now gone to material.
// console.log(customer_name);


