var questions = [
    {
        question: " How can you make a list that lists the items with buls? ",
        answers: [

            { text: "DL", correct: false },
            { text: "UL", correct: true },
            { text: "OL", correct: false },
            { text: "List", correct: false },

        ]
    },
    {
        question: "What is the name of every homepage on the WWW?",
        answers: [

            { text: "Home.html", correct: false },
            { text: "Index.html", correct: true },
            { text: "Anything you want it to be.html", correct: false },
            { text: "The name of your website.html", correct: false },

        ]

    },
    {
        question: " Which is the correct CSS syntax?  ",
        answers: [

            { text: "Body:color=black", correct: false },
            { text: "Body {color: black}", correct: true },
            { text: "{body;color:black}", correct: false },
            { text: "{body:color=black(body}", correct: false },

        ]

    },


    {
        question: "What are block scoped variables in JavaScript?",
        answers: [

            { text: "The variables can be used globally.", correct: false },
            { text: "The variable is only accessible inside the block(if-else/for block) inside which it is declared", correct: true },
            { text: "The variables can be used globally.", correct: false },
            { text: "None of the above ", correct: false },

        ]
    },
    {
        question: " Which statement cannot be used to declare a variable in JavaScript?",
        answers: [

            { text: "Int", correct: true },
            { text: "Let", correct: false },
            { text: "Var", correct: false },
            { text: "Const", correct: false },

        ]
    },
    {
        question: "Which of the following is block scoped?",
        answers: [

            { text: "Both b and c", correct: true },
            { text: "Let", correct: false },
            { text: "Var", correct: false },
            { text: "Const", correct: false },

        ]
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        answers: [

            { text: "immediate if", correct: true },
            { text: "Alternative to if-else", correct: false },
            { text: "Switch statemen", correct: false },
            { text: "If-then-else statement", correct: false },

        ]
    },
    {
        question: "In JavaScript, what is a block of statement?",
        answers: [

            { text: "Prompts to complete the statement", correct: false },
            { text: "Shows a warning", correct: false },
            { text: "Ignores the statements", correct: true },
            { text: "throws an error", correct: false },

        ]
    },
    {
        question: "The `function` and `var` are known as:",
        answers: [

          
            { text: "Keywords", correct: false },
            { text: "Declaration statements", correct: true },
            { text: "Data types", correct: false },
            { text: "Prototypes", correct: false },

        ]
    },
    {
        question: "switch(expression)  <br>{<br> statements <br>}",
        answers: [

            { text: "==", correct: false },
            { text: "equals", correct: false },
            { text: "===", correct: true },
            { text: "equals", correct: false },

        ]
    },
    
   
];
 questionElement = document.getElementById("question");
 answerButton = document.getElementById("answers-buttons");
 nextButton = document.getElementById("next-btn");

 currentQuestionIndex = 0;
 score = 0;

function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Submit";
    showQuestion();
}
function showQuestion() {
    reset()
     currentQuestion = questions[currentQuestionIndex];
     questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
         button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("Ans");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    })
}


function reset() {
    nextButton.style.display = "none"
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
     selectedBtn = e.target;
     isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {

        }
        button.disabled = "true"
    });
    nextButton.style.display = "block"

}
function showScore() {
    reset();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "play again";
    nextButton.style.direction = "block"
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }
    else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();

    }
    else {
        startQuiz()
    }
})
startQuiz()