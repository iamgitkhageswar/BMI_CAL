const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  if (height === "" || isNaN(height) || height <= 0) {
    result.innerText = "Please give a valid details.";
  } else if (weight === "" || isNaN(weight) || weight <= 0) {
    result.innerText = "Please give a valid details.";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerText = ("Score is ", bmi);
  }
});