
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