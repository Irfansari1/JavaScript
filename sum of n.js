function sum(x){
    let sum;
    sum = 0;
    for (var i = 0; i <= x; i++){
        sum = sum + i;
    } 
    return sum
    /*if (sum % 2 == 0){
        return true;

    }
    else if (sum == 91 ){
        return "91";
    }else{
        return false;

    }*/
}        

console.log(sum(13));
console.log(sum(15));

/* sum of n */