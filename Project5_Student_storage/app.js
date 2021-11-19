//get elements from html

var result;

/* const name = [...document.querySelectorAll(".mb-3")][0].children[1]; */
const name = [...document.querySelectorAll(".form-control")][0];

const surName = [...document.querySelectorAll(".form-control")][1];

const age = [...document.querySelectorAll(".form-control")][2];

const btn = document.getElementById("btn");

const table = document.getElementById("tbody");

const deleteAll = document.getElementById("all");

btn.addEventListener("click", addInfoToUI);
/* btn.addEventListener("click", function(){});
btn.addEventListener("click", ()=>{});
 */

function addInfoToUI() {
  let a = name.value;
  let b = surName.value;
  let c = parseInt(age.value);

  table.innerHTML += `<tr>
            <td scope="row">${a}</td>
            <td>${b}</td>
            <td>${c}</td>
            <td ><button onclick="func1()" id="icon" class="btn btn-secondary"><i class="fas fa-trash-alt" ></i></button></td>
            
            

          </tr> `;

  const arr = [...document.querySelectorAll(".form-control")];
  /*  [...document.querySelectorAll(".form-control")].forEach((el)=>{
        el.innerHTML=""
    }) */
  arr.forEach((el) => {
    el.value = "";
  });
  addElementsToStorage([a, b, c]);
}

function func1() {
  const t = document.getElementById("icon");
  t.parentElement.parentElement.remove();
}

deleteAll.addEventListener("click", function () {
  [...table.children].forEach((el) => {
    el.remove();
  });
  localStorage.removeItem("myArr");
});

/* result = table.children;

console.log(result);
 */

//storage functions

function createList() {
  let myArr;
  if (localStorage.getItem("myArr") === null) {
    myArr = [];
  } else {
    myArr = JSON.parse(localStorage.getItem("myArr"));
  }
  return myArr;
}

function addElementsToStorage(item) {
  let myArr = createList(); // get from local storage
  myArr.push(item); // modify the array
  localStorage.setItem("myArr", JSON.stringify(myArr)); // then send again  to local storage
}

window.addEventListener("DOMContentLoaded", callElementsFromStorage);

function callElementsFromStorage() {
  let myArr = JSON.parse(localStorage.getItem("myArr")); //createList();
  for (let i = 0; i < myArr.length; i++) {
    table.innerHTML += `<tr>
            <td scope="row">${myArr[i][0]}</td>
            <td>${myArr[i][1]}</td>
            <td>${myArr[i][2]}</td>
            <td><button onclick="func1()" id="icon" class="btn btn-secondary"><i class="fas fa-trash-alt" ></i></button></td>
            
            

          </tr> `;
  }
}
