//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i===7) {
        // console.log(`${i} is the jersy number of Mahendra Singh Dhoni`); 
    }
    
    
}
// console.log(element);

for (let i=0; i<10; i++){
        // console.log(`outer loop val 
        for(let j=0; j<=10; j++){
            // console.log(`Inner loop value ${j} and inner loop ${i}`);
            
        }
}

for (let i=2; i<=10; i++){
    for(let j=1; j<=10; j++){
        // console.log(`${i}*${j}= ${i*j}`);
    }  
}

let myArray=["astha", "ravita", "radha"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
      
}

// break and continue

for (let index = 0; index<=20; index++) {
    if (index==7) {
        // console.log(`Mahendra Singh Dhoni jersy ${index}`);
        break
        
    }
    // console.log(`value of i is ${index}`);

}

for (let index = 0; index<=20; index++) {
    if (index==5) {
        console.log(`Detected ${index}`);
        continue
        
    }
    console.log(`value of i is ${index}`);

}