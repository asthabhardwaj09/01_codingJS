// function chai(){}

const chai=()=>{
    // console.log(this); //{}
    
}
chai()

const chaiorcode=()=>{
    let username="astha"
    // console.log(this.username); //undefined
    
}
chaiorcode()

//+++++++++++arrow func++++++++++++++++++++

const one=(num1,num2)=>{
    sum=num1+num2

}
one(2,3)
// console.log(sum);

// const addone=(num1,num2)=> (num1+num2)
// const addone=(num1,num2)=> num1+num2

const addone=(num1,num2)=> ({username:"radha maa"})
console.log(addone(3,4));

// arrow function cannot use this





