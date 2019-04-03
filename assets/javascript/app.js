
$(document).ready(function() {
   
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();

var questions = [
    {
        question: "What is the capital city of Puerto Rico?",
        choices: ["San Juan", "Caracas",  "Asuncion", "Montevideo"],
        correctAnswer: "San Juan",        
    },
    {
        question: "What is the largest bone in the human body?",
        choices: ["Tibia" ,  "Femur" , "Spine", "Scapula"],
        correctAnswer: "Femur",
    },
    {
        question: "What was the first disney movie ever made?",
        choices: ["Pinocchio", "Snow White and the Seven Dwarfs" , "Fantasia", "Sleeping Beaty"],
        correctAnswer: "Snow White and the Seven Dwarfs",
    },
    {
        question: "Who was the mexican president during the period of 1970-1976?",
        choices: ["Miguel de la Madrid", "Gustavo Diaz Ordaz", "Adolfo Lopez Mateos", "Luis Echeverria"],
        correctAnswer: "Luis Echeverria",
    },
    {
        question: "What element begins with 'Na'? ",
        choices: ["Magnesium", "Sodium", "Nitrogen", "Nickel"],
        correctAnswer: "Sodium",
    }];




    //   //  Once number hits zero...
    //   if (number === 0) {

    //     //  ...run the stop function.
    //     stop();

    //     //  Alert the user that time is up.
    //     alert("Time Up!");
    //   }
    // }
