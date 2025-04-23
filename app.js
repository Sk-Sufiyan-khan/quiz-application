let quizQuestions = [
    {
        question:"What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
] 

// quiz function

let getQues = document.getElementById("ques")
let getOption1 = document.getElementById("opt1")
let getOption2 = document.getElementById("opt2")
let getOption3 = document.getElementById("opt3")
let getBtn = document.getElementById("btn")
let index = 0;

function next() {
    let getInputs = document.getElementsByTagName("input")
    for(let i = 0; i < getInputs.length; i++ ){
        getInputs[i].checked = false;
    }
    if (index > quizQuestions.length - 1) {
        Swal.fire({
            title: "Questions end",
            text: "Ghr jaao",
            icon: "success",
          });
    } else {
        getQues.innerText = quizQuestions[index].question;
        getOption1.innerText = quizQuestions[index].option1;
        getOption2.innerText = quizQuestions[index].option2;
        getOption3.innerText = quizQuestions[index].option3;
        index++;
        getBtn.disabled = true;
    }

 
}
next();

function enableNext() {
    getBtn.disabled = false
}

// Timer 

var timeLeft = 59;
const timerDisplay = document.getElementById("timer");

var timer = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
  }
}, 1000);

// score 

function calculateScore() {
    let score = 0;

    if (document.querySelector('input[name="answer1"]:checked')?.value === "5") score++;
    if (document.querySelector('input[name="answer2"]:checked')?.value === "5") score++;
    if (document.querySelector('input[name="answer3"]:checked')?.value === "5") score++;

    alert(`Your score: ${score}/3`);
  }
