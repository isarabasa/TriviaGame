$(document).ready(function() {

    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;
    // initial time of 15 seconds for each question
    var time = 15;
    // track which question we are on
    var totalQuestion = 0;   

    var questions = [
      {
        question: "What is the capital city of Puerto Rico?",
        choices: ["San Juan", "Caracas",  "Asuncion", "Montevideo"],
        correctAnswer: "San Juan",
        image: "<img src= 'assets/images/sanjuan.jpeg' class='img-sanjuan'>"
	  }, 
	  {
        question: "What is the largest bone in the human body?",
        choices: ["Tibia" ,  "Femur" , "Spine", "Scapula"],
        correctAnswer: "Femur",
	    image: "<img src= 'assets/images/femur.jpeg' class='img-femur'>"
	  }, 
	  {
        question: "What was the first disney movie ever made?",
        choices: ["Pinocchio", "Snow White and the Seven Dwarfs" , "Fantasia", "Sleeping Beaty"],
        correctAnswer: "Snow White and the Seven Dwarfs",
	    image: "<img src= 'assets/images/snowWhite.jpeg' class='img-snowWhite'>"
	  }, 
	  {
        question: "Who was the mexican president during the period of 1970-1976?",
        choices: ["Miguel de la Madrid", "Gustavo Diaz Ordaz", "Adolfo Lopez Mateos", "Luis Echeverria"],
        correctAnswer: "Luis Echeverria",
	    image: "<img src= 'assets/images/echeverria.jpeg' class='img-echeverria'>"
	  }, 
	  {
        question: "What element begins with 'Na'? ",
        choices: ["Magnesium", "Sodium", "Nitrogen", "Nickel"],
        correctAnswer: "Sodium",
	    image: "<img src= 'assets/images/sodium.jpeg' class='img-sodium'>"
	  }];
    
      	// user guessed correctly
	function userWin() {
		$("#game").html("<p>Correct answer!</p>");
		correctGuesses++;
		var correctAnswer = questions[totalQuestion].correctAnswer;
		$("#game").append("<p>The answer is <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[totalQuestion].image);
		setTimeout(nextQuestion, 4000);
		totalQuestion++;
    }
    
    	// user guessed incorrectly
	function userLoss() {
		$("#game").html("<p>Wrong answer!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[totalQuestion].correctAnswer;
		$("#game").append("<p>The correct answer is <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[totalQuestion].image);
		setTimeout(nextQuestion, 4000);
		totalQuestion++;
	}

	function questionContent() {
    	$("#game").append("" + 
    		questions[totalQuestion].question + "</p><p class='choices'>" + 
    		questions[totalQuestion].choices[0] + "</p><p class='choices'>" + 
    		questions[totalQuestion].choices[1] + "</p><p class='choices'>" + 
    		questions[totalQuestion].choices[2] + "</p><p class='choices'>" + 
    		questions[totalQuestion].choices[3] + "</strong></p>");
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#game").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[totalQuestion].correctAnswer;
			$("#game").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[totalQuestion].image);
			setTimeout(nextQuestion, 4000);
			totalQuestion++;
		}
	}

	// screen that shows final score
	function resultsScreen() {
        var totalScore = "<h3>Total score</h3>"; 
		$("#game").html("<p>" + totalScore + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#game").append("<button id='start'>Start Over?</button>"); 
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 15 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (totalQuestion < questions.length) {
			time = 15;
			$("#game").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	}

	// reset score and counter parameters on restart
	function gameReset() {
		totalQuestion = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#game").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();

		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    $("#start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$("#game").on("click", ".choices", (function() {
		// alert("clicked!");
		var userGuess = $(this).text();
		if (userGuess === questions[totalQuestion].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
}); 