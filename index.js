let bmiCalculate = document.getElementById("bmiCalculator");
bmiCalculate.addEventListener("click", calculateBmi);

function calculateBmi() {
  let weight = prompt("Enter your weignt(in kg)");
  let height = prompt("Enter your height(in cm)");

  let bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.5) {
    alert("You are underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("You are in healthy range");
  } else if (bmi >= 25 && bmi <= 29.9) {
    alert("You are overweight");
  } else if (bmi >= 30 && bmi <= 39.9) {
    alert("You are overweight");
  } else {
    alert("can't calculate!!");
  }
}
