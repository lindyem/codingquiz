var intro = document.querySelector("#intro");
var end = document.querySelector("#end");
var startButton = document.querySelector("#startButton");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var questionTitle = document.querySelector("#questionTitle");
var questionAnswers = document.querySelector("#questionAnswers");
var questionStatus = document.querySelector("#questionStatus");
var score = document.querySelector("#score");
var formInput = document.querySelector("#formInput");
var formSubmit = document.querySelector("#formSubmit");
var highscores = document.querySelector("#highscores");
var view = document.querySelector("#view");
var highscoresList = document.querySelector("#highscoresList");
var clear = document.querySelector("#clear");
var back = document.querySelector("#back");
var countdown = 75;
var questionIndex = 0;
var countdownInterval;

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
        isCorrect: true,
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
  countdownInterval = setInterval(countdownTimer, 1000);
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
    if (questionIndex + 1 <= questions.length - 1) {
      questionIndex++;
      renderQuestion();
    } else {
      end.style.display = "block";
      question.style.display = "none";
      clearInterval(countdownInterval);
      score.innerHTML = countdown;
    }
  } else {
    questionStatus.innerHTML = "Wrong";
    countdown = countdown - 10;
  }
}

function submitScore(event) {
  var initials = formInput.value;
  localStorage.setItem(initials, countdown);

  renderHighScores();
}

function renderHighScores() {
  highscores.style.display = "block";
  end.style.display = "none";
  question.style.display = "none";
  intro.style.display = "none";
  highscoresList.innerHTML = "";

  for (var i = 0; i < localStorage.length; i++) {
    var participantInitial = localStorage.key(i);
    var participantScore = localStorage.getItem(localStorage.key(i));
    var hsLi = document.createElement("li");
    hsLi.innerHTML =
      i + 1 + ". " + participantInitial + " - " + participantScore;
    highscoresList.append(hsLi);
  }
}
function clearScores() {
  localStorage.clear();
  renderHighScores();
}

function goBack() {
  highscores.style.display = "none";
  intro.style.display = "block";
}
// Event Listeners
startButton.addEventListener("click", startQuiz);
questionAnswers.addEventListener("click", checkAnswer);
formSubmit.addEventListener("click", submitScore);
view.addEventListener("click", renderHighScores);
clear.addEventListener("click", clearScores);
back.addEventListener("click", goBack);
