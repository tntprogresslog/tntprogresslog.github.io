/*cashing the DOM*/
var userScore= 0;
var compScore= 0;
const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const scoreBoard_div= document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div =document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div= document.getElementById("scissors");
/*DOM cashed*/
const userWord= "(user)".fontsize(3).sub();
const compWord= "(comp)".fontsize(3).sub();	


function getCompChoice(){
	const choices =['rock','paper','scissors'];
	const rand = Math.floor(Math.random()*3); // numbers [0,3)
	return choices[rand];
}

function convertChoice(choice){
	if (choice=="rock")
		return "Rock";
	if (choice=="paper")
		return "Paper";
	return "Scissors";
}

function win(user, comp){
	userScore++;
	userScore_span.innerHTML=userScore;
	result_p.innerHTML= convertChoice(user)+userWord+ " beats " + convertChoice(comp)+compWord + ". You win!";
	document.getElementById(user).classList.add("green-glow");
	setTimeout(function() {document.getElementById(user).classList.remove("green-glow")}, 270);
}

// setTimeout(function() {console.log("Hi")}, 5000);

function lose(user, comp){
	compScore++;
	compScore_span.innerHTML=compScore;
	result_p.innerHTML=  convertChoice(user)+userWord  + " loses to " + convertChoice(comp)+compWord+ ". You lose...";
	document.getElementById(user).classList.add("red-glow");
	setTimeout(function() {document.getElementById(user).classList.remove("red-glow")}, 270);
}

function draw(user, comp){
	result_p.innerHTML=  convertChoice(user)+userWord  + " equals " + convertChoice(comp)+compWord+ ". It's a draw.";
	document.getElementById(user).classList.add("grey-glow");
	setTimeout(function() {document.getElementById(user).classList.remove("grey-glow")}, 270);
}	

function reset(){
	result_p.innerHTML = "Results will show here.";
	userScore=0;
	compScore=0;
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
}

function game(userChoice){
	const compChoice = getCompChoice();
	switch(userChoice + compChoice){
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			win(userChoice, compChoice);
			break;

		case 'scissorsrock':
		case 'rockpaper':
		case 'paperscissors':
			lose(userChoice, compChoice);
			break;
		default: 
			draw(userChoice, compChoice);
			break;
	}

}

function main(){
	rock_div.addEventListener('click',function(){
		game('rock');
	})
	rock_div.addEventListener('keypress',function(e){
		if(e.key==="Enter")
			game('rock');
	})
	paper_div.addEventListener('click',function(){
		game('paper');
	})
	scissors_div.addEventListener('click',function(){
		game('scissors');
	})
}

main();
