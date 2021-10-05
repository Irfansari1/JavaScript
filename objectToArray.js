//https://edabit.com/challenge/4aaBNPnFMc3bzR7JR
function objectToArray(obj){
    let arr = [];

    for (var i in obj){     // i=key,obj[i]=value
         arr.push([i,obj[i]]); 
        

    }
    return arr;

}


let a = {
    D: 1,
    B: 2,
    C: 3
  }

console.log( objectToArray(a));