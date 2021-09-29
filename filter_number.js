//https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

/*
function filterArray(arr){
    
}
*/ 

/* const filterArray = function(arr){
    let arr1 = [];
    var i = 0
    for(i = 0; i < arr.length; i++){
        if (typeof(arr[i]) === "number"){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

console.log(filterArray( [1, 2, "1", "123", 123])); */

const filterArray = function(arr){
    for (var i=0; i < arr.length; i++){
        if (typeof(arr[i]) === "string"){
            arr.splice(i,1);
            i--;

        }
    }
    return arr;


}
console.log(filterArray( [1, 2, "ozkan", 89,"irfan","1", "123", 123]));