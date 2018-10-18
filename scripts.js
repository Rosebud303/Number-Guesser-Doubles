  var minBox                   =    document.querySelector('.min-box');
  var maxBox                   =    document.querySelector('.max-box');
  var updateButton             =    document.querySelector('.update-button');
  var playerNameOne            =    document.querySelector('.guess-box2');
  var playerNameTwo            =    document.querySelector('.guess-box3');
  var playerOneGuess           =    document.querySelector('.guess-box1');
  var playerTwoGuess           =    document.querySelector('.guess-box4');
  var challengerOne            =    document.querySelector('.challenger-one-name');
  var challengerTwo            =    document.querySelector('.challenger-two-name');
  var submitButton             =    document.querySelector('.submit-button');
  var clearButton              =    document.querySelector('.clear-button');
  var resetButton              =    document.querySelector('.reset-button');
  var userGuessPlaceholder     =    document.querySelector('.user-guess');
  var userGuessPlaceholder2    =    document.querySelector('.challenger-two-guess');
  var minNum                   =    document.querySelector('.min-num');
  var maxNum                   =    document.querySelector('.max-num');
  var errorMesssage            =    document.querySelector('.hidden');
  var errorMesssage2           =    document.querySelector('.hidden2');
  var rightSide                =    document.querySelector('.right-side');
 

  submitButton.addEventListener('click', submitHandler)
  updateButton.addEventListener('click', updateRange)
  clearButton.addEventListener('click', clearInputs)
  resetButton.addEventListener('click', resetGame)
  playerOneGuess.addEventListener('keyup', enableButtons)
 
  var deleteButton = document.querySelector('.delete-button');
  rightSide.addEventListener('click', deleteCard);


  var correctNumber = randomNumber(100, 1);
  var min = 1;
  var max = 100;
  console.log(correctNumber);
  clearButton.disabled =true; 
  resetButton.disabled=true;

  function enableButtons(){
   if (playerOneGuess.value === ''){
    clearButton.disabled = true;
  }else if (playerOneGuess.value !== ''){
    clearButton.disabled = false; 
  }
}

function submitHandler() {
  var userOneGuess = parseInt(playerOneGuess.value);
  var userTwoGuess = parseInt(playerTwoGuess.value)

  submitAnswer(userOneGuess, playerNameOne.value, "one");
  submitAnswer(userTwoGuess, playerNameTwo.value, "two");

  challengerOne.innerText = playerNameOne.value
  challengerTwo.innerText = playerNameTwo.value

  userGuessPlaceholder.innerText = playerOneGuess.value;
  userGuessPlaceholder2.innerText = playerTwoGuess.value;
}

function clearInputs(event) {
 playerOneGuess.value = "";
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
     // highLow.innerText = 'Invalid Numbers'
   } else if (min < max){
     minNum.innerText = min;
     maxNum.innerText = max;
     minBox.value = "";
     maxBox.value = "";
     correctNumber = randomNumber(max, min);
     errorMesssage.classList.add('hidden2');
     // highLow.innerText = 'Make a Guess'
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

function submitAnswer(guess, currentPlayer, playerNumber) {
  if (!isNaN(guess)) {

    var feedback = document.querySelector(`.challenger-${playerNumber}-rating`);

   if (guess < correctNumber) {
     feedback.innerText = "Sorry, that is too low!"
   

   } else if (guess > correctNumber) {
     feedback.innerText = "Sorry, that is too high!"
   

   } else if (guess == correctNumber) {
     feedback.innerText = "BOOM, you got it!"
 

     appendCard(playerNameOne.value, playerNameTwo.value, currentPlayer);
     resetButton.disabled = false;
     correctNumber = randomNumber(max+ 10, min - 10);
     console.log(correctNumber);
     minNum.innerText = parseInt(minNum.innerText) - 10;
     maxNum.innerText = parseInt(maxNum.innerText) + 10;
   }
 }
}

function appendCard(player1, player2, winner) {

  var cardHtml = 
  `<article class ='generated-card'>
    <div class="card-challenger-names">
      <h4>${player1}</h4>
      <p class = 'vs-symbol'>vs</p>
      <h4>${player2}</h4>
    </div>
    <h1 class ='winner-chicken-dinner'>${winner}</h1>
    <p>WINNER</p>
    <div>
      <button class = 'delete-button'>X</button>
    </div>
  </article>`;
  rightSide.innerHTML = rightSide.innerHTML + cardHtml;
}

function deleteCard(){
 console.log(event)

if (event.target.className === 'delete-button'){
    event.target.parentElement.parentElement.remove()
}

}











  
