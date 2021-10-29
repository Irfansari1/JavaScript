
const fibonacci = function(number){
    let arr =[1,2]
    for(let i=0; i<number-2;i++){
        arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
    return arr[arr.length-1]
}

const input = document.getElementById("number");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", func);

function func(){
    output.innerHTML = `The value in ${input.value} is ${fibonacci(input.value)}.`
}

