// Var declaration
const firstValue = document.querySelector(".js-firstValue");
const secondValue = document.querySelector(".js-secondValue");
const operator = document.querySelector(".js-calc");
const btn = document.querySelector(".js-calculate-btn");
const output = document.querySelector(".js-output");

// Calc function
function calculate() {
  let input1 = Number(firstValue.value);
  let operatorValue = operator.value;
  let input2 = Number(secondValue.value);

  let result;
  if (operatorValue === "+") {
    result = input1 + input2;
    output.value = result.toString();
  } else if (operatorValue === "-") {
    result = input1 - input2;
    output.value = result.toString();
  } else if (operatorValue === "*") {
    result = input1 * input2;
    output.value = result.toString();
  } else if (operatorValue === "/") {
    result = (input1 / input2).toFixed(1);
    output.value = result.toString();
  } else {
    if (output.value === "NaN" || "Infinity") {
      output.value = "n/a";
    }
  }
}

// addEventListener
btn.addEventListener("click", calculate);
firstValue.addEventListener("change", calculate);
firstValue.addEventListener("keyup", calculate);
operator.addEventListener("change", calculate);
secondValue.addEventListener("change", calculate);
secondValue.addEventListener("keyup", calculate);
