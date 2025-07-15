const coading=["js","py","java","ruby","html"]

// coading.forEach(function (item){
//     console.log(item);
    
// })

// coading.forEach((item)=>{
//     console.log(item);
    
// })

function printMe(item){
    // console.log(item);
    
}

coading.forEach(printMe) //we are giving fun reference


coading.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})


const myarray=[
    {
        languageName:"javascript",
        lagyageFileName:"js"
    },

    {
        languageName:"pythont",
        lagyageFileName:"py"
    },

    {
        languageName:"ruby",
        lagyageFileName:"rb"
    },
]

myarray.forEach(function(item){

    console.log(item);
    console.log(item.lagyageFileName);
    
})