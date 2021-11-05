/*const color = document.getElementById("backgroundColor");*/
const button = document.getElementById("btn");
const text = document.getElementById("text");
/*const con = document.getElementById("container");*/


button.addEventListener("click", function(){
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    text.textContent = `Background Color : rgb(${colorNumber})`;
    document.body.style.backgroundColor = `rgb(${colorNumber})`;
});
