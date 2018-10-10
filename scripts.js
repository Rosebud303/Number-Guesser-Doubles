var minBox                   =   document.querySelector('.min-box');
var maxBox                   =   document.querySelector('.max-box');
var updateButton             =   document.querySelector('.update-button');
var guessBox                 =   document.querySelector('.guess-box1')
var submitButton             =   document.querySelector('.submit-button')
var clearButton              =   document.querySelector('.clear-button')
var resetButton              =   document.querySelector('.reset-button')
var userGuessPlaceholder     =   document.querySelector('.user-guess')
var minNum                   =   document.querySelector('.min-num')
var maxNum                   =   document.querySelector('.max-num')
var highLow                  =   document.querySelector('.high-low')

submitButton.addEventListener('click', submitGuess)
updateButton.addEventListener('click', updateRange)
clearButton.addEventListener('click', clearInputs)
resetButton.addEventListener('click', resetGame)

var correctNumber = randomNumber();


function submitGuess(event) {
  event.preventDefault();
  userGuessPlaceholder.innerText = guessBox.value;
  var userGuess = parseInt(guessBox.value);

  if (userGuess < correctNumber) {
    highLow.innerText = "Sorry, that is too low!"
  } else if (userGuess > correctNumber) {
    highLow.innerText = "Sorry, that is too high!"
  } else {
    console.log(userGuess);
      highLow.innerText = "BOOM, you got it!" 
  }
   guessBox.value = "";
}

function updateRange(event){
  minNum.innerText = minBox.value;
  maxNum.innerText = maxBox.value;
  minBox.value = "";
  maxBox.value = "";
}


function clearInputs(event) {
  guessBox.value = "";
  minBox.value = "";
  maxBox.value = "";
}

// var correctNumber = randomNumber();

function randomNumber(){
 return Math.floor(Math.random()*100) +1;
}

console.log(correctNumber)

function resetGame(event) {
  clearInputs();
  correctNumber = randomNumber();
  console.log(correctNumber)
}

