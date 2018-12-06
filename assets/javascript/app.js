$(document).ready(function() {

var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;

var number = 5;
var intervalId;

var timeout;

// changes start button color when hovered over
$(".start").hover(function(){
    $(this).css("background-color", "red");
    }, function(){
    $(this).css("background-color", "white");
});

//changed colors on answers on hover
$('.answer').hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "green");
});

//click start changes main div to show first q&a's
$('.start').on('click', function() {
    $('.question1').show();
    $('#time').show();
    $('.start').hide();
    $('#timeleft').text(run(number));
    
    //NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (number < 1) {
        $('#q1oot').show();
        $('.question1').hide();
        $('#time').hide();
        unanswered++;
    }
})

//first correct answer will show happy mick with 2 sec timer to move to next question
$('#r1').on('click', function() {
    $('#q1win').show();
    $('.question1').hide();
    $('#time').hide();
    correctAnswer++;

    timeout = setTimeout(function() {
        $('#q1win').hide();
        $('.question2').show();
        $('#time').show();
        number = 5;
        $('#timeleft').text(run(number));
        
    }, 3000)
})

// q1 wrong answers will show angry mick with 2 sec timer to move to next question
$('.w1').on('click', function(){
    $('#q1lose').show();
    $('.question1').hide();
    $('#time').hide();
    incorrectAnswer++;

    timeout = setTimeout(function() {
        $('#q1lose').hide();
        $('.question2').show();
        $('#time').show();
        number = 5;
        $('#timeleft').text(run(number));
        
    }, 3000)
})

//q2 right asnwer shows happy MJ with 2 sec timer to move to next q
$('#r2').on('click', function() {
    $('#q2win').show();
    $('.question2').hide();
    $('#time').hide();
    correctAnswer++;

    timeout = setTimeout(function() {
        $('#q2win').hide();
        $('.question3').show();
        $('#time').show();
        number = 5;
        $('#timeleft').text(run(number));
        
    }, 3000)
})

// q2 wrong answers will show angry mj with 2 sec timer to move to next question
$('.w2').on('click', function(){
    $('#q2lose').show();
    $('.question2').hide();
    $('#time').hide();
    incorrectAnswer++;

    timeout = setTimeout(function() {
        $('#q2lose').hide();
        $('.question3').show();
        $('#time').show();
        number = 5;
        $('#timeleft').text(run(number));
    }, 3000)
})

//q2 right asnwer shows happy MJ with 2 sec timer to move to next q
$('#r3').on('click', function() {
    $('#q3win').show();
    $('.question3').hide();
    $('#time').hide();
    correctAnswer++;

    timeout = setTimeout(function() {
        $('#q3win').hide();
        $('#gameover').show();
        $('#gameover').append('<div> Correct Answers: ' + correctAnswer)
        $('#gameover').append('<div> Incorrect Answers: ' + incorrectAnswer)
        $('#gameover').append('<div> Unanswered Answers: ' + unanswered)
        $('.restart').show();
        // $('.question3').show();
        // $('#time').show();
        // number = 5;
        // $('#timeleft').text(run(number));
        
    }, 3000)
})

// q2 wrong answers will show angry mj with 2 sec timer to move to next question
$('.w3').on('click', function(){
    $('#q3lose').show();
    $('.question3').hide();
    $('#time').hide();
    incorrectAnswer++;

    timeout = setTimeout(function() {
        $('#q3lose').hide();
        $('#gameover').show();
        $('#gameover').append('<div> Correct Answers: ' + correctAnswer)
        $('#gameover').append('<div> Incorrect Answers: ' + incorrectAnswer)
        $('#gameover').append('<div> Unanswered Answers: ' + unanswered)
        $('.restart').show();
        // $('.question3').show();
        // $('#time').show();
        // number = 5;
        // $('#timeleft').text(run(number));
    }, 3000)
})

$('.restart').on('click', function() {
    $('#gameover').hide();
    $('.question1').show();
    $('#time').show();
    $('.restart').hide();
    number = 5;
    $('#timeleft').text(run(number));
})
 
 
// defins run function to start interval
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
   
};
// decrement function
function decrement() {
    number--;
    $('#timeleft').html('<h2>' + number + '<h2>');
    if (number == 0) {
        clearInterval(intervalId);
    }
}

})
