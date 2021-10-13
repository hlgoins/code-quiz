var questionBank = [
    {
        q:"What is HTML ?",
        choices1:"Haksjaa",
        choices2:"Hypertext MArkup Language",
        choices3:"sdfljds",
        choices4:"sfkshdfk",
        answer:2
    },
    {
        q:"What is CSS ?",
        choices1:"Cascading Style Sheets",
        choices2:"Hypertext MArkup Language",
        choices3:"sdfljds",
        choices4:"sfkshdfk",
        answer:1
    },
    {
        q:"How do you append a string?",
        choices1:"Cascading Style Sheets",
        choices2:"Hypertext MArkup Language",
        choices3:"By using dot notation",
        choices4:"sfkshdfk",
        answer:3
    },
    {
        q:"What is the purpose of semicolons?",
        choices1:"Cascading Style Sheets",
        choices2:"To show that the line of code is finished",
        choices3:"By using dot notation",
        choices4:"sfkshdfk",
        answer:2
    },
]
var questionContainer = document.getElementById('test-questions');
var questionTitle = document.getElementById('question-title');
var choicesOne = document.getElementById('choices-1');
var choicesTwo = document.getElementById('choices-2');
var choicesThree = document.getElementById('choices-3');
var choicesFour = document.getElementById('choices-4');

questionContainer.style.display = 'none';

var currentQuestion = 0;

var startQuiz = document.querySelector('#start-btn');
startQuiz.addEventListener('click', function(){
    questionContainer.style.display = 'block';
    startQuiz.style.display = 'none';
    showQuestion();
})

function showQuestion(){
questionTitle.textContent = questionBank[currentQuestion].q
choicesOne.textContent = questionBank[currentQuestion].choices1
choicesTwo.textContent = questionBank[currentQuestion].choices2
choicesThree.textContent = questionBank[currentQuestion].choices3
choicesFour.textContent = questionBank[currentQuestion].choices4
}