$(document).ready(function() {

    var correctGuesses = 0;
    var incorrectGuesses = 0;
    var time = 15;
    var totalQuestion = 0;   

    var questions = [
        {
        question: "Who painted `The Mona Lisa`?",
        choices: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
        image: "<img src= 'assets/images/daVinci.jpeg' class='img-daVinci'>"
        },
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
        question: "Karl Marx's ideology advocated: ",
        choices: ["a classed unique society", "a united society", "a classed society", "None of the above"],
        correctAnswer: "a classed society",
	    image: "<img src= 'assets/images/marx.jpeg' class='img-marx'>"
      },
      {
        question: "Where was Pablo Neruda from?",
        choices: ["Chile", "Argentina", "Mexico", "Venezuela"],
        correctAnswer: "Chile",
        image: "<img src= 'assets/images/chile.jpeg' class='img-chile'>"
	  }, 
	  {
        question: "What was the first Disney movie ever made?",
        choices: ["Pinocchio", "Snow White and the Seven Dwarfs" , "Fantasia", "Sleeping Beaty"],
        correctAnswer: "Snow White and the Seven Dwarfs",
	    image: "<img src= 'assets/images/snowWhite.jpeg' class='img-snowWhite'>"
	  }, 
	  {
        question: "Who was the mexican president during the period of 1970-1976?",
        choices: [ "Luis Echeverria", "Miguel de la Madrid", "Gustavo Diaz Ordaz", "Adolfo Lopez Mateos"],
        correctAnswer: "Luis Echeverria",
	    image: "<img src= 'assets/images/echeverria.jpeg' class='img-echeverria'>"
      }, 
      {
        question: "Which is the smallest country in the world?",
        choices: ["Maldives", "Liechtenstein", "Monaco", "Vatican City"],
        correctAnswer: "Vatican City",
	    image: "<img src= 'assets/images/vatican.jpeg' class='img-vatican'>"
      },
      {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        choices: ["Physics and Chemistry", "Physiology or Medicine", "Literature, Peace and Economics", "All of the above"],
        correctAnswer: "All of the above",
	    image: "<img src= 'assets/images/nobel.jpeg' class='img-vatican'>"
      },
	  {
        question: "What element begins with 'Na'? ",
        choices: ["Magnesium", "Sodium", "Nitrogen", "Nickel"],
        correctAnswer: "Sodium",
	    image: "<img src= 'assets/images/sodium.jpeg' class='img-sodium'>"
      },
      {
        question: "Richter scale is used for measuring",
        choices: ["Density of liquid", "Intensity of earthquakes", "Velocity of wind", "Humidity of air"],
        correctAnswer: "Intensity of earthquakes",
	    image: "<img src= 'assets/images/richter.jpeg' class='img-vatican'>"
      },
    ];
    
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

	function resultsScreen() {
        var totalScore = "<h3>Total score</h3>"; 
		$("#game").html("<p>" + totalScore + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#game").append("<button id='start'>Start Over?</button>"); 
		resetGame();
		$("#start").click(nextQuestion);
	}

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

	function resetGame() {
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