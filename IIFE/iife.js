(function chai(){
    //named iife
    console.log(`DB connected`);
    
}()); // remeber ;

//we use iife to control the population of global scope

((name)=>{ //unamed iife and parameter passed iife also
    console.log(`DB connected 2 ${name}`);  
})('astha')