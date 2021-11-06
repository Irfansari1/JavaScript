const number = document.querySelector("span");
const decrease = document.getElementsByClassName("btn")[0];
const reset = document.getElementsByClassName("btn")[1];
const increase = document.getElementsByClassName("btn")[2];


decrease.addEventListener("click", () =>{
    number.innerHTML -= 1
    if (number.innerHTML < 0){
        number.style.color = "red"
    }else if (number.innerHTML == 0){
        number.style.color = "black"
    }  
    
});

reset.addEventListener("click", () =>{
    number.innerHTML = 0
    number.style.color = "black"
});

increase.addEventListener("click", () =>{
    number.innerHTML = parseInt(number.innerHTML)+1
    if (number.innerHTML > 0){
        number.style.color = "green"
    }else if (number.innerHTML == 0){
        number.style.color = "black"
    } 
});