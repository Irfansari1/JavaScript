
const num1 = document.getElementById("first");
const operator = document.getElementById("oper");
const num2 = document.getElementById("second");
const button = document.getElementById("btn");
const result = document.getElementById("output");




button.addEventListener("click",func);

function func(){
    switch (operator.value) {
        case '+':
            result.innerHTML =`${num1.value}+${num2.value} = ${parseInt(num1.value) + parseInt(num2.value)}`
            break;
        case '-':
            result.innerHTML = `${num1.value}-${num2.value}`
            break;
        case '*':
            result.innerHTML = `${num1.value}*${num2.value}`
            break;
        case '/':
            result.innerHTML = `${num1.value}/${num2.value}`
            break;
        default:
            break;
    }
}  