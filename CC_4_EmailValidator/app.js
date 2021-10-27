const splitter = function(word){

    var regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let cond = regex.test(word)
    let arr = word.split(".");
    if(cond === true && arr[1].length <= 3){
        return true
    }else{
        return false
    }
}
     

console.log(splitter("zFTGNm@ailfef.coom"));

const body = document.body;
const input = document.getElementById("number");
const buton = document.getElementById("btn");
const output = document.getElementById("output");  

buton.addEventListener("click",func);
function func(){
    if(splitter(input.value) == true){
        output.innerHTML = "Your email is correct"
        body.style.backgroundImage = 'url(./img/Approved.png)';
        body.style.backgroundColor = 'white';
        output.style.color = 'black';
        output.style.fontWeight = 'bolder';

    }else{
        output.innerHTML = "Sory!!!. Invalid email adress."
        body.style.backgroundImage = 'url(./img/try.jpg)';
        output.style.color = 'black';
        output.style.fontWeight = 'bolder';
    }
}