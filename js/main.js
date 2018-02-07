var wordpool = [
  'Holocaust Denier',
  'Cancer',
  'Dwarfism',
  'Democrats',
  'Ann Coulter',
  'Transgender Woman',
  'Hot Tea',
  'Tantrums',
  'First Lady',
  'Caitlyn Jenner',
  'Hillary',
  'Obama',
  'Millennials',
  'Tom Cruise'
];


var wordDoms = []; //nodelist
//CREATE WORD BOARD
var wordBoard = document.getElementById('word-board');

var createBoard = function () {
  for (i=0; i<wordpool.length; i++) {
    var wordElement = document.createElement('div');
    wordElement.innerHTML = wordpool[i];
    wordElement.setAttribute('data-id', i);
    wordElement.className = 'float';
    wordBoard.appendChild(wordElement);
    wordDoms.push(wordElement);
  }
};


var containerElement = document.querySelector('ul');

function checkForMatch() {
  //this = button you clicked
  var parentList = this.parentNode;
  var inputTextField = parentList.querySelector('input');
  var userInputValue = inputTextField.value;
  var checkDataWord = inputTextField.getAttribute('data-word');
  var articleLink = parentList.querySelector('a');
  console.log(articleLink);
  userInputValue = userInputValue.toLowerCase();
  if (userInputValue === checkDataWord) {
    for (var i=0; i<wordDoms.length; i++) {
      var wordDomText = wordDoms[i].innerHTML;
      wordDomText = wordDomText.toLowerCase();

      if (wordDomText === userInputValue) {
        //change background color of wordpool word
        wordDoms[i].className = 'usedWord';
        inputTextField.style.backgroundColor = '#d4ebe1';
        articleLink.style.display = 'block';
        break;
      }
    }
  } else {
    inputTextField.className = 'wrongField';
    alert('Sorry, try again.');
  }
};


function getUserInputs(){
  var listItems = document.querySelectorAll('li');

  for (i=0; i<listItems.length; i++) {
    var listBtn = listItems[i].querySelector('button');
    var listInputField = listItems[i].querySelector('input');
    listBtn.addEventListener('click', checkForMatch);
  }
};

getUserInputs();
createBoard();
