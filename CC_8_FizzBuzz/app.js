const output = document.getElementById("output");
const input = document.getElementById("number");
const button = document.getElementById("btn");


const func = function fizz(){  
    for (var i=1; i <= input.value; i++){
        if (i % 15 == 0) 
        document.getElementById("output").innerHTML+=`${i} FizzBuzz <br>`;
        else if (i % 5 == 0) 
        document.getElementById("output").innerHTML+=`${i} Buzz <br>`;
        else if (i % 3 == 0) 
        document.getElementById("output").innerHTML+=`${i} Fizz <br>`;
        else document.getElementById("output").textHTML+=`<br>`;
    } 
}
 
button.addEventListener("click", func);

/*
const fizBuzz = function (num){
     return num % 5 == 0 && num % 3 == 0 ? "fizzbuzz"
      : num % 5 == 0 ? "buzz"
      :num % 3 == 0? "fizz"
       :"no result";

}
*/