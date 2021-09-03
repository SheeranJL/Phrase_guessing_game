const letterKeys = document.getElementById('qwerty');
const startGameButton = document.querySelector('.btn__reset');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const keyboard = document.querySelectorAll('.keyrow button');
const ul = document.querySelector('#phrase ul');
const hearts = document.getElementsByClassName('tries') // Selected each heart element in it's own li using it's class name
const ol = document.querySelector('ol'); //selected the OL element which is the parent of the hearts
const lostHeartImg = document.querySelectorAll('img');
let liImg = document.getElementsByTagName('img');

let missed = 0;

//Array of phrases
let phrases = [
  'Benefit of the doubt',
  'Live and learn',
  'A piece of cake',
  'An arm and a leg',
  'Live for today',
  'Back to square one',
  'Once in a blue moon'
];

//Function to obtain a random item from phrase array and splitting it into characters in a new array
function getRandomPhraseArray (array) {
  let selectRandom = Math.floor(Math.random() * array.length);
  randomPhraseLetters = phrases[selectRandom].split('');
  return randomPhraseLetters;
}

//storing the letter array in a variable
let letterArray = getRandomPhraseArray(phrases);

//This function loops through each letter in the array and appends to the gameboard while setting it's class when called
function addPhraseToDisplay(array) {
  for (let i = 0; i < array.length; i++) {
    let letter = array[i];
    listItem = document.createElement ('li');
    listItem.textContent = letter;

    if (letter.includes(" ")) {
      listItem.className = 'space';
      } else {
      listItem.className = 'letter';
      }

    ul.appendChild(listItem);
   }
};
//Calling the function above to append letters on the gameboard
addPhraseToDisplay(letterArray);

// Event handler for initial 'start game' button. Removes the overlay class and displays the gameboard.
startGameButton.addEventListener('click', (e) => {
  clicker = e.target;
  overlay.style.display = 'none';
})

//A function which checks whether a letter is contained within the letter array, if there's a match, a class is applied to the letter.
function checkLetter(button) {
  const letters = document.getElementsByClassName('letter');
  let match = button.textContent;
  let correctKey = null;
  //iterate through each letter to check for a match
  Array.from(letters).forEach((letters) => {
      if (button.textContent === letters.textContent.toLowerCase()) {
      letters.classList = 'show letter';
      correctKey = match;
      };
    })
  return correctKey;
};

//for loop to iterate over the button nodes in the keyboard variable. Since it's selecting all nodes, we need a loop.
for (let i = 0; i < keyboard.length; i ++) {
  let letter = keyboard[i];

  letter.addEventListener('click', (event) => {
    userSelectKey = event.target;
    checkLetter(userSelectKey);
  });
};


qwerty.addEventListener('click', (event) => {
  key = event.target;
  if (key.type === 'submit') {
    key.className = 'chosen';
    key.setAttribute('disabled', true);
    keyLetter = key.textContent
    letterFound = checkLetter(key);
    if (letterFound === null) {
      liImg[missed].src = 'images/lostHeart.png';
      missed ++;
    }
  }
  checkWin();
});

//function to handle what happens during a win or loss (setting classes and text)
function winLose (status, winLossText) {
  overlay.style.display = '';
  overlay.className = status;
  overlay.style.display = 'flex';
  startGameButton.textContent = 'restart';
  document.querySelector("#overlay > h2").textContent = winLossText;
};

function checkWin () {
  const title = document.querySelectorAll('title')[0];
  const letterClass = document.getElementsByClassName('letter');
  const showClass = document.getElementsByClassName('letter show');
  if (letterClass.length === showClass.length) {
    winLose('win', 'You win!');
  } else if ( missed > 4 ) {
    winLose('lose', 'You ran out of lives, try again');
  };
};
