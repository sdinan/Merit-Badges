/* Guess Advanced
*By Sean Dinan
*/

var answer = Math.floor(Math.random()*100)+1;
alert(answer);
var guess = 0;
var turns = 0;
var again = true;
var games = 0;
var totalTurns =0;
if (again = true) games++ {
  while (guess != answer){
  guess=prompt("Guess my number (1-100)");
    if (guess =="q") break;
    if (validator(guess)==true){  
      turns++;
      if(guess<answer) alert("too low");
      else if(guess>answer) alert("too high");
    }
  else alert("Invalid Guess retry");
}
if (guess == answer) alert("You got in "+turns+" turns");
else alert("quitter");

function validator(guess){
  if(guess > && <101) return true;
  else return false;
}
}
function gameStats (turns) {
  alert("you guessed it in "+turns+"turns!")
  totalTurns += turns
  averageTurns = totalTurns/games
  alert("You won"+game+"with an average of"+averageTurns+"turns per game")
}
function newgame () {
  confirm("Would you like to play again")
  var again = input("you want to play again type true if uou don't type false")
  if again = true
    return true
  else alert("THank you for playing")
    return false

