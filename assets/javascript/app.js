$(document).ready (function(){

// Hide score div
$("#scores").hide();

// Global Variables

// array of right answers
var rightAnswers = ["q1_o3","q2_o2","q3_o3","q4_o4","q5_o4","q6_o1","q7_o2","q8_o4"];
var userInput = [];
var correctAnswer = 0;
var wrongAnswer = 0;
var timeRemaining = 60;
var timerID;

// on.click function to start the game
$("body").on("click", "#start", function(){

// Use setInterval fucntion to start the timer and write the seconds into jumbotron
timerID = setInterval(countdown, 1000);
       function countdown() {
           if (timeRemaining === -1) {
               clearTimeout(timerID);
               resultCount();
               $("#questions").hide();
               $("#start").hide();
               $("#scores").show();
           }
           else {
               $("#secsRemaining").text(timeRemaining);
               timeRemaining--;
           }
       }
});
// after submitting the game
$("body").on("click", "#submit", function(){
    clearTimeout(timerID);
    resultCount();
    $("#questions").hide();
    $("#start").hide();
    $("#scores").show();    
    timeRemaining = 60;
});

// compare the user input array against the right answer array in each question array, if user input matches correct answer correct answer ++, else wrong answer ++
function resultCount(){
    var checkQ1 = $("input[name='radioQ1']:checked").val();
       console.log(checkQ1);
    var checkQ2 = $("input[name='radioQ2']:checked").val();
        console.log(checkQ2);
    var checkQ3 = $("input[name='radioQ3']:checked").val();
    console.log(checkQ3);
    var checkQ4 = $("input[name='radioQ4']:checked").val();
    console.log(checkQ4);
    var checkQ5 = $("input[name='radioQ5']:checked").val();
    console.log(checkQ5);
    var checkQ6 = $("input[name='radioQ6']:checked").val();
    console.log(checkQ6);
    var checkQ7 = $("input[name='radioQ7']:checked").val();
    console.log(checkQ7);
    var checkQ8 = $("input[name='radioQ8']:checked").val();
    console.log(checkQ8);
    userInput = [checkQ1, checkQ2, checkQ3, checkQ4, checkQ5, checkQ6, checkQ7, checkQ8];
    for (var i=0; i<userInput.length; i++){
        if(userInput[i] === rightAnswers[i]){
        correctAnswer++;            
        }
        if (userInput[i] === null){
            wrongAnswer++;           
        }
        else {
            wrongAnswer++;            
        }
    };
$('input[type=radio]').prop('checked', false);  
}
// display scores
$("#correctAnswers").text(correctAnswer);
$("#wrongAnswers").text(wrongAnswer);
});