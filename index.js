var chalk = require('chalk');
var readlineSync = require('readline-sync');

var score = 0;

function welcome(){
  var userName = readlineSync.question(chalk.blue('May I have your name? '));
  console.log('--------------')
  console.log(chalk.redBright.bold ('Welcome ' + userName + "!, to the quiz 'Are you a anime fan'?"));
  console.log('--------------')
}
welcome();

var questions = [
  {
    question : "Which village does naruto belong? ",
    answer : "Leaf Village"
  },
  {
    question : "Who is the  main protagonist  of the show jujutsu kaisen?",
    answer : "Yuji Itadori"
  },
  {
    question : "What is the other word for ninja in Naruto? ",
    answer : "Shinobi"
  },
    {
    question : "How many tails does Kurama have? ",
    answer : "9"
  },
    {
    question : "How many seconds does Gojo ask to have with Itadori's 'Sukuna' form? ",
    answer : "10"
  }
];

function play(question,answer){
  var currentQuestion = readlineSync.question(chalk.magenta(question));
  if (currentQuestion.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Right Answer"));
    console.log('--------------')
    score++;
  }else{
    console.log(chalk.red("Wrong Answer"));
    console.log('--------------')
  }
}

function game(){
  for (var i=0; i<questions.length; i++) {
    
    play(questions[i].question, questions[i].answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
}
game();
showScores();