// var startTime = 45;
var time = 45;
var NumQuestions = 5;
var score = 0;
var correctA = ["a", "b", "a", "a", "b"];
var results = 0;














function yourAnswers() {
  var q1 = document.forms["trivia"]["q1"].value;
  var q2 = document.forms["trivia"]["q2"].value;
  var q3 = document.forms["trivia"]["q3"].value;
  var q4 = document.forms["trivia"]["q4"].value;
  var q5 = document.forms["trivia"]["q5"].value;



  //gives an alert to the user that the messed a question
  if (q1 === null || q1 === "") {
    alert("Where is number 1");
    return false;
  }
  if (q2 === null || q2 === "") {
    alert("Where is number 2");
    return false;
  }
  if (q3 === null || q3 === "") {
    alert("Where is number 3");
    return false;
  }
  if (q4 === null || q4 === "") {
    alert("Where is number 4");
    return false;
  }
  if (q5 === null || q5 === "") {
    alert("Where is number 5");
    return false;
  }


  //$(document).ready(function () {
  //function startGame() {
  // $("#startGame").hide();
  // $("#endGame").show();
  //decrementTime();


  // this is suppose to work with my timer. My tutor helped me with this one. However i can't get it to work anymore.

  //   for (var i = 0; i < 5; i++) {
  //      $("#question").append("<h2>" + question[i].question + "</h2>");
  //      for (var a = 0; a < question[i].correctA.lenght; a++) {
  //          $("#question").append("<input type= 'radio' name-'question" + i + " 'value='" + question[i].correctA[a] + "'>'" + question[i].answers[a]);
  //      }

  // }

  

  function startTime () {
    time = time - 1;
    if (time < 45) {
      startTime.innerHTML = time;
      console.log(startTime);
    }
    if (time < 1) {
      window.clearInterval(reset);
    }
  }  


  reset = setInterval("startTime()", 600);

  // $("#startGame").click(function(){
  // //   
  //   counter = setInterval(timer, 60);
  // //  
  //  });

  // function timer() {
  //   count--;
  //   if (count <= 0) clearInterval(counter);
  //   return;
  // }

  // $("startTime").html("Time: " + "00: " + count + "secs"); {



  //put for loop here
  for (i = 1; i <= NumQuestions; i++) {
    if (eval("q" + i) === correctA[i - 1]) {
      score++;
    }

  }

  //displays the score
  var results = document.getElementById("results");
  results.innerHTML = "<h3> Your got <span>" + score + " out of " + NumQuestions + "</span></h3>";

return false;
}
