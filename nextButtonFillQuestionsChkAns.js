/*jslint browser: true, vars: true*/
var myQuiz = {};
var nextQuestionIncrementor = 0;
//var userScore=0;
myQuiz.pageLoad = function () {
	// "use strict";
	//var A, B, C, D;//global for correct answer declaration

	var questionList = [
		{
			//array of objects filled with question, answers and correct answer global
			question: "Which is black?",
			answers: ["A", "Black", "C"],
			correctAnswer: 0
		},
		{
			question: "Which is blue?", //same
			answers: ["BLue", "B", "A"],
			correctAnswer: 1
		},
		{
			question: "WHich is Red?", //same
			answers: ["C", "Red", "A"],
			correctAnswer: 2
		}
	];
	var nextQuestionIncrementor = 0;//check global and local scope in morning.
	var userScore = 0;//storing user score not adjusting at end to post total

	var setQuestion = function (nextQuestionNum) {
		var setQuestionElement = document.getElementById("theQuestion");//Looking for the question in DOM to get access to it.
		setQuestionElement.innerHTML = questionList[nextQuestionNum].question;//used counter to go from array element i to change questions(see nested for loop notes)
	}
	var setAnswer = function (idElement, questionNumber, answerNumber) {
		var choiceElement = document.getElementById(idElement);//same thing as with set question but pass 3 variables consider declaring same as with set question
		choiceElement.innerHTML = questionList[questionNumber].answers[answerNumber];//drills the object to obtain the answer values based off a variable passed to the funciton()
	}
	var displayQuiz = function () {
		setQuestion(nextQuestionIncrementor);//call the setq with the counter passed to print question
		setAnswer("A", nextQuestionIncrementor, 0);//setA is looking at the first label tag still uses counter like setq but use the value for checking correct answers this part is broken what were you thinking with values????
		setAnswer("B", nextQuestionIncrementor, 1);//rinse and repeat
		setAnswer("C", nextQuestionIncrementor, 2);//rinse and repeat
	}
	var changeUserScore = function () {
		var rightAnswer = questionList[nextQuestionIncrementor].correctAnswer;//look at the right answer using counter for question
		var chosenAnswer = document.getElementsByName("ans");//look at all radio buttons based off ans name attribute

		if (chosenAnswer.checked === rightAnswer) {
			userScore++;//this is not working debug why is it not giving correct score???
		}
	}
	var scoreToDiv = function () {
		if (nextQuestionIncrementor >= questionList.length) {
			document.getElementById("Score:").innerHTML = userScore;//for showing score to the div id'd with Score:

		}
	}
	var resetRadio = function () {

		var radioLook = document.getElementsByName("ans");
		for (var i = 0; i < radioLook.length; i++) {
			var isRadioLookChecked = radioLook[i].checked;
			if (isRadioLookChecked) {
				isRadioLookChecked = false;
			}
		}
	}
	var nextQuestion = function () {//magic button starto control everything from here is the goal. Use object Calls and one function to call many dont't get lost!!!
		resetRadio();
		changeUserScore();
		nextQuestionIncrementor++;
		scoreToDiv();
		displayQuiz();

	}


	var nextButton = document.getElementById("nextQuestion");//look at the button
	nextButton.addEventListener("click", nextQuestion, false);//event listener to listine for click at nextquestion dom look what is the false value all documentation shows look up WHY!!!!?
	displayQuiz(); //RuN ThE TraP!!
};


myQuiz.pageLoad(); //jslint is sooooo COOOOOOL!=FUCK YOU!
