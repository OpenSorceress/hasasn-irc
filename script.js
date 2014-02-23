

// setting selectors to a variable (token)
// for better performance, if nothing else

var theQuestion = document.getElementById("theQuestion"),
	radioLook = document.getElementsByName("ans"),
	hiddenInput = $("input:hidden"),
	score = $("#score"),
	questionList = getQuestionList();


	if (!questionList) {
		questionList = getQuestionList();
	}
		$(theQuestion).text(questionList[0].question);


	$(radioLook).on("click", function (event) {
		var current = event.currentTarget,
			questionItem = questionList[ $(current).val() ],
			questionText = questionItem.question;

	$(theQuestion).html(questionText);

	hiddenInput.val($(this).val());
	score.text($(this).val());

});

$("#nextQuestion").on("mousedown", function(ev) {

	var questionText,
		questionList = questionList || getQuestionList(),
		current = $("input:hidden").val();

	current = (current.valueOf() < questionList.length - 1)
		? current = ++current
		: current = 0;

	questionText = questionList[ current ].question;

	$( theQuestion ).text(questionText);

});

function getQuestionList () {

	// instantiating this as a literal [] will not work!!!
	var questionList = new Array();

	questionList.push(
		{
			question     : "Which is black?",
			answers      : ["A", "Black", "C"],
			correctAnswer: 0
		},
		{
			question     : "Which is blue?", //same
			answers      : ["Blue", "B", "A"],
			correctAnswer: 1
		},
		{
			question     : "Which is Red?", //same
			answers      : ["C", "Red", "A"],
			correctAnswer: 2
		});
	return questionList;

}



