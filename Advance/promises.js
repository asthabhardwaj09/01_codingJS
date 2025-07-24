const promiseOne= new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, sryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2");
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree=  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username:'astha',password:"123"})
        }
        else{
            reject('Error:Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username 
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejexted"));

const promiseFive=new Promise(function(resolve,reject){
        setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:'Javasript',password:"123"})
        }
        else{
            reject('Error:javasript went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
        
    }    
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//     const response=await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
        
//     }
    
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})