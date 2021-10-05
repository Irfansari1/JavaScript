//https://projecteuler.info/problem=1
function multiSum(n){
    let arr = [];
     for (var i = 1; i < n; i++){
         if ( i%3 == 0 || i%5 == 0){
            arr.push(i)

         }

     }
     let result = arr.reduce((sum,num) => sum+num);
     return result;
      
}


console.log(multiSum(1000));
 
