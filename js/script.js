/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

/**************** 
 * `quotes` array 
****************/
const quotes = [
  {
    source: 'Anthony Bourdain',
    quote: 'The way you make your omlet reveals your character.'
  },
  {
    source: 'Ernestine Ulmer',
    quote: 'Life is uncertain. Eat dessert first.'
  },
  {
    source: 'Polish Proverb',
    quote: 'Fish, to taste right, must swim three times — in water, in butter and in wine.'
  },
  {
    source: 'Anthelme Brillat-Savarin',
    quote: 'The discovery of a new dish does more for the happiness of mankind than the discovery of a star.'
  },
  {
    source: 'Calvin Trillin',
    quote: 'The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.',
  },
  {
    source:'Harriet Van Horne',
    quote: 'Cooking is like love. It should be entered into with abandon or not at all.'
  },
  {
    source: 'Maya Angelou',
    quote: 'I\'m just someone who likes cooking and for whom sharing food is a form of expression.'
  },
  {
    source:'Don Quixote',
    quote: 'All sorrows are less with bread.'
  },
  {
    source:'Julia Childs',
    quote: 'If you’re afraid of butter, use cream.'
  },
  {
    source:'Laiko Bahrs',
    quote: 'When baking, follow directions. When cooking, go by your own taste.'
  },
  {
    source:'Madam Benoit',
    quote: 'I feel a recipe is only a theme, which an intelligent cook can play each time with a variation.'
  },
  {
    source: 'Paul Prudhomme',
    quote: 'You don\'t need a silver fork to eat good food.'
  },
  {
    source:'Marcel Boulestin',
    quote: 'Cookery is not chemistry. It is an art. It requires instinct and taste rather than exact measurements.'
  },
  {
    source: 'Auguste Escoffier',
    quote: 'Good food is the foundation of genuine happiness.',
    epithet: 'The King of Chefs'
  },
  {
    source:'Julia Childs',
    quote: 'If you’re afraid of butter, use cream. '
  },
  {
    source:'Auguste Escoffier',
    quote: 'The greatest dishes are very simple.',
    epithet: 'The King of Chefs'
  },
  {
    source:'Jarod Kintz',
    quote: 'I wish my stove came with a Save As button like Word has. That way I could experiment with my cooking and not fear ruining my dinner.'
  },
  {
    source: 'Julia Childs',
    quote: 'With enough butter anything is good.'
  },
  {
    source:'Fernand Point',
    quote: 'In all professions without doubt, but certainly in cooking one is a student all his life.',
    epithet: 'Father of Modern French Cuisine'
  },
  {
    source:'Dan Barber',
    quote: 'Clean plates don’t lie.'
  },
  {
    source:'Madam Benoit',
    quote: 'I feel a recipe is only a theme, which an intelligent cook can play each time with a variation.'
  },
  {
    source: 'Paul Prudhomme',
    quote: 'You don\'t need a silver fork to eat good food.'
  },
  {
    source:'Marcel Boulestin',
    quote: 'Cookery is not chemistry. It is an art. It requires instinct and taste rather than exact measurements.'
  },
  {
    source: 'Auguste Escoffier',
    quote: 'Good food is the foundation of genuine happiness.'
  },
  {
    source:'Julia Childs',
    quote: 'If you’re afraid of butter, use cream. '
  },
  {
    source:'Auguste Escoffier',
    quote: 'The greatest dishes are very simple.',
    epithet: 'The King of Chefs'
  },
  {
    source:'Jarod Kintz',
    quote: 'I wish my stove came with a Save As button like Word has. That way I could experiment with my cooking and not fear ruining my dinner.'
  },
  {
    source: 'Emeril Lagasse',
    quote: 'If you don’t follow your dream, who will?'
  },
  {
    source:'Jose Andres',
    quote: 'I always say that I don\'t believe I\'m a chef. I try to be a storyteller.'
  },
  {
    source:'Fernand Point',
    quote: 'In the orchestra of a great kitchen, the sauce chef is a soloist.',
    epithet: 'Father of Modern French Cuisine'
  },
  {
    source:'Marcel Riemer',
    quote: 'You have only failed if you have completely given up on your goal.',
    citation: 'Slamming It Out!: How I got $#!t done in 5* kitchens',
    year: 2019
  }

]
/*****************
 * `colors` array
 ****************/
