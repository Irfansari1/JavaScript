const converted = function sentence(string){
    
    const arr = string.split(" ");

    for (let i = 0; i < arr.length; i++){
        
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    return arr.join(" ");
}


let text = document.getElementById("text");
let button = document.getElementById("btn");
let output = document.getElementById("text_output");

button.addEventListener("click", func);

function func(){
    text_output.innerHTML = converted(text.value)
}
