const calculateButton = document.getElementById("calculate-button");
const result = document.getElementById("point");

calculateButton.addEventListener("click", function() {
  result.innerHTML = Math.floor(Math.random() * 100 + 1);
  const darkModeButton = document.getElementById("dark-mode-button");
const body = document.body;

darkModeButton.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
});
});
