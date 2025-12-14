// Lab 4: Prompt Quizzer – A Quiz Game
// B.Tech CSE Core – 1st Semester

// Array of quiz questions and answers
var quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "New Delhi"
    },
    {
        question: "Which planet is known as the red planet?",
        answer: "Mars"
    },
    {
        question: "What is 9 + 5?",
        answer: "14"
    },
    {
        question: "Who is the President of India?",
        answer: "Droupadi Murmu"
    },
    {
        question: "Which language is used for web development?",
        answer: "JavaScript"
    }
];

// Function to run the quiz
function runQuiz() {
    var score = 0;

    for (var i = 0; i < quizQuestions.length; i++) {

        var userAnswer = prompt(
            "Question " + (i + 1) + ":\n" + quizQuestions[i].question
        );

        // Normalize both user answer and correct answer
        userAnswer = userAnswer.toLowerCase().trim();
        var correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

        // Check answer
        if (userAnswer === correctAnswer) {
            alert("Correct Answer 👍");
            score++;
        } else {
            alert(
                "Wrong Answer ❌\nCorrect Answer is: " +
                quizQuestions[i].answer
            );
        }
    }

    // Display final score
    alert(
        "Quiz Completed!\nYour Score: " +
        score +
        " out of " +
        quizQuestions.length 
    );
}

// Run the quiz
runQuiz();