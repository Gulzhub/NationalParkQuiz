var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name? ");
console.log('Welcome ' + userName);
console.log("Lets play the National Parks quiz \n");
console.log('just answer with the option name(A/B/C/D) that you think is right.\n')
var score=0;

//play function
function play(q, a){
  var userAnswer = readlineSync.question(q);
  if(userAnswer === a){
    console.log("You're right!")
    score = score + 1;
  }
  else{
    console.log('Wrong!');
  }
console.log('your current score is: ' + score)
console.log('----------')
}


//array of objects
var questions = [{question : "1.Pin Valley National Park is situated in:_____\nA.ANDHRA PRADESH\nB.HIMACHAL PRADESH\nC.MADHYA PRADESH\nD.ARUNACHAL PRADESH\nEnter the correct option: " , 
answer : 'B'},{question : "2.Home to the snow leopard, Hemis National Park is in:____\nA.LADAKH\nB.GOA\nC.MANIPUR\nD.MIZORAM\nEnter the correct option: ", answer : 'A'},{question : "3.Where is Manas National Park located in India?\nA.TRIPURA\nB.SIKKIM\nC.BIHAR\nD.ASSAM\nEnter the correct option: " , answer : 'D'},{question : "4.Nagarhole National Park is in which state?\nA.ANDHRA PRADESH\nB.MADHYA PRADESH\nC.KARNATAKA\nD.KERELA\nEnter the correct option: " , answer : 'C'},{question : "5.Where is Bandhavgarh National Park located?\nA.MEGHALAYA\nB.UTTAR PRADESH\nC.ODISHA\nD.MADHYA PRADESH\nEnter the correct option: ", answer: "D"}];

//loop
for(var i = 0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log('YAY!!! You scored: ' + score +'/5');
if(score >= 3){
  console.log("\nOMG!!You're one of the highest scorer. Please DM with a screenshot of the score to update the highscore chart")
}
console.log('\nHIGH SCORES\nGULZ::5\nAMIT::3')
