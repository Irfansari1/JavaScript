const cells = document.querySelectorAll(".content")

function colorproducer (){
    
    return `rgb(${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)})`
}


cells.forEach(el => {
    el.addEventListener("click",function(){
        for(let i = 0; i<cells.length;i++){
            cells[i].style.backgroundColor = `${colorproducer()}`
        }
    })
});


//const container = document.querySelector(".container");
/*const button = document.querySelector(".content");
const c1 = document.querySelector(".content-1");
const c2 = document.querySelector(".content-2");
const c3 = document.querySelector(".content-3");
const c4 = document.querySelector(".content-4");
const c5 = document.querySelector(".content-5");
const c6 = document.querySelector(".content-6");
const c7 = document.querySelector(".content-7");
const c8 = document.querySelector(".content-8");
const c9 = document.querySelector(".content-9");
const c10 = document.querySelector(".content-10");
const c11 = document.querySelector(".content-11");
const c12 = document.querySelector(".content-12");
const c13 = document.querySelector(".content-13");
const c14 = document.querySelector(".content-14");
const c15 = document.querySelector(".content-15");
const c16 = document.querySelector(".content-16");
const c17 = document.querySelector(".content-17");
const c18 = document.querySelector(".content-18");
const c19 = document.querySelector(".content-19");
const c20 = document.querySelector(".content-20");
const c21 = document.querySelector(".content-21");
const c22 = document.querySelector(".content-22");
const c23 = document.querySelector(".content-23");
const c24 = document.querySelector(".content-24");
const c25 = document.querySelector(".content-25");
const c26 = document.querySelector(".content-26");
const c27 = document.querySelector(".content-27");
const c28 = document.querySelector(".content-28");
const c29 = document.querySelector(".content-29");
const c30 = document.querySelector(".content-30");


button.addEventListener("click", function() {
        let first = Math.floor(Math.random() * 255 + 1);
        let second = Math.floor(Math.random() * 255 + 1);
        let third = Math.floor(Math.random() * 255 + 1);
        let colorNumber = `${first}, ${second}, ${third}`;
        //text.textContent = `Background Color : rgb(${colorNumber})`;
        c1.style.backgroundColor = `rgb(${colorNumber})`; 
    
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c2.style.backgroundColor = `rgb(${colorNumber})`; 

});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c3.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c4.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c5.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c6.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c7.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c8.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c9.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c10.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c11.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c12.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c13.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c14.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c15.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c16.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c17.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c18.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c19.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c20.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c21.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c22.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c23.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c24.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c25.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c26.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c27.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c28.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c29.style.backgroundColor = `rgb(${colorNumber})`;
});
button.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    //text.textContent = `Background Color : rgb(${colorNumber})`;
    c30.style.backgroundColor = `rgb(${colorNumber})`;
});
    




/*const color = document.getElementById("backgroundColor");*/
//const button = document.getElementById("btn");
// text = document.getElementById("text");
/*const con = document.getElementById("container");*/

/*
button.addEventListener("click", function(){
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first}, ${second}, ${third}`;
    text.textContent = `Background Color : rgb(${colorNumber})`;
    document.body.style.backgroundColor = `rgb(${colorNumber})`;
});*/

