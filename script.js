const calculateButton = document.getElementById("calculate-button");
const result = document.getElementById("point");

calculateButton.addEventListener("click", function() {
  result.innerHTML = Math.floor(Math.random() * 100 + 1);
});
