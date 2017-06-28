var gameStart = false;
//game start function press enter to start//
console.log("Press enter to start");

window.addEventListener("keydown", function(start) {
  if (start.keyCode === 13 && gameStart === false) {
    gameStart = true;
    initialize();
    console.log("game has started initializing");
  }
});


//global variables//
var wordArray = ["cat", "dog", "sheep", "crow", "cow", "pig", "racoon"];
var randomWord;
var answerArray = [];
var playerGuess;
var score = 0;
var letterCount;
var playerGuess;
var guessCanvas = [];
var guessed;
var lives = [];
var pause = false;

function initialize() {
  randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  letterCount = randomWord.length;
  answerArray = [];
  playerGuess = [];
  guessCanvas = [];
  guessed = [];
  lives = 5;
  for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "*";
    document.getElementById("demo").innerHTML = answerArray.join(" ");
  }
  document.getElementById("life").innerHTML = lives;
  console.log("answerArray: " + answerArray);
  console.log("game is initialized");
  console.log("random word is: " + randomWord);
  console.log("guessCanvas " + guessCanvas);
}



document.onkeyup = function(guessFun) {
  playerGuess = guessFun.key;
  guessed = guessCanvas.includes(playerGuess);
  guessCanvas = guessCanvas + guessFun.key;
  checkFun();
};

function checkFun() {
  if (guessed === false) {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === playerGuess) {
        answerArray[i] = playerGuess;
        console.log("randomWord indexed letter: " + randomWord[i]);
        console.log("answerArray status: " + answerArray[i]);
        document.getElementById("demo").innerHTML = answerArray.join(" ");
        letterCount--;
        console.log("letterCount: " + letterCount);
      }
    }
  }
  if (letterCount === 0) {
    score++;
    document.getElementById("score").innerHTML = score;
    guessed = true;
    initialize();
  }
}
