/*https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.*/


function canNest(list1,list2){
    if ((Math.min(...list1) > Math.min(...list2)) &&  (Math.max(...list1) < Math.max(...list2)) ) {
        
        return true

    }else{
        return false
    }
}

console.log(canNest([1, 2, 3, 4], [0, 4]))