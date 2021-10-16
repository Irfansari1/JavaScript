let word = "Hello World!"

/* let r = word.split("").reverse().join("")

console.log(r); */
let str = ""
 
for (let i = word.length-1 ; i >= 0; i--){
    str += word[i];

}
console.log(str);

