
var time = 25;
var timerId;
var correct = 0;
var missed = 0;




var questions = [
    {
        question: "Lt Commander Worf son named is Alexander?",
        answers: ["true", "false"],
        correctAns: "true"

    },

    {
        guestion: "Captin Pichard was never a Borg?",
        answers: ["true", "false"],
        correctAns: "false"

    },
    {
        question: "Commandor Data has a borther named Lor?",
        answer: ["true", "false"],
        correctAns: "true"
    }

];

// setInterval(() => {

//  }, interval);
//  setTimeout(() => {

//  }, timeout);

function decrementTime() {

    timerId = setInterval(function () {
        time--;
        console.log("time")
        $("#time").html(time);

        if (time === 0) {
            clearInterval(timerId)
            endGame();
        }

    }, 1 * 1000);
}

function endGame() {

}


$(document).ready(function () {

    $("#startGame").on("click", function () {
        console.log("start game")
        $("#startGame").hide();
        decrementTime();

    })

    $("#endGame").on("click", function () {
        endGame();
    })
});









    //submitButton.addEventListener('click', showResults);







//$("#qOne").on("submit", function(event) {
    ////event.preventDefault();

//}

//)

//}





//function startGame()
//$(".start-button").on("click");


//var qOne = [
    //{
     // qOne: "What was Lt. Commandor Worf's sons name?",
     // answers: {
      //  a: "Worf Jr.",
     //   b: "Alexander",
     //   c: "Andrew",
    //  },
     // correctAnswer: "c"

     // function buildQuiz(){}

//function showResults(){}

// display quiz right away
//buildQuiz();

// on submit, show results















// Create a trivia form with multiple choice or True/false options (my choice)
// Player will have a limited amount of time to finish the quiz
// Game will end when the time runs out. Page
// Page must reveal the number of questions that the players answer correctly
// Player can only pick one answer per question.
