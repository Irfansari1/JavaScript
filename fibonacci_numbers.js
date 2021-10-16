
function fibonacci(num) {
    let fib = [0,1]
    let j = 0;
    for (let i = 0; i < num-2; i++) {
        j=fib[i] + fib [i+1];
        fib.push(j);
        j=0
    }
     return fib   

}
console.log(fibonacci(7));

/*
const fibonacci = function (limit) {
    let arr = [0, 1];
      while (arr.length < limit) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }

    return arr


    
}

  


console.log(fibonacci(10));*/