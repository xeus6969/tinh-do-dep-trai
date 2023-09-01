const calculateButton = document.getElementById("calculate-button");
const darkModeButton = document.getElementById("dark-mode-button");
const body = document.body;

calculateButton.addEventListener("click", function() {
  const result = document.getElementById("point");
  result.innerHTML = Math.floor(Math.random() * 100 + 1);
});

darkModeButton.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
});
