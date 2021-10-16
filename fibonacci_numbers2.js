//https://projecteuler.info/problem=2

 

function fibonacci (n){
    let arr =[1,2];
    let arr1 = [];
    while(arr[arr.length-1] <= n){
        arr.push(arr[arr.length-1] + arr[arr.length-2]);

    }
    arr.splice(arr.length-1,1)
    
    for (let i = 0; i< arr.length; i++){
        if (arr[i] % 2 == 0){
            arr1.push(arr[i])

        }
    }
    return arr1.reduce((total, num) => total+ num)

}

console.log(fibonacci(4000000));