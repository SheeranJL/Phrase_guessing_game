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


//Function to obtain a random item from phrase array and converting it into a new array containing each letter of the phrase
function getRandomPhraseArray (array) {
  let selectRandom = Math.floor(Math.random() * array.length);
  randomPhraseLetters = phrases[selectRandom].split('');
  return randomPhraseLetters;
}


//storing the phrase-letter array in variable
let letterArray = getRandomPhraseArray(phrases);


//function to loop through each individual item in the letter array (each letter in the phrase)
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
}


addPhraseToDisplay(letterArray);



// Button event handler on click
startGameButton.addEventListener('click', (e) => {
  clicker = e.target;
  overlay.style.display = 'none';
  console.log('success');
})

//A function which checks whether a letter is contained within the letter array
function checkLetter(button) {
  const letters = document.getElementsByClassName('letter'); //array of lists
  let match = button.textContent;
  let correctKey = null; //buttonkey will either be null if guess is incorrect, or take the value of the button's textcontent.

  Array.from(letters).forEach((letters) => { //iterate through letters to match user selection.
      if (button.textContent === letters.textContent.toLowerCase()) {
      letters.classList = 'show letter';
      correctKey = match;
    } else {

    };
  })
  return correctKey;
}



//for loop to iterate over the button nodes in the keyboard variable. Since it's selecting all nodes, we need a loop.
for (let i = 0; i < keyboard.length; i ++) {
  let letter = keyboard[i];

  letter.addEventListener('click', (event) => {
    userSelectKey = event.target;
    checkLetter(userSelectKey);
  });
}


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

function checkWin () {
  const title = document.querySelectorAll('title')[0];
  const letterClass = document.getElementsByClassName('letter');
  const showClass = document.getElementsByClassName('letter show');

  if (letterClass.length === showClass.length) {
  overlay.style.display = '';
  overlay.className = 'win';
  overlay.style.display = 'flex';
  document.querySelector("#overlay > h2").textContent = "You're a Winner!";
  startGameButton.textContent = 'Restart'

  }

  if ( missed > 4 ) {
    overlay.style.display = '';
    overlay.className = 'lose';
    document.querySelector("#overlay > h2").textContent = "You ran out of lives. Try again";
    overlay.style.display = 'flex';
    startGameButton.textContent = 'Restart'
    for (i = 0; i < 5; i ++) {

    }
    }
  };
