// scope and hosting

function one(){
    let username="Astha"

    function two(){
        let last_username="Bhardwaj"
        console.log(username + last_username);    
    }
    // console.log(last_username);
    two()
}

// one()


if (true){
    let username="Mukul"
    if(true){
        let last_username=" Khushwaha Bhardwaj"
        console.log(username + last_username);
    }
    // console.log(username);
    // console.log(last_username);  
    
}
// console.log(username);


// hosting +++++++++++ interesting

console.log((addone(2))); // this can be okay because function is not store in any variable js variable are very strong they store json object array function etc..
function addone(num){
    return num+1
}

// addone()


// addtwo() // shows error because the function is store in a variable
const addtwo= function (num){
    return num+2
}

// addtwo()







// Yes, browser ka scope environment alag tarike se chalta hai — especially because of the window object in global scope.