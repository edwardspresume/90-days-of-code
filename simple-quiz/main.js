// Explain the basics of the quiz
// alert(
//     "The following quiz is a total of 5 questions. For  each  questions you answer correctly you gain 1 point. Are you ready to play? Click okay!"
// );

// Quiz Q&A
const quiz = [{
        question: "What is 5 * 3?",
        answer: 15
    },
    {
        question: "What is the largest number of five digits? ",
        answer: 9999
    },
    {
        question: "What is 15 * 10?",
        answer: 150
    },
    {
        question: "What is the abbreviation for New York?",
        answer: "NY"
    },
    {
        question: "The brain of a computer is called?",
        answer: "CPU"
    }
];

// Keep track of users progress
let score = 0;
let totalQuestions = quiz.length;

// Loop through and prompt quiz Q&A
quiz.forEach(item => {
    let userAnswer;
    const quizQuestions = item.question;
    let correctAnswer = item.answer
    let remainingQuestions = ` [Remaining questions: ${totalQuestions}]`;

    // Use parseInt if the answer is a number
    if (typeof correctAnswer === 'number') {
        userAnswer = parseInt(prompt(`${quizQuestions} ${remainingQuestions}`));
    } else {
        userAnswer = prompt(`${quizQuestions} ${remainingQuestions}`);
        userAnswer = userAnswer.toLowerCase();
        correctAnswer = correctAnswer.toLowerCase();
    }

    // Subtract the amount of question left as the user progress through the quiz
    totalQuestions--;

    // If the user answerers correctly increase score else alert correct answer
    if (userAnswer === correctAnswer) {
        score++;
    } else {
        alert(`The correct answer is ${correctAnswer}`);
    }
});


// Rank the user base on their score
let result = '';
if (score === 5) {
    result = "You got them all correct! You've earned a gold metal!";
} else if (score >= 3) {
    result =
        "You got " + score + " questions correct! You've  earned a silver metal!";
} else if (score >= 1) {
    result =
        "You got " + score + " question correct! You've  earned a bronze metal!";
} else {
    result = "You got them all wrong. Please try again";
}

//Provide the user their result
alert(result);