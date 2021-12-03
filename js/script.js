/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

/**************** 
 * `quotes` array 
****************/
const quotes = [
  {
    source: 'J. Cole',
    citation: 'Love Yourz', 
    year: 2014,
    quote: 'It\'s beauty in the struggle, ugliness in the success.'
  }
  , 
  {
    source: 'J. Cole',
    citation: 'Too Deep For The Intro',
    year: 2016,
    quote: 'If they don\'t know your dreams, then they can\'t shoot them down.'
  }
  ,
  {
    source: 'Tupac Shakur',
    citation: 'Changes',
    year: 1998,
    quote: 'Learn to see me as a brother instead of two distant strangers.'
  }
  , 
  {
    source: 'Nas',
    citation: 'Hate Me Now',
    year: 1999,
    quote: 'People fear what they don\'t understand, hate what they can\'t conquer. Guess it\'s just the theory of man.'
  }
  ,
  {
    source: 'Wale',
    citation: 'Aston Martin Music (Freestyle)',
    year: 2010,
    quote: 'Life without dreaming is a life without meaning.'
  }
  ,
  {
    source: 'Kanye West',
    citation: 'Homecoming',
    year: 2007,
    quote: 'Reach for the stars so if you fall you land on a cloud.'
  }
  ,
  {
    source: 'Jay-Z',
    citation: 'A Dream',
    year: 2002,
    quote: 'Remind yourself, nobody’s built like you. You design yourself.'
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
  }
  ,
  {
    background: '#842DF7',
    button: '#6D09F0'
  }
  ,
  {
    background: '#2DC8F7',
    button: '#09BAF0'
  }
  ,
  {
    background: '#F79F2B',
    button: '#F08C09'
  }
  ,
  {
    background: '#916591',
    button: '#7C567C'
  }
  ,
  {
    background: '#CE6D8B',
    button: '#C34C72'
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
   //let background = randomColor.background;
   //let button = ;
       //body = document.body;
       //clicker = document.getElementsByClassName('load-quote');

          document.body.style.backgroundColor = randomColor.background;
   return document.getElementById('load-quote').style.backgroundColor= randomColor.button;
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
  let quote = '<p class="quote">' + randomQuote.quote + '</p>';
      quote += '<p class="source">' + randomQuote.source;
      
    if (randomQuote.citation) {
      quote += '<span class="citation">' + randomQuote.citation + '</span>';
    } 

    if (randomQuote.year) {
      quote += '<span class="year">' + randomQuote.year + '</span>';
    }

  quote += '</p>';

  let quoteBox= document.getElementById('quote-box');
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