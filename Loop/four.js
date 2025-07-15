const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'rubby',
    swift:"swift by apple"
}

// for (const [key,value] in myobject) {
//     console.log(key,value);
    
// }


// for (const key in myobject) {
//     console.log(key); 
// }

for (const key in myobject) {
    // console.log(`${key} is shortcut for ${myobject[key]}`); 
    
    //accessing both key and value

}

for (const key in myobject) {
    // console.log(myobject[key]);
     
    //my this we can acces the value of an object

}

const programming=['js','rb','py','java','cpp']

for (const key in programming) {
    // console.log(key);

    // 0,1,2,3,4 because array have key by default it start with 0 and it is a number
    
}

for (const key in programming) {
    // console.log(programming[key]);

    // 0,1,2,3,4   
}

const map=new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
    
} 