//https://edabit.com/challenge/kbFhwaDyrd79JrgeB


const charCount = function(char,word){
    let count = 0;
    for (var i = 0; i < word.length; i++){
        if (char === word[i]){    
            count++;

        }
    }
    return count;
}

console.log(charCount("i","Irfan sari") );