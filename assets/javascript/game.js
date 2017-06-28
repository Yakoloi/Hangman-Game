

document.getElementById("message").innerHTML = "Welcome to Word Barn Press Enter to Start";
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
var images = ["images/cat.jpg"]
var wordArray = ["cat", "dog", "sheep", "crow", "cow", "pig", "racoon", "chicken", "goat", "horse"];
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
  document.getElementById("message").innerHTML = "enter a letter";
  document.getElementById("guesses").innerHTML = "Guessed letters: ";
  randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  letterCount = randomWord.length;
  answerArray = [];
  keyPress = [];
  guessCanvas = [];
  guessed = [];
  lives = 5;
  guessed = false;
  pause = false;
  console.log("randomWord: " + randomWord);
  console.log("lettercount: " + letterCount);
  for (var i = 0; i < letterCount; i++) {
    answerArray[i] = "*";
    document.getElementById("mask").innerHTML = answerArray.join(" ");
  }
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("lives").innerHTML = "Lives: " + lives;
}

document.onkeyup = function(guessFun) {
  if (guessFun.keyCode > 64 && guessFun.keyCode < 91 && pause === false) {
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
    document.getElementById("guesses").innerHTML ="Guessed letters: " + guessCanvas;
    matchCheck();
  } else {
    document.getElementById("message").innerHTML = "You already guessed that letter";
  }
}

function matchCheck() {
  match = randomWord.includes(keyPress);
  console.log("match: " + match);
  replaceLetter();
}

function replaceLetter() {
  if (match === true) {
    document.getElementById("message").innerHTML = "Good answer";
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
    document.getElementById("message").innerHTML = "Wrong answer";
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    lossCheck();
  }
}

function lossCheck(){
  if (lives <= 0 ){
    score = 0;
    document.getElementById("score").innerHTML = "Score: " + score;
    resetLoss();
  }
}

function maskCheck() {
  answerMaskOn = answerArray.includes("*");
  winCheck();
}

function winCheck() {
  if (answerMaskOn === false) {
    score++;

    document.getElementById("score").innerHTML = "Score: " + score;
    console.log("Congratulation!");
    resetWin();
  }
}

function resetWin() {
  pause = true;
  document.getElementById("message").innerHTML = "Congraulations You win!";
  setTimeout(function() {
    initialize();
  }, 3000);
}

function resetLoss() {
  pause = true;
  document.getElementById("message").innerHTML = "Game over!";
  setTimeout(function() {
    initialize();
  }, 3000);
}
