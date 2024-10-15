//  bmi = weight / (height * height);
// height
// weight

var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

function showAlert() {
  alert("Enter your height in inches and your weight in pounds!");
}

function calculateBMI() {
  height = heightInput.value;
  weight = weightInput.value;

  // height = height * 0.0254;
  //  weight = weight * 0.453592;
//   console.log("Height", height);
//   console.log("Weight", weight);

  BMI = (weight / (height) ** 2);
  result.innerText = BMI;

  if (BMI < 18.5) {
    statement.innerText = "Your BMI falls within the underweight range";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    statement.innerText =
      "Your BMI falls within the normal or healthy weight range";
  } else if (BMI >= 25 && BMI < 29.9) {
    statement.innerText = "Your BMI falls within the overweight range";
  } else if (BMI >= 30) {
    statement.innerText = "Your BMI falls within the obese range";
  } else {
    statement.innerText = "ERROR: Enter the correct data";
    showAlert();
  }
}
