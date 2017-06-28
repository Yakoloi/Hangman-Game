var wordArray = ['cat', 'dog', 'sheep', 'crow', 'cow', 'pig', 'racoon'];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(randomWord);
var answerArray = [];
var playerGuess;
var score = 0;
var letterCount = randomWord.length;
var playerGuess;
var guessCanvas = "";
console.log("guesscanvas: " + guessCanvas)

for (var i = 0; i < randomWord.length; i++) {
  answerArray[i] = "*";
  document.getElementById("demo").innerHTML = answerArray.join(" ");
}
console.log("answerArray: " + answerArray)

document.getElementById("score").innerHTML = score;



var guessed;



document.onkeyup = function(event) {

  playerGuess = event.key;
  guessed = guessCanvas.includes(playerGuess);
  console.log("guessed boolean: " + guessed);
  console.log("Guess Canvas " + guessCanvas);
  guessCanvas = guessCanvas + event.key;
//if guess is true do not execute this
if (guessed === false){
  for (var i = 0; i < randomWord.length; i++) {
    if (randomWord[i] == playerGuess) {
      answerArray[i] = playerGuess;
      console.log("randomWord indexed letter: " + randomWord[i]);
      console.log("answerArray status: " + answerArray[i]);
      document.getElementById("demo").innerHTML = answerArray.join(" ");
      letterCount--;
      console.log("letterCount: " + letterCount);
    }
  }
}
  if (letterCount == 0) {
    score++;
  }
  document.getElementById("score").innerHTML = score;

}