/*** 
 * In order to maintain some control over the aesthetic, pre-selected color schemes are stored in this array to be randomized later.
***/
const colors = [
  {
    background: '#DE07C5',
    button: '#B506A1'
  },
  {
    background: '#842DF7',
    button: '#6D09F0'
  },
  {
    background: '#2DC8F7',
    button: '#09BAF0'
  },
  {
    background: '#F79F2B',
    button: '#F08C09'
  },
  {
    background: '#916591',
    button: '#7C567C'
  },
  {
    background: '#CE6D8B',
    button: '#C34C72'
  },
  {
    background: '#540F84',
    button: '#480D72'
  },
  {
    background: '#850F65',
    button: '#720D57'
  },
  {
    background: '#386C0B',
    button: '#305B09'
  },
  {
    background: '#23022E',
    button: '#1D0226'
  },
  {
    background: '#6B0F1A',
    button: '#5C0D16'
  }
]

/*****************************
 * `getRandomQuote` function
 *****************************/
/*** 
 * Function selects a random quote.
 * `max` represents total number of objects in the array.
 * A ramdom number is generated and stored in `index`.
 * `index` determines the array index containing a quote object.
***/
function getRandomQuote () {
  max = Math.floor(quotes.length);
  index = Math.floor(Math.random() * (max));

  return quotes[index];
}

/*****************************
 * `getRandomColor` function
 *****************************/
/*** 
 * Function selects a random color scheme.
 * `max` represents total number of objects in the `colors` array.
 * A ramdom number is generated and stored in `index`.
 * `index` determines the array index containing a color object.
***/
function getRandomColor () {
  colorsMax = Math.floor(colors.length);
  colorsIndex = Math.floor(Math.random() * (colorsMax));
 
  return colors[colorsIndex];
}

/***********************
 * `changeColor` function
************************/
/***
 * Function complies the displayed text.
 * `quote` represents the quotes object of the currently displayed quote.
 * Conditional statements makes allowances for missing property values.
***/
 function changeColor () {
    let randomColor = getRandomColor();
    let background = randomColor.background;
    let body = document.body;
    let button = document.getElementById('load-quote');

         body.style.backgroundColor = randomColor.background;
   return button.style.backgroundColor= randomColor.button;
 }

/***********************
 * `resetTimer` function
 **********************/
function startTimer() {
  timer= setInterval ('printQuote()',5000);
}
 
/***********************
 * `clearTimer` function
 **********************/
function clearTimer() {
   clearInterval(timer);
}

//Automatically cycles through `quotes` array by calling `printQuote` on initial page load.
timer= setInterval ('printQuote()',5000);

/***********************
 * `printQuote` function
************************/
/***
 * Function complies the displayed text.
 * `quote` represents the quotes object of the currently displayed quote.
 * Conditional statements makes allowances for missing property values.
***/
function printQuote () {
  let randomQuote = getRandomQuote();
  let quoteBox= document.getElementById('quote-box');
  let quote = '<p class="quote">' + randomQuote.quote + '</p>';
      quote += '<p class="source">' + randomQuote.source;
    
    if (randomQuote.epithet) {
      quote += '<span class="citation">' + randomQuote.epithet + '</span>';
    }  

    if (randomQuote.citation) {
      quote += '<span class="citation">' + randomQuote.citation + '</span>';
    } 

    if (randomQuote.year) {
      quote += '<span class="year">' + randomQuote.year + '</span>';
    }

      quote += '</p>';

  changeColor();
  clearTimer(timer);
  startTimer();
  return quoteBox.innerHTML= quote;
}

//Runs `printQuote` and `changeColor` functions on the initial page load.
printQuote();
changeColor();

/***
 * Click event listener for the 'Show Another Quote' button.
 * Triggers printQuote function.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);