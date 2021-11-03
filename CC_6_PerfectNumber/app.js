
const perfect = function(num){
    let sum = 0
    for (let i = 1; i<num; i++){
        if(num%i === 0){
            sum +=i;
        }
    }
    return (num === sum) ? true:false;
}

const body = document.body;
const input = document.getElementById("number");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", func);


function func(){
    if(perfect(parseInt(input.value))){
        output.innerHTML = "It's a perfect number";
        body.style.backgroundImage = 'url(./img/perfect.jpg)';
    }else{
        output.innerHTML = "It's NOT a perfect number";
        body.style.backgroundImage = 'url(./img/notperfect.png)';
    }
}
