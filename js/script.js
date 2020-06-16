var intro = document.querySelector("#intro");
var startButton = document.querySelector("#startButton");
var timer = document.querySelector("#timer");
var questionTitle = document.querySelector("#questionTitle");
var questionAnswers = document.querySelector("#questionAnswers");
var questionStatus = document.querySelector("#questionStatus");
var countdown = 75;
var questionIndex = 0;
var points = 0;

var questions = [
  {
    title:
      "What nation qualifies as completely surrounded by another country's land and/or internal waters? ",
    answers: [
      {
        text: "San Marino",
        isCorrect: true,
      },
      {
        text: "Swaziland",
        isCorrect: false,
      },
    ],
  },
  {
    title:
      "What country is the newest in the world to be recognised by the UN?",
    answers: [
      {
        text: "Palestine",
        isCorrect: false,
      },
      {
        text: "South Sudan",
        isCorrect: tr,
      },
    ],
  },
  {
    title: "What is the smallest country in the world?",
    answers: [
      {
        text: "Vatican City",
        isCorrect: true,
      },
      {
        text: "Tuvalu",
        isCorrect: false,
      },
    ],
  },
];

function startQuiz() {
  intro.style.display = "none";
  setInterval(countdownTimer, 1000);
  renderQuestion();
}

function countdownTimer() {
  timer.innerHTML = countdown;
  countdown--;
  // if countdown === 0
}

function renderQuestion() {
  questionTitle.innerHTML = questions[questionIndex].title;
  questionAnswers.innerHTML = "";

  // for every item in answers make a button with the answer text
  for (var i = 0; i < questions[questionIndex].answers.length; i++) {
    var newLi = document.createElement("li");
    var liBtn = document.createElement("button");
    liBtn.innerHTML = i + 1 + ". " + questions[questionIndex].answers[i].text;
    liBtn.setAttribute("data-index", i);
    newLi.append(liBtn);
    questionAnswers.append(newLi);
  }
}

function checkAnswer(event) {
  var answerIndex = event.target.getAttribute("data-index");
  if (questions[questionIndex].answers[answerIndex].isCorrect) {
    questionStatus.innerHTML = "Correct";
    points++;
  } else {
    questionStatus.innerHTML = "Wrong";
    countdown = countdown - 10;
  }

  questionIndex++;
  renderQuestion();
}

// Event Listeners
startButton.addEventListener("click", startQuiz);
questionAnswers.addEventListener("click", checkAnswer);