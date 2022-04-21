


// check if the number prime


/* const isPrime = function(num){
    for (let i = 2; i < num; i++){
        if ( num % i === 0){
            return false
        }
    }
    return num > 1
}
console.log(isPrime(743));  */


const isPrime = n => {
    for (let i = 2; i < n; i++) 
        if (n % i === 0) return false;
    return n>1
};
console.log(isPrime(89));