const output1 = document.getElementById("output_num");
const button = document.getElementById("btn");
const output2 = document.getElementById("attempt");
let guess_count = 0;
let ran_num = Math.floor(Math.random() * 100 + 1)

button.addEventListener("click" , () =>{       //what to do in very click on button
    let input = document.getElementById("number").value;

    if (input === ""){
        output1.innerHTML= "It cannot be left blank";
    }
    else if(input <= 0 || input > 100){                          
        output1.innerHTML="Please enter a number between 1 and 100!";    
    }
    else if (input > ran_num) {    
        guess_count++; 
        output1.innerHTML="Please Enter a Lower Number...";
        output2.innerHTML = 'Number of attemps: ' + guess_count;
    }
    else if (input < ran_num) {     
        guess_count++;
        output1.innerHTML= 'Please Enter a Greater Number...';
        output2.innerHTML= 'Number of attemps: ' + guess_count;
        
    }
    else if (input == ran_num) {    
        output1.innerHTML=  'Congratualtions!!!';
        output2.innerHTML=  `You have guessed the number at ${guess_count + 1} attempts`;
        //stopProgress();
    }
    document.getElementById('number').value = '';
});