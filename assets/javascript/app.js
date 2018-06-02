//global Variables
var countdownTimer = {
	time: 30,
	reset: function() {
		this.time = 30;
	}
}
var correctAnswers = 0;
var wrongAnswers = 0;
var index = 0;

var timer = setInterval(decrement(), 1000);

function decrement() {
	$("#timer").html("<h2>" + countdownTimer.time + "</h2>")
    countdownTimer.time--;
};

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "cheers.wav");

//global funtions

function stop(){
	clearInterval(timer);
}
function loadQuestionTwo(){
	clearInterval(timer)
	countdownTimer.reset();
	$(".question").text(q2.question);
	$("#bigHarden").remove();
	$(".answerchoices").show();
	$("#buttonA").text(q2.possibleAnswers[0]);
	$("#buttonB").text(q2.possibleAnswers[1]);
	$("#buttonC").text(q2.possibleAnswers[2]);
	$("#buttonD").text(q2.possibleAnswers[3]);
	$("#timer").show()
	timer = setInterval(decrement, 1000);
}
function loadQuestionThree(){
	clearInterval(timer)
	countdownTimer.reset();
	$(".question").text(q3.question);
	$("#mikejordan").remove();
	$(".answerchoices1").show();
	$("#buttonA").text(q3.possibleAnswers[0]);
	$("#buttonB").text(q3.possibleAnswers[1]);
	$("#buttonC").text(q3.possibleAnswers[2]);
	$("#buttonD").text(q3.possibleAnswers[3]);
	$("#timer").show()
	
	timer = setInterval(decrement, 1000);
}
function loadQuestionFour(){
	clearInterval(timer)
	countdownTimer.reset();
	$(".question").text(q4.question);
	$("#iverson").remove();
	$(".answerchoices2").show();
	$("#buttonA").text(q4.possibleAnswers[0]);
	$("#buttonB").text(q4.possibleAnswers[1]);
	$("#buttonC").text(q4.possibleAnswers[2]);
	$("#buttonD").text(q4.possibleAnswers[3]);
	$("#timer").show()
	
	timer = setInterval(decrement, 1000);
}
function loadQuestionFive(){
	clearInterval(timer)
	countdownTimer.reset();
	$(".question").text(q5.question);
	$("#durant").remove();
	$(".answerchoices3").show();
	$("#buttonA").text(q5.possibleAnswers[0]);
	$("#buttonB").text(q5.possibleAnswers[1]);
	$("#buttonC").text(q5.possibleAnswers[2]);
	$("#buttonD").text(q5.possibleAnswers[3]);
	$("#timer").show()
	
	timer = setInterval(decrement, 1000);
}
function loadQuestionSix(){
	clearInterval(timer)
	countdownTimer.reset();
	$(".question").text(q6.question);
	$("#russ").remove();
	$(".answerchoices4").show();
	$("#buttonA").text(q6.possibleAnswers[0]);
	$("#buttonB").text(q6.possibleAnswers[1]);
	$("#buttonC").text(q6.possibleAnswers[2]);
	$("#buttonD").text(q6.possibleAnswers[3]);
	$("#timer").show()
	
	timer = setInterval(decrement, 1000);
}
function loadQuestionSeven(){
	clearInterval(timer)
	countdownTimer.reset();
	$(".question").text(q7.question);
	$("#vince").remove();
	$(".answerchoices5").show();
	$("#buttonA").text(q7.possibleAnswers[0]);
	$("#buttonB").text(q7.possibleAnswers[1]);
	$("#buttonC").text(q7.possibleAnswers[2]);
	$("#buttonD").text(q7.possibleAnswers[3]);
	$("#timer").show();
	
	timer = setInterval(decrement, 1000);
}
function loadQuestionEight(){
	clearInterval(timer)
	countdownTimer.reset();
	$(".question").text(q8.question);
	$("#lebron").remove();
	$(".answerchoices6").show();
	$("#buttonA").text(q8.possibleAnswers[0]);
	$("#buttonB").text(q8.possibleAnswers[1]);
	$("#buttonC").text(q8.possibleAnswers[2]);
	$("#buttonD").text(q8.possibleAnswers[3]);
	$("#timer").show();
	
	timer = setInterval(decrement, 1000);
}
function loadQuestionNine(){
	clearInterval(timer)
	countdownTimer.reset();
	$(".question").text(q9.question);
	$("#giannis").remove();
	$(".answerchoices7").show();
	$("#buttonA").text(q9.possibleAnswers[0]);
	$("#buttonB").text(q9.possibleAnswers[1]);
	$("#buttonC").text(q9.possibleAnswers[2]);
	$("#buttonD").text(q9.possibleAnswers[3]);
	$("#timer").show();
	
	timer = setInterval(decrement, 1000);
}
function loadQuestionTen(){
	clearInterval(timer)
	countdownTimer.reset();
	$(".question").text(q10.question);
	$("#kobe").remove();
	$(".answerchoices8").show();
	$("#buttonA").text(q10.possibleAnswers[0]);
	$("#buttonB").text(q10.possibleAnswers[1]);
	$("#buttonC").text(q10.possibleAnswers[2]);
	$("#buttonD").text(q10.possibleAnswers[3]);
	$("#timer").show();
	
	timer = setInterval(decrement, 1000);
}

