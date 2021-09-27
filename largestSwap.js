//https://edabit.com/challenge/hD3euqPHM82Cbr7R8

function largestSwap(num){
    var x = num.toString();
    var y = x[1] + x[0];
    y = parseInt(y);
    return x > y ? true: false
/* 
    if (x > y){
        return true

    }else{
        return false
    } */


}

console.log(largestSwap(21));