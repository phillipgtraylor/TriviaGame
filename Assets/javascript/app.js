


function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var right = 0;
	var wrong = 0;

	if (question1 === "Needles") {
			right++;
	} else {
			wrong++;
	}
	if (question2 === "Leonardo da Vinci") {
			right++;
	} else {
			wrong++;
	}
	if (question3 === "Cheese") {
			right++;
	} else {
			wrong++;
	}
	if (question4 === "The Lombardi Trophy") {
			right++;
	} else {
			wrong++;
	}
	if (question5 === "die hard.") {
			right++;
	} else {
			wrong++;
	}

	var gifs = ["assets/images/giphy.gif", "assets/images/skelegif.gif", "assets/images/onepunch.gif",
	 "assets/images/chuck.gif", "assets/images/4.gif", "assets/images/opcat.gif"];
	var score;

	if (right === 0) {
		gifNumber = 0;
	} else if (right ===1) {
		gifNumber = 1;
	} else if (right ===2) {
		gifNumber = 2;
	} else if (right ===3) {
		gifNumber = 3;
	} else if (right ===4) {
		gifNumber = 4;
	} else if (right ===5) {
		gifNumber = 5;
	}

	document.getElementById("submittedButton").style.visibility = "visable";
	document.getElementById("right").innerHTML = right + " right.";
	document.getElementById("wrong").innerHTML =  wrong + " wrong.";
	document.getElementById("gif").src = gifs[gifNumber];
	//document.getElementById("reset?")
}
window.onload // not sure if want
// need to set the timer to not go off if finished button is pressed
var time = 75;
var teatime = "Time left: ";
setInterval("timer()", 1000);
function timer(){
	time--;
	$("#quizTimer").text(teatime + time);
	if (time <= 0) {
		clearInterval(time)
		$("body").text("Time is up, try searching faster next time.").append('<img src= "ghost.png">');
	} else if (time <= -1){
		$("#quizTimer").remove();
		console.log("#quizTimer");

	}
}
//function page(){
//	if (right>6) {
//	$("#body").text("test")
//}
//}