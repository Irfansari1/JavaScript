const stnr = document.getElementById("stnr");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const loc = document.getElementById("location");
const path = document.getElementById("path");

const table = document.getElementById("table");

const btn = document.getElementById("btn");

btn.addEventListener("click", func);

function func() {
  let tr = document.createElement("tr");
  tr.innerHTML += `<td>${stnr.value}</td>`;
  tr.innerHTML += `<td>${firstname.value}</td>`;
  tr.innerHTML += `<td>${lastname.value}</td>`;
  tr.innerHTML += `<td>${loc.value}</td>`;
  tr.innerHTML += `<td>${path.value}</td>`;

  table.appendChild(tr);
}
