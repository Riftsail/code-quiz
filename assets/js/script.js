var startQuizE1 = document.querySelector("#start-quiz")
var countDownTimerE1 = document.querySelector("#countdown-timer")
var questions = [
{
  nun: "1",
  question: "What does HTML stand for?",
  answers: 
  ["Hypertext Markup Language",
   "How to meet ladies",
    "Hypertext Missing Language",
     "Hypertext Martian Language"],
  correctAnswer: " Hypertext Markup Language",
},

{
  nun: "2",
  question: "What does CSS stand for?",
  answers:[ "Can't Shhot Straight", 
  "Cascading Style Sheet",
   "Character Selection Screen",
    "Chicken Salad Sandwich",],
    correctAnswer: "Cascading Style sheet"


},

{
nun: "3",
question: "what is JavaScript?",
answers:[ "A lightweight interpreted programming language",
"A short path to alcoholism",
"Something they found on the ship at Roswell",
"An ancient language only a few can use",],
correctAnswer: "A lightweight interpreted programming language"

}
];


var startQuiz = function() {
    nextQuestion();
    startCountDown();
    questions ();

};

var startCountDown = function() {

  var timeRemaining = 60;

  var countdowninterval = setInterval(function) {
    if (timeRemaining > 0) {

      countDownTimerE1.textContent = "Time Remaining" + timeRemaining;
      timeRemaining --;}
    
    
    countDownTimerE1.textContent = "time remaining" + "";
      clearInterval(countdownInterval);
    }


    var questions = function() {
      var targetQuestion = document.querySelector("questions");

    }


    

    startQuizE1.addEventListener("click", Start-Quiz)
    nextQuestionE1.addEventListener("click", Next-Question)



