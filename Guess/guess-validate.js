/* Guess Validator 
*By Sean Dinan
*/

var answer = Math.floor(Math.random()*100)+1;
// console.log(answer);
var guess = 0;
var turns = 0;
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
  if(guess > 0 && < 101) return true;
  else return false;
