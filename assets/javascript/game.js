var wordArray = ["CAT", "DOG", "FISH", "COW", "SHEEP"];
//playword spits out a random string(word) of the array words
var playWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(playWord);

var emptyArray = [];

for (var i = 0; i< playWord.length; i++) {
  emptyArray[i] = "*";
}

var us = document.getElementById('ldisplay');
us.innerHTML = emptyArray;

document.onkeyup = function(event) {

    var keyPress = String.fromCharCode(event.keyCode);
    var parsedString = playWord.split("")
        console.log(parsedString);
    var ans = parsedString.indexOf(keyPress);
    console.log(ans + " index number");
    console.log(parsedString[ans] + " parsedString[ans]");

    if (parsedString[ans] == keyPress) {
      console.log("hooray it matches")
      document.getElementById('uletters').innerHTML += keyPress;
    }

    else {
      console.log ("wrong")
      document.getElementById('wguess').innerHTML += keyPress;
    }

  }
