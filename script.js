var intro = document.querySelector("#intro");
var startButton = document.querySelector("#startButton");
var timer = document.querySelector("#timer");
var countdown = 75;

function startQuiz() {
  intro.style.display = "none";
  setInterval(countdownTimer, 1000);
}

function countdownTimer() {
  timer.innerHTML = countdown;
  countdown--;

  // if countdown === 0
}

// Event Listeners
startButton.addEventListener("click", startQuiz);
