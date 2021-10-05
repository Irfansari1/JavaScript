//https://edabit.com/challenge/AP4hnF97anRc2mAZ6
const keyValueList = function(obj){

    let arr1 =[];
    let arr2=[];

    for (i in obj){
        arr1.push(i)
         
    }
    arr1.sort();
    for (var j in arr1){
        arr2.push(obj[arr1[j]])  //arr1=[ 'a', 'b', 'd' ]  obj["a"] = 3
    }

    return [arr1,arr2]


     
     

} 

/* function keysAndValues(obj) {
	const arrs = [Object.keys(obj).sort(), Object.values(obj)];
	return arrs;

}
 */


console.log(keyValueList({ b: 1, d: 2, a: 3 }));