function scoreCard (){
	$(".question").html("<p>Correct: " + correctAnswers + "<br> Incorrect: " + wrongAnswers + "</P>" );
}





$(document).ready(function(){
	$(".answerchoice").hide()
	$("#timer").hide()
});


var q1 = {
	question : 'What Houston Rockets Superstar wears jersey number 13?',
	possibleAnswers : ['A. Chris Paul',
				 'B. PJ Tucker',
				 'C. James Harden',
				 'D. Trevor Ariza'],
	key : [false, false, true, false],
	answer : 'C. James Harden'
};

var q2 = {
	question: 'What NBA legend won 6 championships with the Chicago Bulls?',
	possibleAnswers: ['A. Charles Barkley',
				 'B. Michael Jordan',
				 'C. Shaq',
				 'D. Larry Bird'],
	key : [false, true, false, false],
	answer : 'B. Michael Jordan'
};

var q3 = {
	question : 'Which NBA player was the first overall pick in the 1996 NBA draft',
	possibleAnswers : ['A. Kobe Bryant',
				 'B. Allen Iverson',
				 'C. Vince Carter',
				 'D. Steve Nash'],
	key : [false, true, false, false],
	answer : 'B. Allen Iverson'
};

var q4 = {
	question : 'Which 2017-2018 Golden State Warrior played college basketball at the University of Texas?',
	possibleAnswers : ['A. Kevin Durant',
				 'B. Draymond Green',
				 'C. Shaun Livingston',
				 'D. Klay Thompson'],
	key : [true, false, false, false],
	answer : 'A. Kevin Durant'
};

var q5 = {
	question : 'What NBA player averaged a triple-double in the 2016-2017 NBA season',
	possibleAnswers : ['A. Lebron James',
				 'B. Russel Westbrook',
				 'C. Kevin Durant',
				 'D. James Harden'],
	key : [false, true, false, false],
	answer : 'B. Russel Westbrook'
};

var q6 = {
	question : 'Who won the 2000 NBA all-star weekend slam dunk contest?',
	possibleAnswers : ['A. Vince Carter',
				 'B. Jason Richardson',
				 'C. Dwight Howard',
				 'D. Baron Davis'],
	key : [true, false, false, false],
	answer : 'A. Vince Carter'
};

var q7 = {
	question : 'Which player wore number 23 and helped his team defeat the Golden State Warriors in the NBA finals?',
	possibleAnswers : ['A. Kyrie Irving',
				 'B. Michael Jordan',
				 'C. LeBron James',
				 'D. Kobe Bryant'],
	key : [false, false, true, false],
	answer : 'C. Lebron James'
};

var q8 = {
	question : 'Which NBA player is known as the "Greek Freak"?',
	possibleAnswers : ['A. Dirk Nowitzki',
				 'B. Giannis Antekoumnpo',
				 'C. Joel Embiid',
				 'D. Tony Kukoc'],
	key : [false, true, false, false],
	answer : 'B. Giannis Antekoumnpo'
};

var q9 = {
	question : 'Which NBA great scored 81 points in one game',
	possibleAnswers : ['A. Steph Curry',
				 'B. Michael Jordan',
				 'C. LeBron James',
				 'D. Kobe Bryant'],
	key : [false, false, false, true],
	answer : 'D. Kobe Bryant'
};

