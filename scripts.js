var minBox                   =    document.querySelector('.min-box');
var maxBox                   =    document.querySelector('.max-box');
var updateButton             =    document.querySelector('.update-button');
var guessBox                 =    document.querySelector('.guess-box1');
var submitButton             =    document.querySelector('.submit-button');
var clearButton              =    document.querySelector('.clear-button');
var resetButton              =    document.querySelector('.reset-button');
var userGuessPlaceholder     =    document.querySelector('.user-guess');
var minNum                   =    document.querySelector('.min-num');
var maxNum                   =    document.querySelector('.max-num');
var highLow                  =    document.querySelector('.high-low');
var errorMesssage            =    document.querySelector('.hidden');
var errorMesssage2           =    document.querySelector('.hidden2')

submitButton.addEventListener('click', submitGuess)
updateButton.addEventListener('click', updateRange)
clearButton.addEventListener('click', clearInputs)
resetButton.addEventListener('click', resetGame)
guessBox.addEventListener('keyup', enableButtons)

var correctNumber = randomNumber(100, 1);
var min = 1;
var max = 100;
console.log(correctNumber);

clearButton.disabled =true; 
resetButton.disabled=true;
// submitButton.disabled= true;

function enableButtons(){
 if (guessBox.value === ''){
  clearButton.disabled = true;

 }else if (guessBox.value !== ''){
  clearButton.disabled = false; 

 }
}

function submitGuess() {
 var userGuess = parseInt(guessBox.value);
 if (!isNaN(userGuess)) {
   userGuessPlaceholder.innerText = guessBox.value;
   if (userGuess < correctNumber) {
     highLow.innerText = "Sorry, that is too low!"
   } else if (userGuess > correctNumber) {
     highLow.innerText = "Sorry, that is too high!"
   } else if (userGuess == correctNumber) {
     highLow.innerText = "BOOM, you got it!"
     resetButton.disabled = false;
     correctNumber = randomNumber(max+ 10, min - 10);
     console.log(correctNumber);
     minNum.innerText = parseInt(minNum.innerText) - 10;
     maxNum.innerText = parseInt(maxNum.innerText) + 10;
   }
 }
}



function clearInputs(event) {
 guessBox.value = "";
 maxNum.value = "";
 minNum.value = "";
}


function randomNumber(max, min){
return Math.floor(Math.random()*(max-min+1) +min);
}


function updateRange(){
 min = parseInt(minBox.value);
 max = parseInt(maxBox.value);

   if (min > max) {
   errorMesssage.classList.remove('hidden');
   highLow.innerText = 'Invalid Numbers'
 } else if (min < max){
    minNum.innerText = min;
    maxNum.innerText = max;
    minBox.value = "";
    maxBox.value = "";
    correctNumber = randomNumber(max, min);
    errorMesssage.classList.add('hidden2');
    highLow.innerText = 'Make a Guess'
    console.log(correctNumber);
 }
   if (min || max === '') {
     errorMesssage.classList.remove('hidden');
   }
}


function resetGame(event) {
clearInputs();
correctNumber = randomNumber(max, min);
min = 1;
max = 100;
maxNum.innerText = 100;
minNum.innerText = 1;
console.log(correctNumber);

};


// function getMinNum(){
//   return parseInt(document.querySelector(".min-num").innerText);
// }
// function setMinNum(){
//   var tempNum = parseInt(document.querySelector(".min-num").innerText);
//   document.querySelector(".min-num").innerText = tempNum -10;
// }
 //  if ( userGuess < min || userGuess > max) {
 //   highLow.innerText = 'Sorry, guess is out of range...'
 // }



// function submitGuess() {
// userGuessPlaceholder.innerText = guessBox.value;
// var userGuess = parseInt(guessBox.value);

// if (userGuess < correctNumber) {
//   highLow.innerText = "Sorry, that is too low!"
// } else if (userGuess > correctNumber) {
//   highLow.innerText = "Sorry, that is too high!"
// } else {
  
//     highLow.innerText = "BOOM, you got it!"
//     resetButton.disabled = false;
//     correctNumber = randomNumber(max+ 10, min - 10);
//     console.log(correctNumber);
//     minNum.innerText = parseInt(minNum.innerText) - 10;
//     maxNum.innerText = parseInt(maxNum.innerText) + 10;
//     // setMinNum();
//   }
//   if (guessBox.value === "") {
//    errorMesssage2.classList.remove('hidden2');
//   }else if(guessBox.value !== "") {
//    errorMesssage2.classList.add('hidden2');
//   }

//  guessBox.value = "";
//  clearButton.disabled =true; 
// };
