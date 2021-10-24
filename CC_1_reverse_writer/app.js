

const reverse = function(word){
    let arr = [...word];
    return arr.reverse().join("")
}
console.log(reverse("Clarusway"));

let input = document.getElementById("input");
let submit = document.getElementById("btn");
let div = document.getElementById("main");
let parag = document.getElementById("par");

submit.addEventListener("click", func);
    function func(){
        par.innerHTML += `Reversed text is : ${reverse(input.value)}`
    }



