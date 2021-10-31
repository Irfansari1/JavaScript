

const ran_num = function(){

    let c = 0;
    let arr = [];
    while (c<6) {
        let num = " "+(Math.floor(Math.random() * 50) + 1);
        arr.push (num);
        while (arr.filter(x => x==num).length !=1) {
            arr.splice(arr.length-1,1);
            arr.push (Math.floor(Math.random() * 50) +1);
        }
        c++
        
    }
    return arr.sort((a,b)=> a-b);
}


let button = document.getElementById("btn")
let output = document.getElementById("output")

button.addEventListener("click", func);

function func(){

    output.innerHTML = ran_num();  ///+= adds another to the current list
}

