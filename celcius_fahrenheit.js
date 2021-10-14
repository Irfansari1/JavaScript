//fahrenheit to celcius example


alert ("You have only two option. Thats way choose 1 or 2.")


let option = prompt("Choose an option: ")

let value = prompt("Enter a value.")




if (option == 1){ // celcius to fahrenheit
    var result = value*(9/5)+32;
    alert("The value of "+value+" celcius is equal to "+ result+" fahrenheit.")
}else if ( option == 2){  // fahrenheit to celcius
    var result = (value-32)/(9/5);
    alert("The value of "+value+" fahrenheit is equal to "+ result+" Celscius.")

}else{
    alert("Please choose option 1 or 2.")
}