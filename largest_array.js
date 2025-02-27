// [10,20,30,40]

function largest(arr){
    let largest_value= arr[0];
    for(i=1;i<arr.length;i++){
        let num=arr[i];
        
        if(largest_value<num)
            {
            largest_value=num;
        }

    }
    return largest_value
    
}
let arr=[10,20,30,40]
console.log(largest(arr));