var q10 = {
	question : "Which NBA player left his dad's team to join the Boston Celtics",
	possibleAnswers : ['A. Kyle Korver',
				  'B. Kyrie Irving',
				  'C. Tristan Thompson',
				  'D. Kevin Love'],
	key : [false, true, false, false],
	answer : 'B. Kyrie Irving'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function question1correct(){
    $(".question").text("Correct!")
    $(".answerchoice").html("<img src='../images/hardenonfire.jpg' id='bigHarden'>")
	$("#bigHarden").css({height: "500px", width: "300px"})
	audioElement.play()
	correctAnswers++;
}
function question1wrong(){
    $(".question").text("Thats wrong! The correct answer is James Harden!");
    $(".answerchoice").html("<img src='../images/hardenonfire.jpg' id='bigHarden'>");
	$("#bigHarden").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function question2correct(){
    $(".question").text("Correct!")
    $(".answerchoices").html("<img src='../images/kingjordan.jpg' id='mikeJordan'>")
	$("#mikejordan").css({height: "500px", width: "300px"})
	correctAnswers++;
}
function question2wrong(){
    $(".question").text("Thats wrong! The correct answer is Michael Jordan!");
    $(".answerchoices").html("<img src='../images/kingjordan.jpg' id='mikeJordan'>");
	$("#mikejordan").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function question3correct(){
    $(".question").text("Correct!")
    $(".answerchoices1").html("<img src='../images/iverson.jpg' id='iverson'>")
	$("#iverson").css({height: "500px", width: "300px"})
	correctAnswers++;
}
function question3wrong(){
    $(".question").text("Thats wrong! The correct answer is Allen Iverson!");
    $(".answerchoices1").html("<img src='../images/iverson.jpg' id='iverson'>");
	$("#iverson").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function question4correct(){
    $(".question").text("Correct!")
    $(".answerchoices2").html("<img src='../images/durant.jpg' id='durant'>")
	$("#durant").css({height: "500px", width: "300px"})
	correctAnswers++;
}
function question4wrong(){
    $(".question").text("Thats wrong! The correct answer is Kevin Durant!");
    $(".answerchoices2").html("<img src='../images/durant.jpg' id='durant'>");
	$("#durant").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function question5correct(){
    $(".question").text("Correct!")
    $(".answerchoices3").html("<img src='../images/russ.jpg' id='russ'>")
	$("#russ").css({height: "500px", width: "300px"})
	correctAnswers++;
}
function question5wrong(){
    $(".question").text("Thats wrong! The correct answer is Russel Westbrook!");
    $(".answerchoices3").html("<img src='../images/russ.jpg' id='russ'>");
	$("#russ").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function question6correct(){
    $(".question").text("Correct!")
    $(".answerchoices4").html("<img src='../images/vince.jpg' id='vince'>")
	$("#vince").css({height: "500px", width: "300px"})
	correctAnswers++;
}
function question6wrong(){
    $(".question").text("Thats wrong! The correct answer is Vince Carter!");
    $(".answerchoices4").html("<img src='../images/vince.jpg' id='vince'>");
	$("#vince").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function question7correct(){
    $(".question").text("Correct!")
    $(".answerchoices5").html("<img src='../images/kingjames.jpg' id='lebron'>")
	$("#lebron").css({height: "500px", width: "300px"})
	correctAnswers++;
}
function question7wrong(){
    $(".question").text("Thats wrong! The correct answer is Lebron James!");
    $(".answerchoices5").html("<img src='../images/kingjames.jpg' id='lebron'>");
	$("#lebron").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function question8correct(){
    $(".question").text("Correct!")
    $(".answerchoices6").html("<img src='../images/giannis.jpg' id='giannis'>")
	$("#giannis").css({height: "500px", width: "300px"})
	correctAnswers++;
}
function question8wrong(){
    $(".question").text("Thats wrong! The correct answer is Giannis Antekoumnpo!");
    $(".answerchoices6").html("<img src='../images/giannis.jpg' id='giannis'>");
	$("#giannis").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function question9correct(){
    $(".question").text("Correct!")
    $(".answerchoices7").html("<img src='../images/kobe.jpg' id='kobe'>")
	$("#kobe").css({height: "500px", width: "300px"})
	correctAnswers++;
}
function question9wrong(){
    $(".question").text("Thats wrong! The correct answer is Kobe Bean Bryant!");
    $(".answerchoices7").html("<img src='../images/kobe.jpg' id='kobe'>");
	$("#kobe").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function question10correct(){
    $(".question").text("Correct!")
    $(".answerchoices8").html("<img src='../images/kyrie.jpg' id='kyrie'>")
	$("#kyrie").css({height: "500px", width: "300px"})
	correctAnswers++;
}
function question10wrong(){
    $(".question").text("Thats wrong! The correct answer is Kyrie Irving!");
    $(".answerchoices8").html("<img src='../images/kyrie.jpg' id='kyrie'>");
	$("#kyrie").css({height: "500px", width: "300px"});
	wrongAnswers++;
}
function newGame(){
	$("#startGame").show();
	$(".answerchoices8").attr("class", "answerchoice")
	$(".answerchoice").hide()
	$("#timer").hide()
}




$("#startGame").on("click", function(){
    $("#startGame").hide();
    $(".question").text(q1.question);
    $(".answerchoice").show();
    $("#buttonA").text(q1.possibleAnswers[0]);
    $("#buttonB").text(q1.possibleAnswers[1]);
    $("#buttonC").text(q1.possibleAnswers[2]);
	$("#buttonD").text(q1.possibleAnswers[3]);
	$("#timer").show()
    
    timer = setInterval(decrement, 1000);


    $(".answerchoice").on("click", function(){
        if(this.id == 'buttonA') {
            var answerChosen = 'A';
        } else if(this.id == 'buttonB') {
            answerChosen = 'B';
        } else if (this.id == 'buttonC') {
            answerChosen = 'C';
        } else if (this.id == 'buttonD') {
            answerChosen = 'D';
        } 
        if ((answerChosen == 'A') && (q1.key[0] == true)) {
            question1correct();
        } else if (answerChosen == 'A') {
            question1wrong();
        }
        else if ((answerChosen == 'B') && (q1.key[1] == true)) {
            setTimeout(question1correct(), 3000)
        } else if (answerChosen == 'B') {
            question1wrong();
        }
       	else if ((answerChosen == 'C') && (q1.key[2] == true)) {
            setTimeout(question1correct(), 3000)
        } else if (answerChosen == 'C') {
            question1wrong();
        }
       		else if ((answerChosen == 'D') && (q1.key[3] == true)) {
            question1correct()
        } else if (answerChosen == 'D') {
            question1wrong();
        }
		clearInterval(timer)
		$(".answerchoice").attr("class", "answerchoices")	
		//timer then on to the next question
		
		setTimeout(loadQuestionTwo, 3000);
	

	$(".answerchoices").on("click", function(){
        console.log(this);
        if(this.id == 'buttonA') {
            var answerChosen = 'A';
        } else if(this.id == 'buttonB') {
            answerChosen = 'B';
        } else if (this.id == 'buttonC') {
            answerChosen = 'C';
        } else if (this.id == 'buttonD') {
            answerChosen = 'D';
        } 
        if ((answerChosen == 'A') && (q2.key[0] == true)) {
            question2correct();
        } else if (answerChosen == 'A') {
            question2wrong();
        }
        if ((answerChosen == 'B') && (q2.key[1] == true)) {
            question2correct();
        } else if (answerChosen == 'B') {
            question2wrong();
        }
       if ((answerChosen == 'C') && (q2.key[2] == true)) {
            question2correct();
        } else if (answerChosen == 'C') {
            question2wrong();
        }
       if ((answerChosen == 'D') && (q2.key[3] == true)) {
            question2correct()
        } else if (answerChosen == 'D') {
            question2wrong();
        }
        stop();
			
		//timer then on to the next question
		$(".answerchoices").attr("class", "answerchoices1")
		setTimeout(loadQuestionThree, 3000);



		$(".answerchoices1").on("click", function(){
			console.log(this);
			if(this.id == 'buttonA') {
				var answerChosen = 'A';
			} else if(this.id == 'buttonB') {
				answerChosen = 'B';
			} else if (this.id == 'buttonC') {
				answerChosen = 'C';
			} else if (this.id == 'buttonD') {
				answerChosen = 'D';
			} 
			if ((answerChosen == 'A') && (q3.key[0] == true)) {
				question3correct();
			} else if (answerChosen == 'A') {
				question3wrong();
			}
			if ((answerChosen == 'B') && (q3.key[1] == true)) {
				question3correct();
			} else if (answerChosen == 'B') {
				question3wrong();
			}
		   if ((answerChosen == 'C') && (q3.key[2] == true)) {
				question3correct();
			} else if (answerChosen == 'C') {
				question3wrong();
			}
		   if ((answerChosen == 'D') && (q3.key[3] == true)) {
				question3correct()
			} else if (answerChosen == 'D') {
				question3wrong();
			}
			stop();
				
			//timer then on to the next question
			$(".answerchoices1").attr("class", "answerchoices2")
			setTimeout(loadQuestionFour, 3000);


			$(".answerchoices2").on("click", function(){
				console.log(this);
				if(this.id == 'buttonA') {
					var answerChosen = 'A';
				} else if(this.id == 'buttonB') {
					answerChosen = 'B';
				} else if (this.id == 'buttonC') {
					answerChosen = 'C';
				} else if (this.id == 'buttonD') {
					answerChosen = 'D';
				} 
				if ((answerChosen == 'A') && (q4.key[0] == true)) {
					question4correct();
				} else if (answerChosen == 'A') {
					question4wrong();
				}
				if ((answerChosen == 'B') && (q4.key[1] == true)) {
					question4correct();
				} else if (answerChosen == 'B') {
					question4wrong();
				}
			   if ((answerChosen == 'C') && (q4.key[2] == true)) {
					question4correct();
				} else if (answerChosen == 'C') {
					question4wrong();
				}
			   if ((answerChosen == 'D') && (q4.key[3] == true)) {
					question4correct()
				} else if (answerChosen == 'D') {
					question4wrong();
				}
				stop();
					
				//timer then on to the next question
				$(".answerchoices2").attr("class", "answerchoices3")
				setTimeout(loadQuestionFive, 3000);
	


				$(".answerchoices3").on("click", function(){
					console.log(this);
					if(this.id == 'buttonA') {
						var answerChosen = 'A';
					} else if(this.id == 'buttonB') {
						answerChosen = 'B';
					} else if (this.id == 'buttonC') {
						answerChosen = 'C';
					} else if (this.id == 'buttonD') {
						answerChosen = 'D';
					} 
					if ((answerChosen == 'A') && (q5.key[0] == true)) {
						question5correct();
					} else if (answerChosen == 'A') {
						question5wrong();
					}
					if ((answerChosen == 'B') && (q5.key[1] == true)) {
						question5correct();
					} else if (answerChosen == 'B') {
						question5wrong();
					}
				   if ((answerChosen == 'C') && (q5.key[2] == true)) {
						question5correct();
					} else if (answerChosen == 'C') {
						question5wrong();
					}
				   if ((answerChosen == 'D') && (q5.key[3] == true)) {
						question5correct()
					} else if (answerChosen == 'D') {
						question5wrong();
					}
					stop();
						
					//timer then on to the next question
					$(".answerchoices3").attr("class", "answerchoices4")
					setTimeout(loadQuestionSix, 3000);


					$(".answerchoices4").on("click", function(){
						console.log(this);
						if(this.id == 'buttonA') {
							var answerChosen = 'A';
						} else if(this.id == 'buttonB') {
							answerChosen = 'B';
						} else if (this.id == 'buttonC') {
							answerChosen = 'C';
						} else if (this.id == 'buttonD') {
							answerChosen = 'D';
						} 
						if ((answerChosen == 'A') && (q6.key[0] == true)) {
							question6correct();
						} else if (answerChosen == 'A') {
							question6wrong();
						}
						if ((answerChosen == 'B') && (q6.key[1] == true)) {
							question6correct();
						} else if (answerChosen == 'B') {
							question6wrong();
						}
					   if ((answerChosen == 'C') && (q6.key[2] == true)) {
							question6correct();
						} else if (answerChosen == 'C') {
							question6wrong();
						}
					   if ((answerChosen == 'D') && (q6.key[3] == true)) {
							question6correct()
						} else if (answerChosen == 'D') {
							question6wrong();
						}
						stop();
							
						//timer then on to the next question
						$(".answerchoices4").attr("class", "answerchoices5")
						setTimeout(loadQuestionSeven, 3000);



					$(".answerchoices5").on("click", function(){
						console.log(this);
						if(this.id == 'buttonA') {
							var answerChosen = 'A';
						} else if(this.id == 'buttonB') {
							answerChosen = 'B';
						} else if (this.id == 'buttonC') {
							answerChosen = 'C';
						} else if (this.id == 'buttonD') {
							answerChosen = 'D';
						} 
						if ((answerChosen == 'A') && (q7.key[0] == true)) {
							question7correct();
						} else if (answerChosen == 'A') {
							question7wrong();
						}
						if ((answerChosen == 'B') && (q7.key[1] == true)) {
							question7correct();
						} else if (answerChosen == 'B') {
							question7wrong();
						}
					   if ((answerChosen == 'C') && (q7.key[2] == true)) {
							question7correct();
						} else if (answerChosen == 'C') {
							question7wrong();
						}
					   if ((answerChosen == 'D') && (q7.key[3] == true)) {
							question7correct()
						} else if (answerChosen == 'D') {
							question7wrong();
						}
						stop();
							
						//timer then on to the next question
						$(".answerchoices5").attr("class", "answerchoices6")
						setTimeout(loadQuestionEight, 3000);



						$(".answerchoices6").on("click", function(){
							console.log(this);
							if(this.id == 'buttonA') {
								var answerChosen = 'A';
							} else if(this.id == 'buttonB') {
								answerChosen = 'B';
							} else if (this.id == 'buttonC') {
								answerChosen = 'C';
							} else if (this.id == 'buttonD') {
								answerChosen = 'D';
							} 
							if ((answerChosen == 'A') && (q8.key[0] == true)) {
								question8correct();
							} else if (answerChosen == 'A') {
								question8wrong();
							}
							if ((answerChosen == 'B') && (q8.key[1] == true)) {
								question8correct();
							} else if (answerChosen == 'B') {
								question8wrong();
							}
						   if ((answerChosen == 'C') && (q8.key[2] == true)) {
								question8correct();
							} else if (answerChosen == 'C') {
								question8wrong();
							}
						   if ((answerChosen == 'D') && (q8.key[3] == true)) {
								question8correct()
							} else if (answerChosen == 'D') {
								question8wrong();
							}
							stop();
								
							//timer then on to the next question
							$(".answerchoices6").attr("class", "answerchoices7")
							setTimeout(loadQuestionNine, 3000);


							$(".answerchoices7").on("click", function(){
								console.log(this);
								if(this.id == 'buttonA') {
									var answerChosen = 'A';
								} else if(this.id == 'buttonB') {
									answerChosen = 'B';
								} else if (this.id == 'buttonC') {
									answerChosen = 'C';
								} else if (this.id == 'buttonD') {
									answerChosen = 'D';
								} 
								if ((answerChosen == 'A') && (q9.key[0] == true)) {
									question9correct();
								} else if (answerChosen == 'A') {
									question9wrong();
								}
								if ((answerChosen == 'B') && (q9.key[1] == true)) {
									question9correct();
								} else if (answerChosen == 'B') {
									question9wrong();
								}
							   if ((answerChosen == 'C') && (q9.key[2] == true)) {
									question9correct();
								} else if (answerChosen == 'C') {
									question9wrong();
								}
							   if ((answerChosen == 'D') && (q9.key[3] == true)) {
									question9correct()
								} else if (answerChosen == 'D') {
									question9wrong();
								}
								stop();
									
								//timer then on to the next question
								$(".answerchoices7").attr("class", "answerchoices8")
								setTimeout(loadQuestionTen, 3000);
								

								$(".answerchoices8").on("click", function(){
									console.log(this);
									if(this.id == 'buttonA') {
										var answerChosen = 'A';
									} else if(this.id == 'buttonB') {
										answerChosen = 'B';
									} else if (this.id == 'buttonC') {
										answerChosen = 'C';
									} else if (this.id == 'buttonD') {
										answerChosen = 'D';
									} 
									if ((answerChosen == 'A') && (q10.key[0] == true)) {
										question10correct();
									} else if (answerChosen == 'A') {
										question10wrong();
									}
									if ((answerChosen == 'B') && (q10.key[1] == true)) {
										question10correct();
									} else if (answerChosen == 'B') {
										question10wrong();
									}
								   if ((answerChosen == 'C') && (q10.key[2] == true)) {
										question10correct();
									} else if (answerChosen == 'C') {
										question10wrong();
									}
								   if ((answerChosen == 'D') && (q10.key[3] == true)) {
										question10correct()
									} else if (answerChosen == 'D') {
										
										question10wrong();
									}
									stop();
										
									//timer then on to the next question
								
									setTimeout(scoreCard(), 3000);

									
									function newGame(){
										clearInterval(timer);
										$("#startGame").show();
										$(".answerchoices8").attr("class", "answerchoice")
										$(".answerchoice").hide()
										$("#timer").hide()
									}

									
	}

);})})})})})})})})})})
