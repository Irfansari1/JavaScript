const first = document.getElementById("firstside");
const second = document.getElementById("secondside");
const third = document.getElementById("thirdside");
const output = document.getElementById("result");
const button = document.querySelector(".btn");
const body = document.body;

button.addEventListener("click", () => {
  let l1 = parseInt(first.value);
  let l2 = parseInt(second.value);
  let l3 = parseInt(third.value);
  if (l1 > 0 && l2 > 0 && l3 > 0) {
    if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
      if (l1 == l2 && l2 == l3 && l1 == l3) {
        output.innerHTML = "This is an equilateral triangle";
        body.style.backgroundImage = "url(./img/equil.png)";
      } else if (l1 == l2 || l2 == l3 || l1 == l3) {
        output.innerHTML = "This is an isosceles triangle";
        body.style.backgroundImage = "url(./img/iso.png)";
      } else {
        output.innerHTML = "This is a scalene triangle";
        body.style.backgroundImage = "url(./img/sca.png)";
      }
    } else {
      output.innerHTML =
        "Invalid Triangle. Please enter valid number to create a triangle";
    }
  } else {
    output.innerHTML = "Please enter a greater number than 0";
  }
});
