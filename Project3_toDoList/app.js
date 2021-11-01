//get elements from HTML side

const input = document.querySelector(".add_todo");

const addButton = document.querySelector(".add_btn");

const clearButton = document.querySelector(".clear_btn");

const todoArea = document.querySelector(".todolist");

const listItem = document.querySelector(".list-item");



todoArea.addEventListener("click",func3)

/* addButton.addEventListener("click",()=>{

})
as we used onclick in HTML side, we didnt use eventListener function
*/
function func1() {  

    //option 1
  todoArea.innerHTML += `<li class="list-item" >
    <i class="fa-solid fa-clipboard-check complete"></i>
    ${input.value}<i class="fa-solid fa-trash-can delete"></i></li >`;
    input.value = ""


    //option 2

/*     let liElement = document.createElement("li");
    iconOk = document.createElement("i");
    iconOk.className = "fa-solid fa-clipboard-check complete";
    iconDelete = document.createElement("i");
    iconDelete.className = "fa-solid fa-trash-can delete";
    liElement.appendChild(iconOk)
    liElement.innerHTML += input.value;
    liElement.appendChild(iconDelete)
    liElement.className = "list-item";
    todoArea.appendChild(liElement); 
      */
     
  
}


function func2(){


    if(confirm("You want to delete the all?")){
        todoArea.innerHTML = ""; 
    }
      
}     
  
let x = 0;

function func3(e){

    x++;
     if(e.target.className == "fa-solid fa-clipboard-check complete"){
        if(x%2 == 1 ){
            e.target.parentElement.style.textDecoration = 'line-through'

        }else{
            e.target.parentElement.style.textDecoration = 'none'
        }
        
     }
     else if(e.target.className == "fa-solid fa-trash-can delete"){
         e.target.parentElement.remove()

     }
     
      
}


//enter button in input
input.addEventListener("keydown",func4);


function func4(e){

    if(e.key == "Enter"){
        todoArea.innerHTML += `<li class="list-item" >
    <i class="fa-solid fa-clipboard-check complete"></i>
    ${input.value}<i class="fa-solid fa-trash-can delete"></i></li >`;
    input.value = "";
    }


    

     

    


}













/* const addtodo = document.querySelector(".add_todo");
const list = document.querySelector(".todolist");
const clear = document.querySelector(".clear_btn");
const addbtn = document.querySelector(".add_btn")


const generateListe = todo => {
    const html = `
    <li class="list-item"><i class="fa-solid fa-clipboard-check complete"></i>
    <span>${todo}</span><i class="fa-solid fa-trash-can delete"></i></li>`;
    list.innerHTML += html;
};

addbtn.addEventListener('click', e => {
    e.preventDefault();
    const todo = addtodo.value.trim();
    if (todo.length) {
      generateListe(todo);
      addtodo.reset();
    }
  });



list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
    }
});
clear.addEventListener('click', e => {
    if (e.target.classList.contains('clear_btn')) {
      if (confirm('Delete all? Sure?'))
        list.innerHTML = "";
    }
  });

  list.addEventListener('click', e => {
    if (e.target.classList.contains("complete")) {
      if ((e.target.parentElement).style.textDecoration != 'line-through')
        (e.target.parentElement).style.textDecoration = 'line-through';
      else (e.target.parentElement).style.textDecoration = 'none';
    }
  }); */

/*const addForm = document.querySelector('.add');
const list = document.querySelector('.todolist');
const comItem = document.querySelector('.complete');
const clearAll = document.querySelector(".clearall");


const generateListe = todo => {
  const html = `
  <li class="list-item"><i class="fas fa-clipboard-check complete"></i>
  <span>${todo}</span><i class="fas fa-trash-alt delete"></i></li>`;
  list.innerHTML += html;
};

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

clearAll.addEventListener('click', e => {
  if (e.target.classList.contains('clearall')) {
    if (confirm('Hepsini siliyorum emin misin?'))
      list.innerHTML = "";
  }
});

list.addEventListener('click', e => {
  if (e.target.classList.contains("complete")) {
    if ((e.target.parentElement).style.textDecoration != 'line-through')
      (e.target.parentElement).style.textDecoration = 'line-through';
    else (e.target.parentElement).style.textDecoration = 'none';
  }
});

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateListe(todo);
    addForm.reset();
  }
});*/
