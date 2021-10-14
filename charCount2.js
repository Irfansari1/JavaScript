const strCount  = function(word,char){
    let arr = [];
    for (let i = 0; i< word.length; i++){
        if (word[i] === char){
            arr.push(i)

        }
    }
    return "there is " + arr.length+ " times " +char+" in your text and the indexlist is below\n"+arr ;

 }


 console.log(strCount("My name is ozkan and 25 years old","a"));