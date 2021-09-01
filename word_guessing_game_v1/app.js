let letterKeys = document.getElementById('qwerty');
let startGameButton = document.querySelector('.btn__reset');
let overlay = document.getElementById('overlay');
let keyboard = document.querySelectorAll('.keyrow button');

console.log(keyboard);


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
  let randomPhrase = '';
  let letterArray = [];
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
    let ul = document.querySelector('#phrase ul');
    listItem = document.createElement ('li');
    listItem.textContent = letter;
    ul.appendChild(listItem);

      if (letter.includes(' ')) {
       console.log('space');
       } else {
       listItem.className = 'letter';
      }
   }
}

addPhraseToDisplay(letterArray);


// Button event handler on click
startGameButton.addEventListener('click', (e) => {
  clicker = e.target;
  overlay.style.display = 'none';
  console.log(clicker);
})

keyboard.addEventListener('click', (e) => {
  userSelectKey = event.target.innerText;
  console.log(userSelectKey);

  function checkLetter (click) {
    keySelect = e.target;
    element = document.getElementsByClassName('letter');
    let correctLetter = '';
    for (i = 0; i < letterArray.length; i ++) {
      if (letterArray.includes(keySelect)) {
        letterArray[i].className = 'show';
        correctLetter += letterArray[i];
      } else {
        null;
      }
    }
    return correctLetter;
  }
});
