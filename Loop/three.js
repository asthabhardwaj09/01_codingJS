//for of

// for (const element of object) {
    
// }

arr=[1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
    
}

let greeting="hello everyone my name is astha"

for (const greet of greeting){
    // console.log(greet);
    
}

//map

const map=new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

// console.log(map); //obj

for (const [astha, bhardwaj]of map) {
    // console.log(astha,bhardwaj); //no array,obj
    
    
}

for (const key of map) {
    // console.log(key); //array

}




// normal object cannot be called by for of

// const myobject={
//     'game1':'NFS',
//     'game2':'spiderman'
// }

// for (const [key] of myobject) {
//     console.log(key);
    
    
// }
