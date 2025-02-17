// array [23,2,45,7,11]

function islargest(arr){
    let largest =[0]
    for (i=1;i<arr.length;i++)
        if (arr[i]>largest)
            largest = arr[i]; 
    return largest
           
}

let number=[23,2,45,7,11]
console.log(islargest(number));

