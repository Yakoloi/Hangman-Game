var gameStart = false;
var pause = true;
//game start function press enter to start//
console.log("Press enter to start");

document.addEventListener("keyup", function(start) {
  if (start.keyCode === 13 && gameStart === false && pause === true) {
    gameStart = true;
    initialize();
    pause = false;
    console.log("game has started initializing");
  }
});

//global variables//
var wordArray = ["cat", "dog", "sheep", "crow", "cow", "pig", "racoon"];
var randomWord;
var answerArray = [];
var keyPress;
var score = 0;
var letterCount;
var guessCanvas = [];
var guessed;
var lives = [];
var match;
var winState;

function initialize() {
  randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  letterCount = randomWord.length;
  answerArray = [];
  keyPress = [];
  guessCanvas = [];
  guessed = [];
  lives = 5;
  guessed = false;
  console.log("randomWord: " + randomWord);
  console.log("lettercount: " + letterCount);
  for (var i = 0; i < letterCount; i++) {
    answerArray[i] = "*";
    document.getElementById("mask").innerHTML = answerArray.join(" ");
  }
  document.getElementById("score").innerHTML = score;
  document.getElementById("lives").innerHTML = lives;
}

document.onkeyup = function(guessFun) {
  if (guessFun.keyCode > 64 && guessFun.keyCode < 91) {
    keyPress = guessFun.key;
    console.log("keyPress: " + keyPress);
    wordCheck();
  } else {
    console.log("error");
  }
};

function wordCheck() {
  guessed = guessCanvas.includes(keyPress);
  console.log("guessCanvas: " + guessCanvas);
  console.log("guessed: " + guessed);
  compare();
}

function compare() {
  if (guessed === false) {
    guessCanvas = guessCanvas + keyPress;
    matchCheck();
  } else {
    console.log("you already guessed that!");
  }
}

function matchCheck() {
  match = randomWord.includes(keyPress);
  console.log("match: " + match);
  replaceLetter();
}

function replaceLetter() {
  if (match === true) {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === keyPress) {
        answerArray[i] = keyPress;
        document.getElementById("mask").innerHTML = answerArray.join(" ");
        console.log("randomWord index: " + randomWord[i]);
        console.log("AnswerArray: " + answerArray);
        maskCheck();
      }
    }
  } else {
    lives--;
    document.getElementById("lives").innerHTML = lives;
  }
}

function maskCheck() {
  answerMaskOn = answerArray.includes("*");
  winCheck();
}

function winCheck() {
  if (answerMaskOn === false) {
    score++;
    document.getElementById("score").innerHTML = score;
    console.log("Congratulation!");
    pause();
  }
}
