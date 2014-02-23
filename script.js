$(document).ready(function() {

	// setting selectors to a variable (token)
	// for better performance, if nothing else

	var theQuestion = document.getElementById("theQuestion"),
			radioLook = document.getElementsByName("ans"),
			hiddenInput = $("input:hidden"),
			questionList = [];

	// questionList is an Array() - use the Array built-in methods to populate :)
		questionList.push({
			question: "Which is black?",
			answers: ["A", "Black", "C"],
			correctAnswer: 0
		},
		{
			question: "Which is blue?", //same
			answers: ["Blue", "B", "A"],
			correctAnswer: 1
		},
		{
			question: "Which is Red?", //same
			answers: ["C", "Red", "A"],
			correctAnswer: 2
		});


	// We can operate on the token exactly the same as we could operate on
	// the longhand document.getElementById

	console.log(theQuestion);
	console.log(questionList.length); // in javascript, everything has a length, just about

	// operating on the token again!
	// notice the for... in
	for(var x in questionList) {

		// log each iteration
		console.log(questionList.indexOf(x));

	}

	$(":radio").on("click", function(event) {

		var ct = event.currentTarget;

 		// $(this) is an expression that pulls this - which is always
		// relative to its closest function container - into jQuery's scope
		// $ is shorthand for jQuery.
		console.log( $(this).val() );

		$(theQuestion).html( questionList[hiddenInput.val()].question );
		// You can work on tokens exactly the same -
		hiddenInput.val( $(this).val() );

		console.log("hidden input" + hiddenInput.valueOf());

		$("#score").text( $(this).val() );

		console.log("hidden input" + hiddenInput.valueOf());



	});

	$("#nextQuestion").on("click", function(event) {

		if (hiddenInput.val()) {

			console.log("Hidden input:" + hiddenInput.val());
			var current = hiddenInput.val();

			var idx = (questionList && questionList.indexOf(current))
				? questionList.indexOf(idx) + 1
				: idx = -1;
		}


		var questionText = questionList.indexOf(hiddenInput.val()).question;

		$(theQuestion).text( questionText );



	}(questionList));

});
