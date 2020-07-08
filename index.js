function calculate() {
  let firstValue = document.getElementById("firstnumber").value;
  let secondValue = document.getElementById("secondnumber").value;
  let operator = document.getElementsByClassName("calc").value;

  let result = "";
  if (operator === "+") {
    result = firstValue + secondValue;
  } else if (operator === "-") {
    result = firstValue - secondValue;
  } else if (operator === "*") {
    result = firstValue * secondValue;
  } else if (operator === "/") {
    result = firstValue / secondValue;
  } else if (operator == "NaN" || "+Infinity" || "-Infinity") {
    result = "n/a";
  }

  document.getElementById("result").innerHTML = result;
  return result;
};

const btn = document.getElementById("btn-calc");
btn.addEventListener("click", calculate);
